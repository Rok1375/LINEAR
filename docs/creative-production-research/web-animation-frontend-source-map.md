# Web Animation And Frontend Creative Source Map

Linear: `SOR-34`
Collected: 2026-05-18
Scope: advanced web animation, frontend visual libraries, interactive UI tooling, SVG/canvas/WebGL animation, and scroll/motion libraries.

## Source Records

| # | Source | Type | URL | Why It Matters | Quality Verification |
| --- | --- | --- | --- | --- | --- |
| 1 | GSAP docs | Official docs | https://gsap.com/docs/v3/ | Baseline reference for timeline animation, sequencing, plugins, easing, and browser support. | Check docs freshness, installation guidance, plugin availability, and examples against current package behavior. |
| 2 | GSAP ScrollTrigger docs | Official docs | https://gsap.com/docs/v3/Plugins/ScrollTrigger/ | Essential source for scroll-linked animation, pinning, snapping, scrubbed timelines, and responsive scroll triggers. | Verify examples use current GSAP v3 syntax and test mobile/responsive trigger behavior. |
| 3 | GSAP installation docs | Official docs/package entry | https://gsap.com/docs/v3/Installation | Confirms npm/CDN setup and plugin import patterns for production apps. | Compare install instructions with `gsap` npm package and Next.js bundling behavior. |
| 4 | Motion docs | Official docs | https://motion.dev/docs | Primary source for Motion/Framer Motion-style React, JavaScript, and Vue animation APIs. | Confirm package naming, framework-specific imports, examples, and current latest version. |
| 5 | Motion React quickstart | Official docs | https://motion.dev/react | Best source for React component animation, gestures, layout animation, and declarative transitions. | Build a small component with `motion/react`, `AnimatePresence`, hover/tap, and layout animation. |
| 6 | Motion examples | Official examples/gallery | https://motion.dev/examples | High-signal copy/paste examples for gestures, presence, keyframes, springs, drag, and UI microinteractions. | Prefer examples with tutorial notes; test copied examples in a local React/Next app. |
| 7 | Motion npm package | npm package | https://www.npmjs.com/package/motion | Confirms package distribution, current version, dependencies, and framework support. | Check publish recency, dependency count, TypeScript types, and install footprint. |
| 8 | Anime.js docs | Official docs | https://animejs.com/documentation/ | Strong lightweight option for DOM, SVG, JS object, timeline, stagger, spring/keyframe, and utility animation. | Verify v4 APIs, ESM imports, examples, and reduced-motion handling in a browser test. |
| 9 | Anime.js npm package | npm package | https://www.npmjs.com/package/animejs | Confirms current package version, TypeScript declarations, dependencies, and install syntax. | Check publish recency, dependency count, and whether docs/examples match package exports. |
| 10 | Three.js docs | Official docs | https://threejs.org/docs/ | Core source for WebGL/WebGPU-adjacent 3D, cameras, materials, animation mixer, loaders, and rendering concepts. | Test official examples with pinned `three` version; watch for breaking changes across releases. |
| 11 | Three.js examples | Official examples/gallery | https://threejs.org/examples/ | Best practical source for shaders, postprocessing, controls, particles, loaders, and advanced rendering patterns. | Prefer examples tied to current docs; isolate required imports and measure performance. |
| 12 | React Three Fiber GitHub | GitHub repo | https://github.com/pmndrs/react-three-fiber | Main React renderer for Three.js; important for React/Next 3D UI and componentized scene architecture. | Check React version pairing, examples, issue activity, and compatibility with current `three`. |
| 13 | React Three Drei GitHub | GitHub repo | https://github.com/pmndrs/drei | Helper ecosystem for React Three Fiber: controls, environments, text, abstractions, loaders, and utility components. | Verify helper support for the installed R3F/React/Three versions before using. |
| 14 | PixiJS npm package | npm package | https://www.npmjs.com/package/pixi.js | High-performance 2D WebGL/WebGPU rendering for particles, sprites, filters, masks, and interactive canvas UI. | Check current major version, docs/examples, renderer support, and bundle/runtime cost. |
| 15 | PixiJS docs | Official docs | https://pixijs.com/ | Official entry point for guides, examples, API docs, and community learning. | Confirm examples load with current PixiJS package and target renderer support. |
| 16 | Lenis npm package | npm package | https://www.npmjs.com/package/lenis | Smooth scroll source often paired with GSAP/ScrollTrigger and immersive portfolio/editorial sites. | Test accessibility, native-scroll fallback, keyboard behavior, mobile performance, and ScrollTrigger sync. |
| 17 | Scrollama npm package | npm package/GitHub entry | https://www.npmjs.com/package/scrollama | Lightweight IntersectionObserver-based scrollytelling library; useful for narrative pages without heavy timeline control. | Confirm last publish, resize observer behavior, sticky-position assumptions, and accessibility with normal scroll. |
| 18 | Rive web runtime docs | Official docs | https://rive.app/docs/runtimes/getting-started | Best source for interactive vector animation runtimes, state machines, and web/canvas/WebGL rendering. | Verify runtime package choice, asset compatibility, state machine events, and performance on low-end devices. |
| 19 | Rive runtimes overview | Official docs | https://www.rive.app/runtimes | Cross-platform runtime matrix for deciding whether assets can move between web, app, game, and design workflows. | Check supported platforms, package names, export needs, and runtime feature support. |
| 20 | Theatre.js docs | Official docs | https://www.theatrejs.com/docs/latest | Advanced source for timeline/choreography workflows, motion design editing, audio sync, and animating JS/Three/SVG values. | Verify project activity and package/license fit; prototype before committing to production. |
| 21 | Theatre.js GitHub | GitHub repo | https://github.com/theatre-js/theatre | Repository signal for high-fidelity motion graphics tooling and visual animation editor adoption risk. | Review repo activity, issues, license split, and current 1.0 roadmap before use. |
| 22 | Vivus GitHub | GitHub repo/demo | https://github.com/maxwellito/vivus | Niche SVG line-drawing animation source for logo/signature/icon reveal effects. | Check package maintenance and browser support; use for isolated SVG drawing, not broad animation systems. |
| 23 | mo.js docs | Official docs | https://mojs.github.io/tutorials/getting-started.html | Niche motion-graphics source for bursts, swirls, shape animation, loaders, and playful UI effects. | Verify package naming (`@mojs/core` vs old `mo-js`), SSR constraints, and maintenance activity. |
| 24 | Matter.js npm package | npm package | https://www.npmjs.com/package/matter-js | Useful for physics-based canvas interactions, playful landing sections, collisions, and generative UI experiments. | Check package recency, examples, mobile performance, and whether physics adds meaningful UX value. |
| 25 | D3 transition npm package | npm package | https://www.npmjs.com/package/d3-transition | Reference for data-driven DOM/SVG transitions where animation is tied to changing data, charts, or visualization states. | Test with current D3 modules, confirm transition timing/easing needs, and avoid overusing for non-data UI animation. |

## Recommended Shortlist For First Prototypes

1. **Motion**: default React UI animation candidate for app transitions, gestures, layout motion, and microinteractions.
2. **GSAP + ScrollTrigger**: advanced timeline and scroll-driven storytelling candidate.
3. **Anime.js**: lightweight DOM/SVG timeline candidate for framework-agnostic creative interactions.
4. **React Three Fiber + Drei**: primary React 3D candidate.
5. **PixiJS**: primary 2D canvas/WebGL candidate for particles, sprite systems, and visual effects.
6. **Rive**: primary interactive vector animation candidate for designer-authored assets.
7. **Theatre.js**: high-fidelity choreography candidate, but requires activity/license review before production.

## Exclusions And Cautions

- Avoid low-signal listicles unless they point to a primary source, demo, or active repository.
- Treat older niche packages such as Vivus, mo.js, and Matter.js as specialized tools rather than default dependencies.
- Avoid scrolljacking patterns that break native keyboard/touch behavior.
- Require a reduced-motion fallback for every motion-heavy production pattern.
- Prefer official docs, npm pages, and active GitHub repos over tutorial aggregators.

## Next Research Step

Use this map as the source pool for `SOR-38` and gather the first batch of structured records. For the first batch, prioritize Motion, GSAP, Anime.js, React Three Fiber, PixiJS, Rive, Lenis, Scrollama, Theatre.js, and one SVG/canvas niche source.
