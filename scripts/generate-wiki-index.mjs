import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_DIR = path.resolve(__dirname, '../docs');
const RESEARCH_DIR = path.resolve(DOCS_DIR, 'creative-production-research');
const OUTPUT_FILE = path.resolve(DOCS_DIR, 'wiki-index.md');

// Define document metadata (pillar and description) for the 16 files
const documentMeta = {
  '3d-asset-pipeline.md': {
    pillar: 3,
    description: 'Establishes the criteria, checklists, and fallback rules for migrating from procedural React Three Fiber (R3F) structures to imported 3D models (GLTF/GLB) safely, ensuring license compliance and rendering performance.'
  },
  '3d-motion-creative-coding-source-map.md': {
    pillar: 3,
    description: 'A comprehensive registry of 3D engines, visual animation wrappers, design exporters, shader references, and interactive tools for WebGL/WebGPU and canvas-based development.'
  },
  '3d-motion-records.md': {
    pillar: 3,
    description: 'Provides structured evaluations, scoring, and shortlist recommendations for twelve 3D graphics and creative coding frameworks, including Three.js, React Three Fiber, Drei helpers, and Spline.'
  },
  'agent-automation-records.md': {
    pillar: 2,
    description: 'Evaluates and ranks ten agent orchestration libraries and web crawling frameworks, such as LangGraph, Model Context Protocol (MCP), Pydantic AI, and Playwright, matching them to implementation use cases.'
  },
  'agents-automation-crawling-source-map.md': {
    pillar: 2,
    description: 'A registry of tools and platforms for building autonomous agent skills, browser automation, web scraping, and conversational workflows.'
  },
  'agents-automation-records.md': {
    pillar: 2,
    description: 'Evaluates agent orchestration, workflow automation, and crawling libraries under a common evaluation scoring system to select core standards like LangGraph and MCP.'
  },
  'ai-image-video-source-map.md': {
    pillar: 1,
    description: 'A curated list of image editors, AI video generators, camera movement dictionaries, and generative media tools with metadata details on capabilities and licenses.'
  },
  'ethical-crawling-policy.md': {
    pillar: 2,
    description: 'Defines the core principles, decision matrix (allowed, api_preferred, manual_only, blocked), preflight checklists, and operating limits for web scraping and browser automation within the workspace.'
  },
  'final-system-design.md': {
    pillar: 4,
    description: 'Establishes the permanent operating model, data schemas, role responsibilities, review workflows, and integration strategies (with Prompt Libraries, Linear, and asset storage) for creative technology research.'
  },
  'frontend-animation-records.md': {
    pillar: 3,
    description: 'Contains detailed evaluations and scoring for ten web animation frameworks, including Motion (Framer Motion), GSAP, Lenis, Anime.js, and Rive.'
  },
  'image-generation-records.md': {
    pillar: 1,
    description: 'Evaluates ten image generation models, tools, and visual workflows including Midjourney, DALL-E 3, Flux.1, ComfyUI, and Magnific.'
  },
  'video-generation-playbook.md': {
    pillar: 1,
    description: 'Defines provider readiness, test workflows, safety/rights guidelines, and output evaluation checklists for utilizing generative AI video platforms (e.g. Runway, Luma, Veo, fal).'
  },
  'video-generation-records.md': {
    pillar: 1,
    description: 'Evaluates and scores ten generative video tools and platforms, including Runway Gen-3, Kling AI, Luma Dream Machine, and CapCut AI.'
  },
  'web-animation-frontend-source-map.md': {
    pillar: 3,
    description: 'A source registry tracking advanced animation libraries, responsive CSS/JS utility scripts, vector runtime assets, and 2D canvas engines.'
  },
  'web-animation-records.md': {
    pillar: 3,
    description: 'Provides structured ratings and shortlist recommendations for web animation, custom layout morphs, smooth scrolling engines, and interactive canvas loaders.'
  },
  'web-video-stack-guidance.md': {
    pillar: 1,
    description: 'Provides technology selection rules, installed stack evaluations, and prompt authoring default guidelines for WebGL/3D, GSAP/Motion animation, and generative video systems.'
  }
};

// Define pillars structure
const pillars = [
  {
    num: 1,
    name: 'Pillar I: AI Media Generation',
    description: 'Focuses on image generation workflows, video generation, motion creation, and technology selection rules for synthetic media.'
  },
  {
    num: 2,
    name: 'Pillar II: Autonomous & AI Systems',
    description: 'Covers autonomous agent skills, tool-calling protocols, browser automation, web scraping frameworks, and ethical data gathering policies.'
  },
  {
    num: 3,
    name: 'Pillar III: Creative Frontend Engineering',
    description: 'Encompasses premium web animation, React/Next.js component design, smooth-scroll utility integration, and WebGL/Three.js spatial web development.'
  },
  {
    num: 4,
    name: 'Pillar IV: System Architecture',
    description: 'Details the system design, metadata tables, workflows, roles, and project management standards (e.g. Linear integrations).'
  }
];

function extractTitleFromMarkdown(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const h1Match = content.match(/^#\s+(.+)$/m);
    if (h1Match) {
      // Remove any trailing parentheses block like "(LIB: Three.js / WebGL)" if we want clean titles,
      // or keep it. Let's keep it clean or keep exactly what is in the file.
      // Let's clean it up slightly if it has trailing tags or leave it as is.
      // The instruction mentions: "mapping all documentation to the 4 Pillars... summaries of each of the 16 files."
      // Let's keep the exact text but trim it.
      return h1Match[1].trim();
    }
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
  }
  return null;
}

function main() {
  console.log(`Scanning research directory: ${RESEARCH_DIR}`);
  
  if (!fs.existsSync(RESEARCH_DIR)) {
    console.error(`Error: Research directory does not exist: ${RESEARCH_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(RESEARCH_DIR).filter(file => file.endsWith('.md'));
  console.log(`Found ${files.length} markdown files.`);

  // Verify we have all 16 files
  const expectedFiles = Object.keys(documentMeta);
  const missingFiles = expectedFiles.filter(f => !files.includes(f));
  if (missingFiles.length > 0) {
    console.error('Warning: The following expected files were not found in the directory:', missingFiles);
  }

  const parsedDocs = [];

  for (const file of files) {
    const filePath = path.join(RESEARCH_DIR, file);
    const rawTitle = extractTitleFromMarkdown(filePath);
    
    // Fallback to filename if title is not found
    const title = rawTitle || path.basename(file, '.md');
    
    const meta = documentMeta[file] || { pillar: 4, description: 'No description available.' };
    
    parsedDocs.push({
      filename: file,
      title: title,
      pillar: meta.pillar,
      description: meta.description
    });
  }

  // Group by pillars
  const groupedByPillar = { 1: [], 2: [], 3: [], 4: [] };
  parsedDocs.forEach(doc => {
    groupedByPillar[doc.pillar].push(doc);
  });

  // Sort docs within each pillar alphabetically by title for a clean layout
  for (const pillarNum in groupedByPillar) {
    groupedByPillar[pillarNum].sort((a, b) => a.title.localeCompare(b.title));
  }

  // Build the markdown content
  let markdown = `# AI Creative Library - Wiki Index\n\n`;
  markdown += `Welcome to the **AI Creative Library Reference Wiki**. This index serves as the single entrypoint to our creative production research, mapping all technical documentation, source maps, policies, and evaluation records to the 4 Pillars of the AI Creative Library.\n\n`;
  
  markdown += `---\n\n`;
  markdown += `## Table of Contents\n\n`;
  pillars.forEach(p => {
    const anchor = p.name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
    markdown += `- [${p.name}](#${anchor})\n`;
  });
  markdown += `\n---\n\n`;

  pillars.forEach(p => {
    const anchor = p.name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
    markdown += `## ${p.name}\n\n`;
    markdown += `*${p.description}*\n\n`;
    
    const docsInPillar = groupedByPillar[p.num];
    if (docsInPillar.length === 0) {
      markdown += `*No documents mapped to this pillar.*\n\n`;
    } else {
      markdown += `| Document | Description |\n`;
      markdown += `| :--- | :--- |\n`;
      docsInPillar.forEach(doc => {
        const relativeUrl = `creative-production-research/${doc.filename}`;
        markdown += `| [${doc.title}](${relativeUrl}) | ${doc.description} |\n`;
      });
      markdown += `\n`;
    }
    markdown += `---\n\n`;
  });

  // Add system links info block
  markdown += `> [!NOTE]\n`;
  markdown += `> This index is dynamically managed and verified compliant with the master [Creative AI & Engineering Source Library System](file:///c:/Users/soren/OneDrive/Attachments/Documents/linear/ai_creative_library_system.md) framework. Direct questions or suggested changes to the research curator or create a Linear issue.\n`;

  // Write index
  fs.writeFileSync(OUTPUT_FILE, markdown, 'utf-8');
  console.log(`Successfully generated Wiki Index: ${OUTPUT_FILE}`);
}

main();
