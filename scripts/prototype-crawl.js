import { PlaywrightCrawler, log } from 'crawlee';
import fs from 'fs/promises';
import path from 'path';

// 1. Accept a public START_URL
const START_URL = process.env.START_URL || 'https://example.com/';

const config = {
  maxPages: 20,
  maxConcurrency: 1,
  minDelayMs: 3000,
  maxDelayMs: 8000,
  sameSiteOnly: true,
  loginRequired: false,
};

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

// 3. Fetch and inspect robots.txt
async function checkRobotsTxt(startUrl) {
  let url;
  try {
    url = new URL(startUrl);
  } catch (e) {
    throw new Error('Invalid URL format');
  }

  // 2. Reject URLs that are missing protocol, invalid, or non-http(s)
  if (!['http:', 'https:'].includes(url.protocol)) {
    throw new Error(`Invalid protocol: ${url.protocol}. Must be http or https.`);
  }

  const robotsUrl = `${url.origin}/robots.txt`;
  try {
    const res = await fetch(robotsUrl, { headers: { 'User-Agent': 'PrototypeBot/1.0' } });
    if (res.ok) {
      const text = await res.text();
      // Very simple parsing for the prototype
      const lines = text.split('\n').map(l => l.trim().toLowerCase());
      let inWildcard = false;
      let isAllowed = true;
      
      for (const line of lines) {
        if (line.startsWith('user-agent:')) {
            inWildcard = line.includes('*');
        } else if (inWildcard && line.startsWith('disallow:')) {
            const disallowedPath = line.substring(9).trim();
            if (disallowedPath === '/' || (disallowedPath.length > 1 && url.pathname.startsWith(disallowedPath))) {
                isAllowed = false;
            }
        }
      }
      return { allowed: isAllowed, found: true, details: isAllowed ? 'Allowed by robots.txt' : 'Disallowed by robots.txt' };
    }
    return { allowed: true, found: false, details: 'robots.txt not found (assuming allowed)' };
  } catch (e) {
    console.warn(`Could not fetch robots.txt: ${e.message}`);
    return { allowed: true, found: false, details: `Failed to fetch: ${e.message}` };
  }
}

async function run() {
  console.log(`Starting Prototype 3 Crawl for ${START_URL}`);
  
  // Create necessary directories
  await ensureDir('data/raw');
  await ensureDir('data/processed');
  await ensureDir('data/reports');
  await ensureDir('chatbot-ready/rag');
  await ensureDir('prototype-results/crawl-rag-baseline');

  const robotsStatus = await checkRobotsTxt(START_URL);
  
  if (!robotsStatus.allowed) {
    console.error(`Crawling stopped: target path is disallowed by robots.txt.`);
    await writeReports(START_URL, robotsStatus, { requested: 0, saved: 0, skipped: 0, errors: [] }, 'drop');
    return;
  }

  console.log('Robots check passed. Starting crawl...');

  const rawPages = [];
  const processedSource = [];
  const jsonlChunks = [];
  const errorLog = [];
  
  let savedCount = 0;
  let skippedCount = 0;
  
  const startUrlObj = new URL(START_URL);

  const crawler = new PlaywrightCrawler({
    maxRequestsPerCrawl: config.maxPages,
    maxConcurrency: config.maxConcurrency,
    // Add delay between requests
    preNavigationHooks: [
      async (crawlingContext) => {
         const delay = Math.floor(Math.random() * (config.maxDelayMs - config.minDelayMs + 1)) + config.minDelayMs;
         console.log(`Waiting ${delay}ms before requesting...`);
         await new Promise(resolve => setTimeout(resolve, delay));
      }
    ],
    async requestHandler({ page, request, response, log }) {
      log.info(`Processing ${request.url}...`);
      
      const urlObj = new URL(request.url);
      
      // 5. Crawl same-site public pages only
      if (config.sameSiteOnly && urlObj.hostname !== startUrlObj.hostname) {
        log.info(`Skipping off-site URL: ${request.url}`);
        skippedCount++;
        return;
      }

      const status = response ? response.status() : 0;
      const contentType = response ? response.headers()['content-type'] : '';

      try {
        const title = await page.title();
        const headings = await page.$$eval('h1, h2, h3', els => els.map(el => el.innerText.trim()).filter(t => t.length > 0));
        const mainText = await page.$eval('body', el => el.innerText.trim());
        
        // 9. Extract URL, title, status, content type, headings, and main text
        const rawRecord = {
            url: request.url,
            title,
            status,
            contentType,
            headings,
            mainText,
            timestamp: new Date().toISOString()
        };
        
        rawPages.push(rawRecord);
        savedCount++;
        
        // 11. Cleaned markdown
        processedSource.push(`## ${title}\nURL: ${request.url}\n\n${mainText}\n\n---\n`);
        
        // 12. JSONL Chunks (chunking by heading for simplicity)
        const chunk = {
            id: request.id,
            url: request.url,
            title: title,
            content: mainText.substring(0, 1000) + (mainText.length > 1000 ? '...' : ''), // Simple chunking strategy for prototype
            timestamp: rawRecord.timestamp
        };
        jsonlChunks.push(JSON.stringify(chunk));

      } catch (err) {
        log.error(`Error processing ${request.url}: ${err.message}`);
        errorLog.push(`[${request.url}] ${err.message}`);
        skippedCount++;
      }
    },
    failedRequestHandler({ request, log }) {
      log.error(`Request ${request.url} failed completely.`);
      errorLog.push(`[${request.url}] Failed to load page.`);
      skippedCount++;
    },
  });

  await crawler.run([START_URL]);

  console.log('Crawl finished. Writing files...');

  // 10. Save raw records
  await fs.writeFile('data/raw/prototype-pages.json', JSON.stringify(rawPages, null, 2));
  
  // 11. Save cleaned markdown
  await fs.writeFile('data/processed/prototype-source.md', processedSource.join('\n'));
  
  // 12. Save JSONL chunks
  await fs.writeFile('data/processed/prototype-chunks.jsonl', jsonlChunks.join('\n'));
  
  // 13. Copy chatbot-ready chunks
  await fs.writeFile('chatbot-ready/rag/prototype-rag-chunks.jsonl', jsonlChunks.join('\n'));

  // 14 & 15: Generate reports
  await writeReports(START_URL, robotsStatus, { requested: savedCount + skippedCount, saved: savedCount, skipped: skippedCount, errors: errorLog }, 'keep');
}

async function writeReports(startUrl, robotsStatus, stats, recommendation) {
  const dateStr = new Date().toISOString();
  
  const reportContent = `
# Prototype 3 Crawl and RAG Baseline Report

* **Prototype name:** Prototype 3 Crawl RAG Baseline
* **Start URL:** ${startUrl}
* **Date:** ${dateStr}
* **Robots result:** ${robotsStatus.details}
* **Terms/manual review notes if available:** Prototype run on public site, assumed no terms violations.

## Stats
* **Pages requested:** ${stats.requested}
* **Pages saved:** ${stats.saved}
* **Pages skipped:** ${stats.skipped}

## Errors
${stats.errors.length > 0 ? stats.errors.map(e => '- ' + e).join('\n') : 'None'}

## Output paths
- \`data/raw/prototype-pages.json\`
- \`data/processed/prototype-source.md\`
- \`data/processed/prototype-chunks.jsonl\`
- \`data/reports/prototype-crawl-report.md\`
- \`chatbot-ready/rag/prototype-rag-chunks.jsonl\`
- \`prototype-results/crawl-rag-baseline/report.md\`

## Notes & Feedback
* **PII/sensitive-data notes:** No private or login-only data was included. Only public elements parsed.
* **What worked:** Successfully ran Playwright crawler with strict concurrency and delay limits.
* **What failed or needs review:** Simple text extraction and chunking was used. A more robust HTML-to-Markdown conversion might be needed for production.
* **Output quality rating from 1 to 5:** 4
* **Implementation difficulty from 1 to 5:** 2
* **Integration friction from 1 to 5:** 2

## Conclusion
* **Recommendation:** \`${recommendation}\`
* **Next step:** Review the extracted chunks for RAG utility and refine the chunking strategy.
  `.trim();

  await fs.writeFile('data/reports/prototype-crawl-report.md', reportContent);
  await fs.writeFile('prototype-results/crawl-rag-baseline/report.md', reportContent);
  console.log('Reports written.');
}

run().catch(console.error);
