# Web And Video Stack Guidance

Linear: follow-up guidance from the web/video workspace audit
Reviewed: 2026-05-20

## Purpose

This guide turns the source maps and prototype reports into practical selection rules for web and video generation work. Use it before adding a new prompt, prototype, dependency, or Linear follow-up.

## Current Installed Stack

| Area | Installed | Use it for | Guidance status |
|---|---|---|---|
| Next.js + React + TypeScript | Yes | Prompt library app, generator route, prototype routes | Documented in `README.md` and prototype reports |
| React Three Fiber + Three.js + Drei | Yes | Lightweight React 3D prototypes and procedural hero scenes | Keep isolated until asset and performance guidance is satisfied |
| GSAP | Yes | Controlled reveal timelines and advanced sequencing | Use with reduced-motion fallback and no scroll trapping |
| Motion | Yes | React component hover, tap, presence, and layout interactions | Use for local component interactions instead of broad page choreography |
| OpenAI Images API | Documented, not a runtime app dependency | Hosted image exploration and hero-background tests | Keep metadata and rights review with every output |
| Tailwind | No | Utility CSS design systems | Do not assume it exists when writing implementation prompts |
| ShadCN | No | Component registry workflow | Do not request ShadCN components unless the repo adopts it deliberately |
| Remotion | No | Programmatic React video rendering | Candidate only after a video-rendering feature exists |
| Anime.js, PixiJS, Rive, Spline, Lenis | No | Specialized animation, canvas, vector, embed, or scroll patterns | Research-only until a prototype justifies adding them |
| Playwright | No | Browser and visual regression tests | Add only when the repo commits to screenshot/runtime QA |

## Selection Rules

Use the current app stack when the work is a prompt-library feature, documentation, or isolated prototype. Do not introduce a dependency for a prompt-only change.

Use React Three Fiber + Three.js + Drei when:

- the output needs inspectable 3D, spatial product metaphor, or lightweight procedural visuals
- a static image would not communicate the product state or interaction
- the scene can degrade to static content on mobile or reduced-motion settings
- the asset source, license, size, and fallback are documented

Use GSAP + Motion when:

- the page needs orchestrated reveal timing, section sequencing, or editorial motion
- component interactions still belong inside React components
- reduced-motion behavior can place every element in its final readable state
- scroll behavior remains native and keyboard/touch safe

Use hosted image/video generation when:

- the source assets are synthetic, public, or approved for provider upload
- the provider, prompt, model, cost, and output metadata can be preserved
- the output will go through rights and quality review before publication

ComfyUI and Replicate stay test-later unless their prerequisites are satisfied. For ComfyUI, that means local service, model files, workflow graph, node review, and license notes. For Replicate, that means a configured token, selected model page, schema, pricing, license, and output-retention review.

## Missing Guidance To Close Next

| Gap | Recommended artifact | Why it matters |
|---|---|---|
| GLB/GLTF production path | `3d-asset-pipeline.md` | Prevents unlicensed or oversized 3D assets from landing in app routes |
| Provider comparison workflow | `video-generation-playbook.md` | Keeps video provider tests rights-safe, cost-aware, and repeatable |
| Browser visual QA | Future Playwright or Browser checklist | Needed before moving motion or 3D from prototypes into production UI |
| Prompt authoring recipes | New v2 web/video prompt files | Makes R3F, GSAP, image-to-video, UGC, and provider selection reusable |
| Dependency policy | README package notes | Prevents prompts from assuming Tailwind, ShadCN, or Remotion are installed |

## Prompt Authoring Defaults

- Keep new web/video prompts in `website-design/` or `video-generation/` unless at least three prompts justify a new category.
- Use the v2 schema with future data requirements, precision constraints, edge cases, fallback behavior, examples, tags, and version notes.
- Mention unavailable dependencies explicitly when a prompt could otherwise assume them.
- Require reduced-motion and accessibility fallback for motion, 3D, video, and scroll work.
- Require rights, provider, model, prompt, cost, and output metadata for generated media.

## Actionable Next Steps

1. Add live output tests for one web prompt and one video prompt before creating v3 versions.
2. Add browser screenshot QA only after Playwright or the in-app Browser workflow is adopted.
3. Keep the existing `/prototype/3d` and `/prototype/motion` routes as benchmarks, not production UI.
4. Create Linear follow-ups only when a prompt or prototype has a specific file, route, or workflow impact.
