# Prototype 3 Crawl and RAG Baseline Report

* **Prototype name:** Prototype 3 Crawl RAG Baseline
* **Start URL:** https://example.com/
* **Date:** 2026-05-19T03:03:04.913Z
* **Robots result:** robots.txt not found (assuming allowed)
* **Terms/manual review notes if available:** Prototype run on public site, assumed no terms violations.

## Stats
* **Pages requested:** 1
* **Pages saved:** 1
* **Pages skipped:** 0

## Errors
None

## Output paths
- `data/raw/prototype-pages.json`
- `data/processed/prototype-source.md`
- `data/processed/prototype-chunks.jsonl`
- `data/reports/prototype-crawl-report.md`
- `chatbot-ready/rag/prototype-rag-chunks.jsonl`
- `prototype-results/crawl-rag-baseline/report.md`

## Notes & Feedback
* **PII/sensitive-data notes:** No private or login-only data was included. Only public elements parsed.
* **What worked:** Successfully ran Playwright crawler with strict concurrency and delay limits.
* **What failed or needs review:** Simple text extraction and chunking was used. A more robust HTML-to-Markdown conversion might be needed for production.
* **Output quality rating from 1 to 5:** 4
* **Implementation difficulty from 1 to 5:** 2
* **Integration friction from 1 to 5:** 2

## Conclusion
* **Recommendation:** `keep`
* **Next step:** Review the extracted chunks for RAG utility and refine the chunking strategy.