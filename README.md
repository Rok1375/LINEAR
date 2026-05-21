# Prompt Library

A local-first Next.js app for saving, organizing, searching, optimizing, and reusing prompts.

## What It Does

- Save prompts with title, body, description, notes, tags, category, and folder.
- Browse with search, filters, sort modes, favorites, and recently opened shortcuts.
- Copy prompt bodies, metadata, notes, and optimized drafts.
- Delete prompts with confirmation and one-step undo.
- Manage folders and reset seed data during development.
- Optimize prompts through a server-side OpenAI endpoint.
- Compare, restore, and duplicate previous prompt versions.

## Requirements

- Node.js 20 or newer.
- pnpm 11 or newer.
- An OpenAI API key for optimization.

## Environment

Create `.env.local` from `.env.example`:

```powershell
Copy-Item .env.example .env.local
```

Set:

```text
OPENAI_API_KEY=your_project_key_here
```

Optional:

```text
OPENAI_OPTIMIZATION_MODEL=gpt-5.4-mini
```

Never commit `.env.local`. The repository ignores local env files and keeps `.env.example` as a safe template.

## Setup

```powershell
pnpm install
```

## Development

```powershell
pnpm dev
```

Open `http://localhost:3000/library`.

Local prompt data is stored in browser storage. Use Settings -> Reset seed data to restore the 20 starter prompts.

Creative prototype routes are available for isolated research checks:

- `/generate`: prompt-pack generator for landing-page and full-site prompt bundles.
- `/prototype/motion`: GSAP plus Motion baseline with reduced-motion behavior.
- `/prototype/3d`: React Three Fiber, Three.js, and Drei baseline with procedural geometry.

## Quality Checks

```powershell
pnpm typecheck
pnpm lint
pnpm test
pnpm build
```

`pnpm test` runs a no-dependency static workflow check that verifies the main prompt flows are still wired. Runtime QA is captured in `docs/manual-qa-checklist.md`.

### Windows Shim Fallback

In this workspace, PowerShell can return `Access is denied` for the `pnpm` script shims and for `node` on `PATH`. When that happens, use the bundled Node executable directly:

```powershell
C:\Users\soren\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe scripts\static-workflow-check.mjs
C:\Users\soren\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe node_modules\eslint\bin\eslint.js .
C:\Users\soren\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe node_modules\typescript\bin\tsc --noEmit
C:\Users\soren\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe node_modules\next\dist\bin\next build
```

Package versions for Next.js, React, React DOM, TypeScript, `eslint-config-next`, and React/Node type packages are pinned in `package.json` to avoid drift from `latest`.

## Creative Production Guidance

- `docs/creative-production-research/web-video-stack-guidance.md` explains when to use the installed web/video stack and which tools remain research-only.
- `docs/creative-production-research/3d-asset-pipeline.md` defines GLB/GLTF licensing, optimization, validation, and fallback requirements before imported 3D assets move into production UI.
- `docs/creative-production-research/video-generation-playbook.md` covers hosted/local video generation readiness, rights review, blocked provider states, and output QA.

Tailwind, ShadCN, Remotion, Anime.js, PixiJS, Rive, Spline, Lenis, and Playwright are not installed. Do not assume them in implementation prompts unless this repository deliberately adopts them.

## Deployment

Recommended target: Vercel.

1. Create a Vercel project from this repository.
2. Add `OPENAI_API_KEY` as a production environment variable.
3. Optionally add `OPENAI_OPTIMIZATION_MODEL`.
4. Build with the default Next.js settings.
5. After deployment, run the manual QA checklist against the preview URL before promoting to production.

The app currently uses browser local storage for prompt persistence. That is suitable for an MVP/demo, but production multi-device sync will need a database and authentication layer.

## Known Limitations

- Prompt data is local to the browser.
- Optimization depends on a configured OpenAI API key.
- There is no account system or cloud sync yet.
- The current automated test is static; browser-based interaction tests should be added after a test runner is installed.
- ComfyUI and Replicate video paths remain test-later until local service/model/workflow readiness or provider token/model/license review is complete.

## Next-Phase Ideas

- Database-backed persistence and auth.
- Import/export for prompt libraries.
- Richer prompt version diffs.
- Playwright or React Testing Library coverage for runtime flows.
- Deployment monitoring and usage analytics.
