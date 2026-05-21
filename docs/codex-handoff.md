# Codex Handoff

## Project status

This project is a local-first Prompt Library MVP built from the Linear backlog.

Implemented so far:

- `SOR-5`: Product scope and MVP user flows captured in `docs/product-scope.md`.
- `SOR-6`: Next.js app foundation, shared shell, core routes, styling tokens, and scripts.
- `SOR-7`: Prompt data model and local browser persistence layer.
- `SOR-8`: Create and edit prompt workflow with validation and draft recovery.
- `SOR-9`: Prompt detail route with metadata, notes, copy actions, favorite toggle, and recent access updates.
- `SOR-10`: Prompt deletion from list/detail with confirmation and undo from the library.
- `SOR-11`: Folder create, rename, delete, filtering, and prompt reassignment on folder deletion.
- `SOR-12`: Category and tag assignment plus library filters.
- `SOR-13`: Search, combined filters, sort modes, and empty states.
- `SOR-14`: Favorites and recently used shortcut panels.
- `SOR-15`: Optimization workflow UX with prompt selection, goal/model/tone/constraint inputs, review draft, change summary, copy, reject, and save-as-version actions.
- `SOR-16`: AI-backed optimization endpoint using the OpenAI Responses API, with client loading/error/retry states and server-only API key handling.
- `SOR-17`: Prompt detail route exposes version history, previous-version metadata, side-by-side comparison, restore, and duplicate actions.
- `SOR-18`: App seed data now reflects the 12 folder-based starter prompts, with categories, tags, favorites, recents, source notes, and a settings reset control.
- `SOR-19`: Responsive/accessibility polish pass with clearer focus and disabled states, reduced-motion support, mobile tightening, form error associations, accessible action names, and a calmer teal/neutral visual palette.
- `SOR-20`: Added no-dependency static workflow coverage and a manual QA checklist for the main prompt library flows.
- `SOR-21`: Added setup, environment, quality-check, Vercel deployment, known-limitations, and next-phase documentation.
- `SOR-26`: Prompt library README now documents category expansion rules and candidate future categories.
- `SOR-25`: Added starter prompt testing notes and static validation for required prompt metadata/example sections.
- `SOR-34`: Added a 25-record web animation/frontend creative source map with official docs, repos, packages, examples, verification notes, and prototype shortlist.
- `SOR-35`: Added a 30-record AI image/video generation source map covering hosted image/video APIs, local/open-source workflows, hubs, ComfyUI resources, manual-review flags, and prototype shortlist.
- `SOR-36`: Added a 30-record 3D/motion/creative-coding source map covering Three.js, React Three Fiber, Babylon.js, Rive, Spline, Blender/glTF, shaders, WebGPU/WebGL, p5.js, TouchDesigner, galleries, communities, and tutorial sources.
- `SOR-37`: Added a 30-record agents/automation/crawling/orchestration source map covering agent frameworks, hosted automation, MCP/tool protocols, browser automation, crawling infrastructure, Common Crawl, ethical crawling notes, and cost/compliance flags.
- `SOR-39`: Added a conservative ethical crawling and scraping policy with decision statuses, preflight checklist, source-specific guidance, operating limits, data handling rules, tool-specific notes, and a crawl decision template.
- `SOR-52`: Added isolated `/prototype/motion` Next.js route using GSAP for reveal motion and Motion for card interactions, plus reduced-motion fallback, responsive CSS module, and `prototype-results/motion-baseline-next/report.md`.
- `SOR-50`: Added `/generate` Prompt Pack Generator with landing-page/full-site mode selector, mode-aware Stitch brief, image prompts, final agent prompt, validation gates, visible report filename, and generated report output.
- `SOR-46`: Added isolated `/prototype/3d` Next.js route using React Three Fiber, Three.js procedural placeholder geometry, small Drei helpers, subtle pointer-reactive motion, reduced-motion/mobile fallback, and `prototype-results/3d-baseline/report.md`.
- `SOR-48`: Ran AI media baseline using the shared creative brief, generated two OpenAI Images API outputs with metadata under `assets/ai-generated/prototype-ai-media/`, documented ComfyUI/Replicate blockers, and added `prototype-results/ai-media-baseline/report.md`.
- `SOR-43`: Added parent prototype summary at `prototype-results/prototype-tests-summary.md` comparing motion, 3D, hosted AI media, blocked ComfyUI, and blocked Replicate paths with keep/test-later recommendations.
- `SOR-44`: Added the final creative production research system design at `docs/creative-production-research/final-system-design.md`, covering data model, roles, cadence, review workflow, refresh strategy, prototype pipeline, and handoff paths.
- Web/video audit follow-up: Expanded the active prompt library from 12 to 20 v2 prompts with new website-generation and video-generation coverage, added practical stack guidance, 3D asset pipeline guidance, video generation playbook, pinned core package versions, and documented Windows shim fallbacks.

## Architecture notes

- The app uses Next.js App Router with client-side local storage persistence for the MVP.
- `src/lib/prompt-schema.ts` defines prompts, folders, categories, versions, and drafts.
- `src/lib/prompt-store.ts` owns seeded data, CRUD operations, draft recovery, version snapshots, favorites, recents, deletion undo, and folder behavior.
- `src/components/library-view.tsx` is the main browse and organization surface.
- `src/components/prompt-form.tsx` handles create/edit.
- `src/components/prompt-detail.tsx` handles view, copy, favorite, recent, delete, and version comparison.
- `src/components/optimization-workspace.tsx` handles the local optimization workflow and can later swap its deterministic draft builder for the server-side AI service.
- `app/api/optimize/route.ts` handles the server-side OpenAI optimization request and returns structured prompt/rationale output.
- `src/components/settings-panel.tsx` provides the local seed reset action for development/demo recovery.
- `scripts/static-workflow-check.mjs` validates critical workflow coverage without requiring installed npm dependencies.
- `docs/manual-qa-checklist.md` captures browser/manual QA for flows that need runtime interaction.
- `README.md` is the primary setup/deployment guide, with `.env.example` as the safe environment template.
- `docs/creative-production-research/web-animation-frontend-source-map.md` captures source discovery targets and verification rules for creative frontend/animation research.
- `docs/creative-production-research/final-system-design.md` defines the operating system for turning research into implementation work.
- `docs/creative-production-research/web-video-stack-guidance.md`, `3d-asset-pipeline.md`, and `video-generation-playbook.md` turn the research maps into practical selection, asset, provider, and fallback guidance.

## Verification status

The implementation has been manually inspected for stale references and obvious API mismatches. The no-dependency static workflow check, ESLint, TypeScript, and production build pass when run through the bundled Node fallback documented in `README.md`.

Use the normal package scripts when the Windows shims work:

```powershell
pnpm typecheck
pnpm lint
pnpm test
pnpm build
pnpm dev
```

## Remaining backlog direction

The Prompt Library app is now complete and the prototype research loop is closed out. Remaining active work is outside this repo or intentionally left open for follow-up, such as the Stitch preflight issue and the external wiki setup task.

- `SOR-52`: Added an isolated Next.js motion prototype route at `app/prototype/motion/page.tsx`, with GSAP reveal + Motion card interactions in `src/components/prototypes/prototype-motion-section.tsx`, responsive/reduced-motion styles in `src/components/prototypes/prototype-motion-section.module.css`, and results summary in `prototype-results/motion-baseline-next/report.md` (recommendation: Keep).
