# Creative Workflow Prototype Tests Summary

Linear: `SOR-43`

## Summary

Three prototype candidates were tested or reconciled against the confirmed Next.js `prompt-library` app and available local tooling:

| Prototype | Linear | Candidate | Status | Recommendation |
|---|---|---|---|---|
| Motion baseline | `SOR-52` / `SOR-45` | GSAP + Motion in Next.js | Completed | Keep |
| 3D baseline | `SOR-46` | React Three Fiber + Three.js + Drei | Completed | Keep |
| AI media baseline | `SOR-48` | OpenAI Images API, with ComfyUI/Replicate checked | Completed | Keep hosted path; test local path later |

The original motion and 3D child tickets referenced React/Vite, but the confirmed repository is a Next.js app. The tests were adapted as isolated Next.js routes so the existing `/library` workflow stayed untouched.

## Prototype 1: Motion Baseline

Routes and files:

- `/prototype/motion`
- `app/prototype/motion/page.tsx`
- `src/components/prototypes/prototype-motion-section.tsx`
- `src/components/prototypes/prototype-motion-section.module.css`
- `prototype-results/motion-baseline-next/report.md`

Result:

- GSAP handled initial reveal motion.
- Motion handled card-level hover/tap interaction.
- Reduced-motion fallback exists.
- Responsive route smoke check passed.
- Existing `/library` route remained intact.

Quality:

- Good fit for premium UI motion.
- Low implementation friction after adding `gsap` and `motion`.
- Best next use is as a visual benchmark before adding motion to production library screens.

Recommendation: **Keep**.

## Prototype 2: 3D Baseline

Routes and files:

- `/prototype/3d`
- `app/prototype/3d/page.tsx`
- `src/components/prototypes/prototype-3d-hero.tsx`
- `src/components/prototypes/prototype-3d-hero.module.css`
- `prototype-results/3d-baseline/report.md`

Result:

- React Three Fiber rendered a lightweight procedural 3D scene.
- Three.js primitives avoided heavy assets.
- Drei was limited to maintainability helpers.
- Pointer-reactive motion is subtle.
- Reduced-motion and mobile containment are documented and implemented.
- Existing `/library` route remained intact.

Quality:

- Good proof that React-integrated 3D can live inside the app safely.
- Moderate dependency footprint.
- No GLB/GLTF asset workflow was tested because no approved asset source/license exists yet.

Recommendation: **Keep**, with real GLB asset testing later.

## Prototype 4: AI Media Baseline

Files:

- `prompts/tested/ai-media-baseline.md`
- `assets/ai-generated/prototype-ai-media/openai-baseline-1.png`
- `assets/ai-generated/prototype-ai-media/openai-baseline-1.json`
- `assets/ai-generated/prototype-ai-media/openai-baseline-2.png`
- `assets/ai-generated/prototype-ai-media/openai-baseline-2.json`
- `prototype-results/ai-media-baseline/report.md`

Result:

- Two OpenAI Images API outputs were generated from the shared brief.
- Metadata was preserved for both outputs.
- ComfyUI was checked but unavailable locally at `127.0.0.1:8188`.
- Replicate was checked but no token was configured.
- No private/client assets were uploaded.
- Secret scan found no actual API key values in generated artifacts.

Quality:

- Hosted image generation produced useful dark luxury hero-background candidates.
- Low implementation friction when an OpenAI key is available.
- Local workflow remains untested until ComfyUI, model files, and workflow graph are available.

Recommendation: **Keep hosted path; test local workflow later**.

## Cross-Prototype Comparison

| Candidate | Output quality | Implementation difficulty | Integration friction | Cost/friction | Next step |
|---|---|---|---|---|---|
| GSAP + Motion | Strong for app polish and controlled transitions | Low to medium | Low | Runtime deps only | Use as benchmark for production motion guidelines. |
| R3F + Three.js + Drei | Strong technical proof for lightweight 3D scenes | Medium | Medium | Larger dependency footprint; no asset pipeline yet | Add one licensed optimized GLB test later. |
| OpenAI Images API | Strong hero-background candidates | Low | Low if key exists | API usage cost; rights review before publication | Keep for hosted visual exploration. |
| ComfyUI | Not run | Unknown | High until local setup exists | Requires local service, models, workflows, node review | Test later with controlled workflow. |
| Replicate | Not run | Unknown | Medium | Requires token/provider cost review | Optional later provider comparison. |

## Verification

Completed checks across the implemented prototypes:

- Static workflow checks passed: 51 checks.
- ESLint passed with no reported issues.
- TypeScript passed with no reported issues.
- Next production build passed and listed `/generate`, `/prototype/motion`, and `/prototype/3d`.
- Local route smoke checks returned HTTP 200 for `/library`, `/generate`, `/prototype/motion`, and `/prototype/3d`.
- AI media artifacts were checked for secret-looking strings; no actual API key values were found.

## Recommendation

Overall status: **keep**.

The best near-term creative production stack is:

1. GSAP + Motion for premium interface motion.
2. React Three Fiber + Three.js + small Drei helpers for lightweight 3D scenes.
3. OpenAI Images API for fast hosted hero-background exploration.

ComfyUI and Replicate should remain `test-later` until the local workflow, model licensing, and provider tokens are deliberately set up.
