# Web Animation And Frontend Creative Structured Records (LIB: UI Components / React Docs)

This document contains structured evaluations, scoring, and recommendations for the primary web-animation and frontend creative libraries collected in the source map. It serves as the single source of truth for selecting animation engines, smooth-scroll frameworks, vector canvas runtimes, and 3D UI renderers.

---

## Evaluation Summary & Shortlist

Based on the scoring rubric, here is the prioritized shortlist of web animation technologies:

| Rank | Source | Score | Category | Ethical Crawl Status | Recommendation | Core Use Case |
|---|---|---|---|---|---|---|
| **1** | **Motion (Framer Motion)** | **49.5 / 50** | React Animation | `allowed` | **Approved (Gold Standard)** | React page transitions, gesture interactions, layout morphs, and micro-interactions. |
| **2** | **GSAP (GreenSock)** | **47.5 / 50** | Animation Engine | `allowed` | **Approved (Gold Standard)** | Sophisticated scroll-driven timelines, multi-step page sequences, and SVG manipulation. |
| **3** | **React Three Fiber + Drei** | **46.0 / 50** | 3D / WebGL | `allowed` | **Approved (WebGL Standard)** | Interactive 3D portfolios, shaders, lighting, canvas rendering, and procedural graphics. |
| **4** | **Rive Web Runtime** | **45.5 / 50** | Vector Runtime | `api_preferred` | **Approved** | Interactive designer-authored vector files, state machines, and canvas UI indicators. |
| **5** | **Lenis Smooth Scroll** | **43.5 / 50** | Scroll Engine | `allowed` | **Approved** | Page-wide smooth scroll, editorial pacing, and synchronization with ScrollTrigger. |
| **6** | **Anime.js** | **43.0 / 50** | Animation Engine | `allowed` | **Approved** | Lightweight, framework-agnostic timelines, stagger grids, and SVG morph reveals. |
| **7** | **PixiJS** | **41.5 / 50** | 2D / WebGL | `allowed` | **Approved (Niche)** | High-performance 2D particle systems, sprite sheets, and dynamic web graphics. |
| **8** | **Scrollama** | **38.0 / 50** | Scroll Engine | `allowed` | **Approved (Niche)** | Lightweight scrollytelling narratives driven by IntersectionObserver. |
| **9** | **Theatre.js** | **37.0 / 50** | Timeline GUI | `allowed` | **Approved (Niche)** | Complex visual timeline keyframing and multi-element audio-reactive design. |
| **10** | **Vivus** | **34.0 / 50** | SVG Utility | `allowed` | **Approved (Niche)** | Automated inline SVG path line-drawing outlines (reveals of logos or sketch icons). |

---

## 1. Motion (Framer Motion)

* **Normalized Name**: Motion
* **Aliases**: Framer Motion, `framer-motion`, `motion/react`
* **Category**: React Animation
* **Subcategory**: Declarative component animation library
* **Official URL**: [motion.dev](https://motion.dev)
* **Pricing**: Free, open-source.
* **License**: MIT
* **Ethical Crawl Status**: `allowed`

### Normalized Record
* **Summary**: Motion is the modern standard for declarative animation in React applications. It integrates gestures (hover, tap, drag), layout animations, exit animations, and spring physics.
* **Creative Value**: Exceptional. Simplifies complex layout morphing (shared layout transitions) and handles presence animations (`AnimatePresence`) cleanly. The default recommendation for UI micro-interactions.
* **Integration Options**: Direct npm installation (`npm install motion` / npm package structure has shifted to prioritize vanilla JS/React modules).
* **Animation Capabilities**: Declarative props, gesture listeners, layout animation, exit animations, spring/tween physics, utility hooks (e.g. `useScroll`, `useTransform`).
* **Community Notes**: Supported by massive adoption. The primary library used across Tailwind-based React component ecosystems.
* **Maintenance Notes**: Heavily maintained and updated by the creator and Vercel developers.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 5.0 | The dominant animation library for React development. |
| 2. Current Relevance | 5.0 | Modern declarative syntax that aligns perfectly with React design systems. |
| 3. Documentation Quality | 5.0 | Extremely beautiful, well-organized docs with embedded CodeSandbox examples. |
| 4. Practical Usefulness | 5.0 | Solves everyday layout transitions, modals, dropdowns, and gestures. |
| 5. Project Fit | 5.0 | Perfect fit for the prompt library's Next.js and frontend stacks. |
| 6. Beginner Friendliness | 5.0 | Easiest API for beginner React developers. |
| 7. Advanced Potential | 4.5 | Extremely capable spring/scroll bindings, though heavy canvas rendering is not its focus. |
| 8. Community Activity | 5.0 | Huge community, extensive third-party tutorials, and templates. |
| 9. Visual/Design Quality | 5.0 | Promotes organic, high-end spring-based animations. |
| 10. Implementation Value | 5.0 | Installs and runs immediately with zero configuration. |
| **TOTAL** | **49.5 / 50** | **Approved (Gold Standard)** |

---

## 2. GSAP (GreenSock Animation Platform)

* **Normalized Name**: GSAP
* **Aliases**: GreenSock, ScrollTrigger, gsap3
* **Category**: Animation Engine
* **Subcategory**: High-performance core animation and timeline library
* **Official URL**: [gsap.com](https://gsap.com)
* **Pricing**: Free for most commercial use. Paid GreenSock Club subscription required for proprietary plugins (ScrollSmoother, MorphSVG, SplitText) or commercial product redistribution.
* **License**: Custom GreenSock license.
* **Ethical Crawl Status**: `allowed`

### Normalized Record
* **Summary**: GSAP is the industry standard for high-performance, complex timeline animation. It animates DOM elements, CSS variables, SVG paths, Three.js objects, and canvas properties with sub-pixel precision.
* **Creative Value**: Unrivaled control over complex sequence timelines. The `ScrollTrigger` plugin is the definitive library for scroll-linked animations, pinning, and parallax storytelling.
* **Integration Options**: NPM package (`gsap`), ES module imports, CDN scripts.
* **Animation Capabilities**: Multi-step timelines, stagger layouts, SVG path morphing, scroll tracking, snapping, elastic/custom easings.
* **Community Notes**: The choice of award-winning creative agencies and portfolio developers.
* **Maintenance Notes**: Actively maintained for over a decade with high backward compatibility.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 5.0 | De facto standard for premium web animation and creative portfolios. |
| 2. Current Relevance | 5.0 | Essential for scroll-driven page layouts and editorial animation. |
| 3. Documentation Quality | 5.0 | Pristine documentation, active developer forums, and sandbox setups. |
| 4. Practical Usefulness | 5.0 | Extremely useful for complex animations, though slightly heavy for simple hover states. |
| 5. Project Fit | 5.0 | Perfect fit for rich storytelling prototypes and scroll templates. |
| 6. Beginner Friendliness | 4.0 | Timelines are easy to write, but registering plugins and ref cleanups in React take some learning. |
| 7. Advanced Potential | 5.0 | Unlimited capabilities for programmatic sequences and SVG path controls. |
| 8. Community Activity | 5.0 | Highly active, supportive forums directly answered by GreenSock staff. |
| 9. Visual/Design Quality | 5.0 | Extremely smooth rendering performance with sub-pixel rendering. |
| 10. Implementation Value | 4.5 | Straightforward npm install; requires careful React ref lifecycle handling. |
| **TOTAL** | **47.5 / 50** | **Approved (Gold Standard)** |

---

## 3. React Three Fiber + Drei

* **Normalized Name**: React Three Fiber
* **Aliases**: R3F, `@react-three/fiber`, `@react-three/drei`
* **Category**: 3D / WebGL
* **Subcategory**: React wrapper for Three.js 3D library
* **Official URL**: [docs.pmnd.rs/react-three-fiber](https://docs.pmnd.rs/react-three-fiber)
* **Pricing**: Free, open-source.
* **License**: MIT
* **Ethical Crawl Status**: `allowed`

### Normalized Record
* **Summary**: React Three Fiber is a React renderer for Three.js. Drei is a helper ecosystem providing prebuilt cameras, controls, shaders, loaders, and layout systems.
* **Creative Value**: Exceptional. Allows building inspectable, interactive 3D WebGL scenes using declarative React component structures, state models, and event handlers.
* **Integration Options**: NPM packages (`three`, `@types/three`, `@react-three/fiber`, `@react-three/drei`).
* **Animation Capabilities**: 3D mesh translations, shader materials, morph targets, custom cameras, raycasting interaction, post-processing filters, animation mixers.
* **Community Notes**: Gained widespread adoption in modern WebGL design communities. Supported by the Poimandres organization.
* **Maintenance Notes**: Actively updated alongside React and Three.js core releases.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 5.0 | The leading choice for implementing 3D in modern React web applications. |
| 2. Current Relevance | 5.0 | Essential for interactive product mockups, spatial UI, and procedural scenes. |
| 3. Documentation Quality | 4.0 | Detailed docs are present, though learning curve is steep and requires understanding Three.js. |
| 4. Practical Usefulness | 5.0 | High utility for creative elements, though performance audits are necessary. |
| 5. Project Fit | 5.0 | Aligns with the 3D creative design pipeline goals. |
| 6. Beginner Friendliness | 3.0 | Requires understanding React, Three.js, vector mathematics, and GLSL. |
| 7. Advanced Potential | 5.0 | Limitless possibilities for custom shaders, physics integration, and raw WebGL. |
| 8. Community Activity | 5.0 | Massive Discord server and active open-source contributions. |
| 9. Visual/Design Quality | 5.0 | Capable of rendering ultra-premium, cinematic WebGL interactions. |
| 10. Implementation Value | 4.0 | Straightforward npm install; requires monitoring asset sizes (GLTF/GLB models). |
| **TOTAL** | **46.0 / 50** | **Approved (Gold Standard for 3D UI)** |

---

## 4. Rive Web Runtime

* **Normalized Name**: Rive Web SDK
* **Aliases**: Rive, `@rive-app/canvas`, `@rive-app/react-canvas`
* **Category**: Vector Runtime
* **Subcategory**: Real-time vector graphics animation engine
* **Official URL**: [rive.app/docs](https://rive.app/docs)
* **Pricing**: Editor is freemium. Web runtime package is free and open-source.
* **License**: Apache 2.0 runtime.
* **Ethical Crawl Status**: `api_preferred`

### Normalized Record
* **Summary**: Rive is a real-time vector animation engine that runs designer-authored interactive assets inside canvas and WebGL contexts. It features built-in State Machines for triggerable UI animations.
* **Creative Value**: Outstanding. Moves vector animation out of code and into a visual editor, allowing developers to trigger state loops (e.g. mouse tracking, complex button states, interactive characters) easily.
* **Integration Options**: NPM packages (`@rive-app/canvas`, `@rive-app/react-canvas`), WebGL fallback runtime.
* **Animation Capabilities**: State machine triggers, vector bones, skeletal interpolation, cursor tracking inputs, blend states.
* **Community Notes**: Widely used by modern product teams (e.g. Duolingo, dynamic app loaders) to replace heavy GIF/MP4 assets.
* **Maintenance Notes**: Heavily maintained by Rive with frequent runtime updates.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 4.5 | Fast-growing vector animation standard, replacing Lottie/GIF formats. |
| 2. Current Relevance | 5.0 | Essential for highly responsive, interactive custom vector layouts. |
| 3. Documentation Quality | 4.5 | Comprehensive guides and video walkthroughs; some runtime API specs are basic. |
| 4. Practical Usefulness | 5.0 | Excellent for interactive vector icons, game-like UI, and dynamic mascots. |
| 5. Project Fit | 4.5 | High potential for rich interactive UI component templates. |
| 6. Beginner Friendliness | 3.5 | Requires learning Rive's visual editor state machine structure. |
| 7. Advanced Potential | 5.0 | Complete state control, dynamic text replacements, and pointer events. |
| 8. Community Activity | 4.5 | Active community showcasing and sharing files on the Rive Community portal. |
| 9. Visual/Design Quality | 5.0 | Crisp vector renders at any scale, smooth interpolation curves. |
| 10. Implementation Value | 4.0 | Direct npm install; requires loading external `.riv` asset files. |
| **TOTAL** | **45.5 / 50** | **Approved** |

---

## 5. Lenis Smooth Scroll

* **Normalized Name**: Lenis
* **Aliases**: `@studio-freight/lenis`, `lenis`
* **Category**: Scroll Engine
* **Subcategory**: Lightweight smooth-scrollbar library
* **Official URL**: [lenis.darkroom.engineering](https://lenis.darkroom.engineering)
* **Pricing**: Free, open-source.
* **License**: MIT
* **Ethical Crawl Status**: `allowed`

### Normalized Record
* **Summary**: Lenis is a modern, lightweight smooth-scrolling library designed to integrate with native scroll physics, avoiding typical scrolljacking drawbacks.
* **Creative Value**: Standardizes smooth, inertial scroll behaviors across platforms and browsers. Key for pacing reveals and text layouts in editorial designs.
* **Integration Options**: NPM package (`lenis`), direct instance setup in JavaScript.
* **Animation Capabilities**: Scroll smoothing, scroll speed dampening, native momentum preservation, touch-scroll support.
* **Community Notes**: Adopted extensively in the creative portfolio space (often paired with GSAP ScrollTrigger).
* **Maintenance Notes**: Actively maintained by Darkroom (formerly Studio Freight).

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 4.5 | Extremely trending tool for modern high-end interactive websites. |
| 2. Current Relevance | 4.5 | Crucial for smooth scroll pacing and unified browser scroll feel. |
| 3. Documentation Quality | 4.0 | Simple readmes; clear parameters and event callback configurations. |
| 4. Practical Usefulness | 4.0 | Good for portfolio sites; can be overkill for standard dashboard interfaces. |
| 5. Project Fit | 4.5 | Fits modern WebGL/editorial scroll mockups. |
| 6. Beginner Friendliness | 4.5 | Very simple to instantiate globally. |
| 7. Advanced Potential | 4.0 | Good configuration hooks, though limits itself strictly to scroll math. |
| 8. Community Activity | 4.5 | Strong community presence in creative agency circles. |
| 9. Visual/Design Quality | 4.5 | Delivers consistent, elegant page-inertia feeling. |
| 10. Implementation Value | 4.5 | Easy integration; requires disabling on native reduced-motion settings. |
| **TOTAL** | **43.5 / 50** | **Approved** |

---

## 6. Anime.js

* **Normalized Name**: Anime.js
* **Aliases**: animejs, anime
* **Category**: Animation Engine
* **Subcategory**: Lightweight vanilla JS animation library
* **Official URL**: [animejs.com](https://animejs.com)
* **Pricing**: Free, open-source.
* **License**: MIT
* **Ethical Crawl Status**: `allowed`

### Normalized Record
* **Summary**: Anime.js is a lightweight JavaScript animation library that works with CSS properties, SVG paths, DOM attributes, and raw JavaScript objects.
* **Creative Value**: Excellent stagger engines (creating offsets over grids or arrays) and simple timeline sequencing for vanilla JS templates and lightweight assets.
* **Integration Options**: NPM package (`animejs`), script CDN.
* **Animation Capabilities**: Keyframes, stagering, spring/elastic physics, SVG line drawing, path morphing, controls (play, pause, seek).
* **Community Notes**: Long-standing community favorite for quick interactive animations.
* **Maintenance Notes**: A new version (v4) is in development, though the legacy v3 package is stable.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 4.5 | Well-known and loved; slightly less active than GSAP/Motion. |
| 2. Current Relevance | 4.0 | Highly capable, though declarative options are preferred in React. |
| 3. Documentation Quality | 4.5 | Beautiful, interactive documentation demonstrating properties side-by-side. |
| 4. Practical Usefulness | 4.0 | Great for grid reveals, staggered lists, and basic SVG reveals. |
| 5. Project Fit | 4.0 | Useful for framework-agnostic frontend work. |
| 6. Beginner Friendliness | 4.5 | Very readable and simple configuration structure. |
| 7. Advanced Potential | 4.0 | Capable path morphing, though less raw plugin scale than GSAP. |
| 8. Community Activity | 4.5 | Large, stable community of developers and designers. |
| 9. Visual/Design Quality | 4.5 | Spring systems render smoothly. |
| 10. Implementation Value | 4.5 | Simple implementation footprint and clean package entry. |
| **TOTAL** | **43.0 / 50** | **Approved** |

---

## 7. PixiJS

* **Normalized Name**: PixiJS
* **Aliases**: pixi.js, pixi
* **Category**: 2D / WebGL
* **Subcategory**: High-performance 2D WebGL/WebGPU render engine
* **Official URL**: [pixijs.com](https://pixijs.com)
* **Pricing**: Free, open-source.
* **License**: MIT
* **Ethical Crawl Status**: `allowed`

### Normalized Record
* **Summary**: PixiJS is a fast HTML5 2D rendering engine that targets WebGL and WebGPU canvas pipelines, falling back to 2D canvas if needed.
* **Creative Value**: Crucial for high-performance 2D scenes requiring thousands of sprites, particle systems, filters, custom displacement maps, or complex 2D clipping masks.
* **Integration Options**: NPM package (`pixi.js`), script imports.
* **Animation Capabilities**: Container structures, filter effects (blur, displacement, custom shaders), sprite sheet animation, particle containers.
* **Community Notes**: Standard for 2D web games, rich advertising, and dynamic landing page backgrounds.
* **Maintenance Notes**: Actively maintained, with major rewrites targeting WebGPU optimization.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 4.5 | The industry standard for high-performance 2D rendering. |
| 2. Current Relevance | 4.5 | WebGPU support keeps it highly relevant for modern web graphics. |
| 3. Documentation Quality | 4.0 | Solid API docs and guides, though examples are sometimes geared towards games. |
| 4. Practical Usefulness | 4.5 | Indispensable for particles and WebGL sprite canvas designs. |
| 5. Project Fit | 4.0 | Great for canvas backdrops and creative interactions. |
| 6. Beginner Friendliness | 3.0 | Requires understanding display objects, update loops, and sprite sheets. |
| 7. Advanced Potential | 5.0 | Complete custom shader, render textures, and filter pipeline control. |
| 8. Community Activity | 4.5 | Highly active developer forums and GitHub codebase. |
| 9. Visual/Design Quality | 4.5 | Capable of extremely sharp 2D rendering at 60fps. |
| 10. Implementation Value | 3.5 | Large library footprint; requires managing canvas DOM lifecycle. |
| **TOTAL** | **41.5 / 50** | **Approved (Niche)** |

---

## 8. Scrollama

* **Normalized Name**: Scrollama
* **Aliases**: scrollama
* **Category**: Scroll Engine
* **Subcategory**: Intersection Observer-based scrollytelling library
* **Official URL**: [github.com/russellgoldenberg/scrollama](https://github.com/russellgoldenberg/scrollama)
* **Pricing**: Free, open-source.
* **License**: MIT
* **Ethical Crawl Status**: `allowed`

### Normalized Record
* **Summary**: Scrollama is a lightweight JavaScript library for scrollytelling that utilizes IntersectionObserver, avoiding direct event listeners.
* **Creative Value**: Great for narrative dashboards and text scrolling. Triggers index transitions as sections cross trigger boundaries.
* **Integration Options**: NPM package (`scrollama`), vanilla script link.
* **Animation Capabilities**: Scroll progress ratios, enter/exit trigger callbacks, step tracking.
* **Community Notes**: Heavily used by data journalists (e.g. The Pudding, NYT data visuals).
* **Maintenance Notes**: Stable codebase, low updates because it relies on standard browser APIs.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 3.5 | Widely known in data journalism; less trending in rich visual agency work. |
| 2. Current Relevance | 3.5 | Standard trigger pattern, though GSAP is preferred for timeline scrubbing. |
| 3. Documentation Quality | 4.0 | Clear Readme with step-by-step example graphics. |
| 4. Practical Usefulness | 3.5 | Ideal for stepping sections; limited for visual layout morphs. |
| 5. Project Fit | 4.0 | Fits clean, narrative editorial mockups. |
| 6. Beginner Friendliness | 4.5 | Extremely easy structure to grasp for scrolling sections. |
| 7. Advanced Potential | 3.0 | Relies on CSS transition triggers, limited direct sequencing controls. |
| 8. Community Activity | 3.5 | Stable, moderate community. |
| 9. Visual/Design Quality | 4.0 | Smooth transition steps (relies on browser CSS transitions). |
| 10. Implementation Value | 4.5 | Extremely lightweight; loads in minutes with minimal layout rules. |
| **TOTAL** | **38.0 / 50** | **Approved (Niche)** |

---

## 9. Theatre.js

* **Normalized Name**: Theatre.js
* **Aliases**: theatre, theatre-js
* **Category**: Timeline GUI
* **Subcategory**: High-fidelity motion graphics timeline editor
* **Official URL**: [theatrejs.com](https://theatrejs.com)
* **Pricing**: Free, open-source.
* **License**: Apache 2.0
* **Ethical Crawl Status**: `allowed`

### Normalized Record
* **Summary**: Theatre.js is an animation library with a visual design GUI. It allows animating properties in JS/WebGL/Three.js through a timeline interface in the browser.
* **Creative Value**: High. Enables complex choreography (like a camera moving through a 3D forest) using visual keyframes.
* **Integration Options**: NPM packages (`@theatre/core`, `@theatre/studio`).
* **Animation Capabilities**: Keyframing, visual editor graphs, audio-syncing, 3D prop binding, sheet control scripting.
* **Community Notes**: Popular in WebGL circles for cinematic visual choreography.
* **Maintenance Notes**: Review before commercial production; project updates on GitHub have been sparse.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 3.5 | Highly admired concept; adoption is gated by development status. |
| 2. Current Relevance | 4.0 | Important tool for mixing 3D scenes with timeline controls. |
| 3. Documentation Quality | 3.5 | Basic API references, tutorials are somewhat fragmented. |
| 4. Practical Usefulness | 4.0 | Outstanding for cinematic intros; heavy dependencies for general UI work. |
| 5. Project Fit | 4.0 | High value for advanced interactive WebGL templates. |
| 6. Beginner Friendliness | 2.5 | Requires integrating the visual studio client and managing exported JSON states. |
| 7. Advanced Potential | 5.0 | Ultimate capability for timeline-based property choreographies. |
| 8. Community Activity | 3.5 | Moderately active Discord; GitHub PRs are reviewed slowly. |
| 9. Visual/Design Quality | 4.5 | Renders whatever properties are bound; visual curves are highly controllable. |
| 10. Implementation Value | 3.0 | Heavy studio bundle needs to be excluded from final production builds. |
| **TOTAL** | **37.0 / 50** | **Approved (Niche)** |

---

## 10. Vivus

* **Normalized Name**: Vivus
* **Aliases**: vivus-js
* **Category**: SVG Utility
* **Subcategory**: SVG path drawing animation library
* **Official URL**: [github.com/maxwellito/vivus](https://github.com/maxwellito/vivus)
* **Pricing**: Free, open-source.
* **License**: MIT
* **Ethical Crawl Status**: `allowed`

### Normalized Record
* **Summary**: Vivus is a lightweight, zero-dependency JavaScript class that allows you to animate SVGs, giving them the appearance of being drawn in real-time.
* **Creative Value**: Excellent for logo animation, outline sketch icons, and signature reveals.
* **Integration Options**: NPM package (`vivus`), script link.
* **Animation Capabilities**: Path animation (delayed, sync, one-by-one), custom easing, basic controls.
* **Community Notes**: Used for simple SVG effects.
* **Maintenance Notes**: Stable but older library, receive updates slowly since SVG drawing parameters are complete.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 3.5 | Well-known utility for SVG line drawing; older package. |
| 2. Current Relevance | 3.0 | Basic SVG drawing, though modern CSS/GSAP can achieve similar results. |
| 3. Documentation Quality | 3.5 | Straightforward README with basic settings list. |
| 4. Practical Usefulness | 3.0 | Great for logo animations; has no utility for general DOM movement. |
| 5. Project Fit | 3.0 | Useful for custom icon libraries. |
| 6. Beginner Friendliness | 4.5 | Very easy: just point it at an inline SVG and run. |
| 7. Advanced Potential | 2.5 | Gated strictly to SVG path stroke transitions. |
| 8. Community Activity | 3.0 | Minimal community updates; library is largely in maintenance mode. |
| 9. Visual/Design Quality | 3.5 | Simple line reveals look clean. |
| 10. Implementation Value | 4.5 | Lightweight footprint and quick execution. |
| **TOTAL** | **34.0 / 50** | **Approved (Niche - Line animations only)** |

---

## 3. Shortlist & Recommendations

Based on our scoring, we categorize the frontend motion libraries into four strategic implementation groups:

### 1. Default UI Transition Standard
* **Motion** (Score: 49.5) is the default choice for React applications. Use it for exit/entry states, gestures (hover/tap), simple keyframe spring animations, and layout layout-morphs.

### 2. Rich Scrollytelling & Editorial Animations
* **GSAP** (Score: 47.5) and **ScrollTrigger** are the recommended setup for advanced timeline sequences and scroll-linked layouts.
* **Lenis** (Score: 43.5) should be used in tandem to provide a unified smooth-scrolling layer across browsers.

### 3. Spatial & Interactive Vector Art
* **React Three Fiber + Drei** (Score: 46.0) is the standard for 3D/WebGL scenes.
* **Rive Web Runtime** (Score: 45.5) is recommended when working with complex vector designs containing triggerable state machines.

### 4. Lightweight or Agnostic Reveals
* **Anime.js** (Score: 43.0) is approved for stagger grid grids or vanilla HTML layout animations.
* **Scrollama** (IntersectionObserver triggers) and **Vivus** (SVG path drawing) are approved for specialized layout hooks.
