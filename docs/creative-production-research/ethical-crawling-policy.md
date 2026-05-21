# Ethical Crawling And Scraping Policy

Linear: `SOR-39`  
Scope: Policy and checklist only. Do not run crawlers from this document.

## Core Rule

Use the least invasive source that can answer the research question. Prefer official APIs, docs, exports, RSS feeds, sitemaps, GitHub/package metadata, public datasets, or manual review before crawling rendered pages.

## Crawl Decision Statuses

| Status | Meaning | Allowed action |
|---|---|---|
| `allowed` | Public content permits crawling, robots guidance allows it, terms do not prohibit it, and the crawl is small, rate-limited, attributed, and necessary. | Run only a bounded crawl with documented limits, user agent, source attribution, and output review. |
| `api_preferred` | An official API, export, package registry, sitemap, GitHub endpoint, RSS feed, or dataset exists. | Use the official interface instead of scraping pages. Crawl only if the API does not expose required public fields and the target permits crawling. |
| `manual_only` | Content is public but sensitive, social/community-heavy, hard to interpret automatically, or likely to require human judgment. | Use manual review, screenshots/notes, citation links, and small copied metadata. Do not automate collection. |
| `blocked` | Robots, terms, login, paywall, privacy, security controls, explicit owner guidance, or legal/compliance concerns block collection. | Do not crawl or scrape. Record the block reason and use official docs, APIs, or manual non-collection notes instead. |
| `unknown` | Permission, robots behavior, terms, ownership, rate limits, or data sensitivity are unclear. | Pause. Do not crawl until the source is classified or an API/manual alternative is chosen. |

## Required Preflight Checklist

Complete this checklist before any crawler, scraping API, browser automation, or bulk data-gathering job:

| Check | Requirement | Pass condition |
|---|---|---|
| Purpose | Define the exact research question and fields needed. | The job has a short scope statement and excludes unrelated content. |
| Source ownership | Identify the site/platform and whether it has an official API, export, feed, docs, or dataset. | API/export/feed/dataset path is evaluated first. |
| Robots guidance | Check `robots.txt`, sitemap hints, and any AI/crawl control guidance. | Rules allow the target path for the intended user agent. |
| Terms and access | Check terms, paywall/login status, account requirements, and platform rules. | Public, non-paywalled, non-logged-in, and not contractually blocked. |
| Data sensitivity | Identify personal data, private content, user-generated content, comments, profiles, media, or minors. | Sensitive areas are excluded or classified `manual_only`/`blocked`. |
| Rate limits | Set page, concurrency, retry, timeout, and runtime limits. | Limits are written down before the run. |
| Identification | Use a truthful user agent/contact where applicable. | The crawler identifies itself and does not impersonate a browser/user to evade rules. |
| Cost cap | For hosted tools, set spend/run limits. | Budget cap or test-only account is in place. |
| Storage plan | Define where raw/cleaned data goes and retention needs. | Raw data is minimized; only needed fields are retained. |
| Attribution | Preserve source URL, access date, and source type. | Every record can be traced back to a source. |

## Source Guidance

### Official Docs Sites

- Default status: `api_preferred` or `allowed`.
- Prefer docs APIs, `llms.txt`, public markdown/source repos, GitHub docs repos, package metadata, or sitemap-guided retrieval.
- Use conservative crawl limits because docs sites can be large and versioned.
- Preserve version, page URL, access date, and whether the page is official or generated.

### Public Directories And Package Hubs

- Default status: `api_preferred`.
- Prefer GitHub API, npm registry, PyPI, Hugging Face model cards, Replicate/fal model pages, Apify Actor APIs, or official search/export surfaces.
- Do not crawl search-result pagination aggressively.
- Treat popularity metrics as volatile; store access date.

### Communities And Forums

- Default status: `manual_only`.
- Public posts can contain personal data, opinions, support details, or unverified claims.
- Use communities for leads, pain points, and qualitative signals, not automated datasets.
- Quote sparingly and attribute clearly. Avoid collecting usernames, profile details, or large comment threads unless explicitly needed and permitted.

### YouTube And Social Platforms

- Default status: `manual_only` or `blocked`.
- Prefer official APIs and creator-provided metadata.
- Do not scrape logged-in feeds, comments, transcripts behind platform controls, recommendations, private groups, or paid/community-only content.
- Use manual notes for channel/topic relevance and link back to original pages.

### Vendor/Product Apps

- Default status: `api_preferred`.
- Prefer official APIs, changelogs, docs, pricing pages, and help centers.
- Do not automate browser sessions behind login unless the account owner explicitly authorizes it and the platform terms allow it.
- Treat screenshots, internal dashboards, billing, and account data as private.

### AI Tool Galleries And Creative Showcases

- Default status: `manual_only` unless an official API/export exists.
- Inspect a small sample manually for quality and relevance.
- Do not bulk-download media assets. Record links, source type, creator/brand attribution if public, and high-level observations.

## Operating Limits

For any status classified `allowed`, use these default maximums unless a smaller scope is sufficient:

| Limit | Default maximum |
|---|---|
| Pages | 50 pages per source per research batch |
| Concurrency | 1-2 concurrent requests per domain |
| Delay | At least 2 seconds between requests per domain |
| Retries | 1 retry for transient failures |
| Runtime | 10 minutes per source |
| Output | Store only fields needed by the schema |

Use stricter limits for small sites, community sites, personal sites, or sources without explicit API support.

## Data Handling

- Keep raw captures only when needed for verification; prefer cleaned structured records.
- Strip unrelated navigation, ads, cookie banners, tracking parameters, comments, and personal data.
- Store source URL, title, source type, publisher/platform, access date, and decision status.
- Mark generated, inferred, or manually interpreted fields clearly.
- Do not store secrets, tokens, private account data, private files, or logged-in content.
- Respect takedown/removal requests by deleting affected local records and marking the source `blocked` or `manual_only`.

## Tool-Specific Notes

| Tool family | Policy note |
|---|---|
| Apify | Prefer official Actors, review Actor owner/inputs, set run budgets, avoid risky proxy settings, and inspect dataset retention. |
| Crawlee/Scrapy | Configure robots, user agent, throttling, retries, per-domain concurrency, and item pipelines before any run. |
| Firecrawl/hosted scrape APIs | Use only on permitted public sources; compare cost/page and inspect markdown noise before scaling. |
| Playwright/browser automation | Use for owned apps, local testing, or permitted public pages; do not bypass bot protections, captchas, login walls, or paywalls. |
| Cloudflare Browser Rendering | Respect its robots-aware behavior; document beta limits, account cost, output formats, and inability to bypass protected sites. |
| Common Crawl | Prefer when broad public web data is enough; document crawl ID, freshness limitations, filtering, and attribution. |
| MCP/Zapier/n8n/Make tools | Curate actions narrowly, use test accounts, require human approval for write actions, and audit logs before production use. |

## Manual Research Path

Use this path when a source is `manual_only`, `api_preferred` but API access is unavailable, or `unknown` but the user still needs a qualitative signal:

1. Open a small number of public pages manually.
2. Record the source URL, access date, source type, and reason for manual review.
3. Capture only high-level facts needed for the research record.
4. Avoid collecting usernames, comments, private details, or large verbatim excerpts.
5. Mark claims as manual observations unless verified by official docs or APIs.

## Crawl Decision Checklist

Use this compact checklist in future research tickets:

```text
Source:
Research question:
Fields needed:
Official API/export/feed/dataset available? yes/no/link:
robots.txt checked? yes/no/link:
Terms/access checked? yes/no/link:
Paywall/login/private content? yes/no:
Sensitive/user-generated content? yes/no:
Decision status: allowed | api_preferred | manual_only | blocked | unknown
Reason:
Limits if allowed:
Attribution fields:
Storage/retention:
Reviewer:
Date:
```

## Default Decision

When in doubt, choose `unknown` and pause. The fallback is manual review of official/public pages, not a broader crawl.
