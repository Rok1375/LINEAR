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
- `SOR-36`: Added a 30-record 3D/motion/creative-coding source map covering 3D engines, React 3D, Spline, Rive, p5.js, shaders, WebGPU, Blender-to-web, glTF QA, TouchDesigner, showcases, and difficulty flags.

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

## Verification status

The implementation has been manually inspected for stale references and obvious API mismatches. The no-dependency static workflow check passes in this environment; a full install/build/typecheck/lint/test pass still needs package tooling.

Recommended next checks once Node package tooling is available:

```powershell
pnpm install
pnpm typecheck
pnpm lint
pnpm build
pnpm dev
```

## Remaining backlog direction

The primary Prompt Library app backlog is now in review. Next useful work is installing dependencies, running the full quality pass, continuing manual QA against the browser flow checklist, and then picking up the next Linear issue in priority order.
