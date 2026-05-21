# Web Animation & Frontend Creative Structured Records (LIB: UI Components)

This document contains structured evaluations, scoring, and recommendations for the web animation and frontend creative libraries from the source map. It serves as the single source of truth for selecting animation dependencies in the workspace.

---

## Evaluation Summary & Shortlist

Based on the scoring rubric, here is the prioritized shortlist of web animation technologies:

| Rank | Source | Score | Category | Ethical Crawl Status | Recommendation | Core Use Case |
|---|---|---|---|---|---|---|
| **1** | **Motion (Framer Motion)** | **48.5 / 50** | React UI Animation | `api_preferred` | **Approved (Default React)** | Layout transitions, AnimatePresence, microinteractions, and tap/hover gestures. |
| **2** | **GSAP & ScrollTrigger** | **47.5 / 50** | Scroll/Timeline | `api_preferred` | **Approved (Storytelling)** | Complex timeline orchestration, scroll-scrubbed interactive layouts, and DOM pinning. |
| **3** | **Lenis** | **45.0 / 50** | Scroll Utility | `api_preferred` | **Approved** | Smooth scrolling engine compatible with GSAP ScrollTrigger. |
| **4** | **Anime.js** | **43.5 / 50** | Lightweight Tweening | `api_preferred` | **Approved** | Simple, framework-agnostic tweening, SVG morphing, and staggers. |
| **5** | **Rive Web Runtime** | **43.0 / 50** | Vector Design Runtime | `api_preferred` | **Approved (Specialized)** | Interactive vector animations with custom designer state machines. |
| **6** | **PixiJS** | **42.5 / 50** | 2D WebGL/WebGPU | `api_preferred` | **Approved-Niche** | Particle effects, custom masking, sprite animation, and high-performance canvas. |
| **7** | **Scrollama** | **40.0 / 50** | Scrollytelling | `api_preferred` | **Approved-Niche** | Light scroll-linked narrative charts using IntersectionObserver. |
| **8** | **Theatre.js** | **37.0 / 50** | Choreography Tools | `api_preferred` | **Approved-Niche (Verify)** | Advanced studio timeline editing for WebGL scenes or audio sync. |
| **9** | **Matter.js** | **35.5 / 50** | 2D Physics Canvas | `api_preferred` | **Approved-Niche** | Interactive physics simulations, collision sketches, and playful elements. |
| **10** | **Vivus** | **34.0 / 50** | SVG Line Animation | `api_preferred` | **Archive/Reject** | SVG path drawing (replaced by modern Framer Motion / SVG stroke offsets). |

---

## 1. Motion (Framer Motion)

* **Normalized Name**: Motion
* **Aliases**: Framer Motion, motion/react
* **Category**: React UI Animation
* **Subcategory**: Declarative React animation library
* **Official URL**: [motion.dev](https://motion.dev)
* **Pricing**: Free, open-source.
* **License**: MIT License.
* **Ethical Crawl Status**: `api_preferred`

### Normalized Record
* **Summary**: Framer Motion (rebranding to Motion) is the industry standard for React-based visual animations. It uses declarative component props (`initial`, `animate`, `exit`) to choreograph transitions, gestures, and layout morphing.
* **Creative Value**: Extremely high. Enables fluid page exits, spring physics transitions, responsive drag-and-drop elements, and layout changes without manual DOM calculations.
* **Integration Options**: Dedicated npm packages (`motion` and `framer-motion`). Excellent React and Next.js support.
* **AI Capabilities**: N/A.
* **Community Notes**: Supported by PMNDRS ecosystem and widely adopted in premium landing pages.
* **Maintenance Notes**: Heavily maintained and actively developed.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 5.0 | Extremely high adoption in Next.js/React projects. Millions of weekly downloads. |
| 2. Current Relevance | 5.0 | Fully supports React 18/19, Server Components boundaries, and TypeScript. |
| 3. Documentation Quality | 4.5 | Beautiful, interactive documentation with rich visual examples and API references. |
| 4. Practical Usefulness | 5.0 | Essential for production UI feedback, slide-in menus, layout changes, and dynamic lists. |
| 5. Project Fit | 5.0 | Perfect fit for the Next.js workspace templates. |
| 6. Beginner Friendliness | 5.0 | Simple declarative props make basic animations accessible in minutes. |
| 7. Advanced Potential | 4.5 | Excellent layout animations, custom hooks (e.g. `useScroll`, `useTransform`), and springs. |
| 8. Community Activity | 5.0 | Vibrant open-source community, rich visual templates, and extensive guides. |
| 9. Visual/Design Quality | 5.0 | Produces extremely premium, organic spring-based motions with micro-interactions. |
| 10. Implementation Value | 4.5 | Moderate bundle size impact; mitigated by sub-module imports and lazy-loading features. |
| **TOTAL** | **48.5 / 50** | **Approved (Default React)** |

* **Risk Notes**: Ensure `AnimatePresence` tags are correctly placed around layout components to prevent exit animations from breaking.

---

## 2. GSAP (GreenSock Animation Platform)

* **Normalized Name**: GSAP
* **Aliases**: GreenSock, ScrollTrigger
* **Category**: Scroll/Timeline
* **Subcategory**: High-performance core animation engine
* **Official URL**: [gsap.com](https://gsap.com)
* **Pricing**: Free tier for standard usage. Premium plugins (e.g. MorphSVG, SplitText) require a paid subscription.
* **License**: GreenSock "No-Charge" License (commercial redistribution requires a paid business license).
* **Ethical Crawl Status**: `api_preferred`

### Normalized Record
* **Summary**: GSAP is a robust JavaScript animation library built for professional designers. It provides an optimized core engine that animates CSS properties, SVG elements, canvas objects, and WebGL values.
* **Creative Value**: Unmatched for narrative scrollytelling and complex timelines. The ScrollTrigger plugin allows developers to coordinate pinning, scrubbing, and snapping animations with zero performance lag.
* **Integration Options**: Direct ES modules, npm install. Pairs easily with Next.js using `useGSAP` hook helper.
* **AI Capabilities**: N/A.
* **Community Notes**: The absolute gold standard for creative developers building Awwwards-tier portfolios.
* **Maintenance Notes**: Actively maintained with great backward compatibility.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 5.0 | Ubiquitous on high-end award sites. |
| 2. Current Relevance | 4.5 | Extremely relevant; the official `@gsap/react` hooks resolve React lifecycle cleanup issues. |
| 3. Documentation Quality | 5.0 | World-class tutorials, cheat sheets, comprehensive API docs, and interactive forums. |
| 4. Practical Usefulness | 4.5 | Invaluable for scroll-scrubbed interactive layouts and premium marketing blocks. |
| 5. Project Fit | 4.5 | Integrates smoothly with React wrapper hooks. |
| 6. Beginner Friendliness | 4.0 | Timelines are highly readable, but setup hooks in React have a slight learning curve. |
| 7. Advanced Potential | 5.0 | Unlimited capabilities. Allows complex orchestrations, path morphing, and canvas draw cycles. |
| 8. Community Activity | 5.0 | Highly active official forums where GreenSock staff resolve questions in minutes. |
| 9. Visual/Design Quality | 5.0 | Exceptional easing algorithms, scroll-smoothing sync, and pixel-perfect transitions. |
| 10. Implementation Value | 4.0 | Requires careful licensing checks; premium plugins are paywalled. |
| **TOTAL** | **47.5 / 50** | **Approved (Storytelling)** |

* **Risk Notes**: Always verify commercial licensing rules if the project is part of a paid product.

---

## 3. Lenis

* **Normalized Name**: Lenis
* **Aliases**: lenis-scroll, studio-freight/lenis
* **Category**: Scroll Utility
* **Subcategory**: Lightweight smooth-scrolling library
* **Official URL**: [github.com/darkroomengineering/lenis](https://github.com/darkroomengineering/lenis)
* **Pricing**: Free, open-source.
* **License**: MIT License.
* **Ethical Crawl Status**: `api_preferred`

### Normalized Record
* **Summary**: Lenis is an open-source smooth scroll library designed by Darkroom Engineering (formerly Studio Freight). It normalizes scroll speed, acceleration, and wheel event calculations across browsers.
* **Creative Value**: Essential for syncing scroll-linked web graphics (like WebGL scenes or GSAP ScrollTrigger) with smooth user input.
* **Integration Options**: Standard npm package (`lenis` or `@studio-freight/lenis`). React wrapper components are available.
* **AI Capabilities**: N/A.
* **Community Notes**: Rapidly replacing heavy scrolljacking libraries (e.g. Locomotive Scroll) due to its light weight and native behavior preservation.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 4.5 | Highly trending choice for creative developers and agency portfolios. |
| 2. Current Relevance | 4.5 | Designed explicitly to avoid layout shift and sync cleanly with GSAP. |
| 3. Documentation Quality | 4.0 | Functional GitHub documentation with clear setup guides and options. |
| 4. Practical Usefulness | 4.5 | Eliminates choppy scrolling on Windows/Linux browsers when using scroll trigger animations. |
| 5. Project Fit | 4.5 | Ideal companion for timeline and 3D web landing pages. |
| 6. Beginner Friendliness | 4.5 | Installs in a few lines of code; can be enabled globally. |
| 7. Advanced Potential | 4.0 | Configurable acceleration, easing curves, and wheel/touch options. |
| 8. Community Activity | 4.5 | Highly active development and community integrations. |
| 9. Visual/Design Quality | 4.5 | Smooth, organic easing that improves browser feel. |
| 10. Implementation Value | 4.5 | Lightweight footprint compared to older alternatives. |
| **TOTAL** | **45.0 / 50** | **Approved** |

* **Risk Notes**: Always check native accessibility; ensure smooth scrolling can be deactivated if the user has a `prefers-reduced-motion` preference.

---

## 4. Anime.js

* **Normalized Name**: Anime.js
* **Aliases**: animejs
* **Category**: Lightweight Tweening
* **Subcategory**: General-purpose JS animation engine
* **Official URL**: [animejs.com](https://animejs.com)
* **Pricing**: Free, open-source.
* **License**: MIT License.
* **Ethical Crawl Status**: `api_preferred`

### Normalized Record
* **Summary**: Anime.js is a lightweight JavaScript animation engine. It works with CSS properties, individual SVG attributes, DOM elements, and normal JS objects.
* **Creative Value**: Excellent lightweight alternative for standard UI micro-animations, SVG line drawings, and simple timeline staggers when GSAP or Framer Motion is overkill.
* **Integration Options**: Standard npm package `animejs`.
* **AI Capabilities**: N/A.
* **Community Notes**: Loved for its clean, simple syntax and small bundle footprint.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 4.0 | Steady popularity in standard web development. |
| 2. Current Relevance | 4.0 | v4 is currently in release; remains solid for general JavaScript projects. |
| 3. Documentation Quality | 4.5 | Highly visual and interactive documentation detailing all animation properties. |
| 4. Practical Usefulness | 4.0 | Great for DOM sequencing, staggered grids, and custom Canvas draw loops. |
| 5. Project Fit | 4.0 | Fits framework-agnostic microinteraction requirements. |
| 6. Beginner Friendliness | 4.5 | The syntax is clean and intuitive. |
| 7. Advanced Potential | 3.5 | Good timelines, but lacks the advanced plugin ecosystem (e.g. scroll triggering) of GSAP. |
| 8. Community Activity | 4.0 | Steady community support. |
| 9. Visual/Design Quality | 4.5 | Excellent standard easing, spring systems, and morphing paths. |
| 10. Implementation Value | 4.5 | Small file footprint; zero dependencies. |
| **TOTAL** | **43.5 / 50** | **Approved** |

* **Risk Notes**: Avoid using for highly complex page-wide scroll animations where GSAP provides superior performance and memory handling.

---

## 5. Rive Web Runtime

* **Normalized Name**: Rive Web Runtime
* **Aliases**: Rive, rive-wasm, rive-canvas
* **Category**: Vector Design Runtime
* **Subcategory**: Interactive vector animation system
* **Official URL**: [rive.app](https://rive.app)
* **Pricing**: Free tier for design editor. Paid subscription for teams. Runtimes are open-source and free.
* **License**: MIT runtime license.
* **Ethical Crawl Status**: `api_preferred`

### Normalized Record
* **Summary**: Rive is a real-time interactive vector graphics format. The Rive Web Runtime renders designer-authored vector assets on a canvas element using WebGL or WebAssembly.
* **Creative Value**: Allows complex state machines (e.g. characters that follow the cursor, interactive icons, customizable avatars) to run directly on the web with minimal file size.
* **Integration Options**: Official `@rive-app/canvas` and `@rive-app/react-canvas` packages.
* **AI Capabilities**: N/A.
* **Community Notes**: Widely used for interactive UI mascots and rich dashboard elements.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 4.5 | Gaining huge popularity among modern digital designers as a replacement for Lottie. |
| 2. Current Relevance | 4.5 | High relevance for web, native apps, and gaming interfaces. |
| 3. Documentation Quality | 4.5 | Thorough guides on setting up runtimes, state machines, and inputs. |
| 4. Practical Usefulness | 4.0 | Perfect for highly custom interactive branding and character-driven UIs. |
| 5. Project Fit | 4.0 | Matches bespoke design workflows. |
| 6. Beginner Friendliness | 3.5 | Requires exporting assets from Rive's editor and understanding state machines. |
| 7. Advanced Potential | 4.5 | Dynamic state triggers allow UI buttons to influence vector details directly. |
| 8. Community Activity | 4.5 | Very active designer community sharing assets and tutorials. |
| 9. Visual/Design Quality | 5.0 | Extremely smooth vector animations with anti-aliasing and zero resolution loss. |
| 10. Implementation Value | 4.0 | Small export assets, but the WASM runtime download is an initial page-load factor. |
| **TOTAL** | **43.0 / 50** | **Approved (Specialized)** |

* **Risk Notes**: Verify canvas fallback options and ensure proper layout dimensions are set to avoid initial layout shifts.

---

## 6. PixiJS

* **Normalized Name**: PixiJS
* **Aliases**: pixi, pixi.js
* **Category**: 2D WebGL/WebGPU
* **Subcategory**: High-performance 2D rendering engine
* **Official URL**: [pixijs.com](https://pixijs.com)
* **Pricing**: Free, open-source.
* **License**: MIT License.
* **Ethical Crawl Status**: `api_preferred`

### Normalized Record
* **Summary**: PixiJS is a rendering library that lets you build interactive graphics, cross-platform games, and visual effects without having to write low-level WebGL or WebGPU shader code.
* **Creative Value**: Best-in-class for 2D canvases containing thousands of particles, dynamic sprites, interactive image displacements, and custom visual filters.
* **Integration Options**: Standard npm package `pixi.js`.
* **AI Capabilities**: N/A.
* **Community Notes**: Used for complex browser games, landing pages with particle overlays, and interactive visual galleries.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 4.5 | Leading 2D canvas library in web development. |
| 2. Current Relevance | 4.5 | v8 introduces native WebGPU rendering with automatic WebGL fallbacks. |
| 3. Documentation Quality | 4.0 | Extensive guides, API listings, and sandbox examples, though version transitions can confuse setup. |
| 4. Practical Usefulness | 4.0 | Overkill for simple layouts; indispensable for particle systems and filter masks. |
| 5. Project Fit | 4.0 | Matches niche 2D graphics production. |
| 6. Beginner Friendliness | 3.5 | Requires setting up a rendering loop, stage containers, and loaders. |
| 7. Advanced Potential | 4.5 | Support for custom GLSL/WGSL shaders, custom filters, and blend modes. |
| 8. Community Activity | 4.5 | Broad ecosystem with rich plugins and legacy tutorials. |
| 9. Visual/Design Quality | 4.5 | Creates highly fluid, complex visual layers and smooth interactions. |
| 10. Implementation Value | 4.5 | High performance rendering, but adds bundle weight (requires lazy-loading). |
| **TOTAL** | **42.5 / 50** | **Approved-Niche** |

* **Risk Notes**: Heavy rendering operations can cause mobile battery drain if render loops are not properly paused when offscreen.

---

## 7. Scrollama

* **Normalized Name**: Scrollama
* **Aliases**: scrollama
* **Category**: Scrollytelling
* **Subcategory**: Intersection Observer scroll trigger
* **Official URL**: [github.com/russellgoldenberg/scrollama](https://github.com/russellgoldenberg/scrollama)
* **Pricing**: Free, open-source.
* **License**: MIT License.
* **Ethical Crawl Status**: `api_preferred`

### Normalized Record
* **Summary**: Scrollama is a modern JavaScript library for scrollytelling. It uses the browser's native `IntersectionObserver` to trigger events based on scroll directions and positions.
* **Creative Value**: Excellent lightweight framework for narrative data stories, slide transitions, and scroll step notifications where you do not need complex web transformations.
* **Integration Options**: npm package `scrollama`.
* **AI Capabilities**: N/A.
* **Community Notes**: Highly popular among data journalists and editorial designers.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 4.0 | Very popular in editorial journalism (NYT, Pudding). |
| 2. Current Relevance | 4.0 | Leverages efficient IntersectionObserver APIs instead of heavy window scroll listeners. |
| 3. Documentation Quality | 4.0 | Clean, simple GitHub examples and code snippets. |
| 4. Practical Usefulness | 4.0 | Perfect for modular step-by-step layouts and fading cards. |
| 5. Project Fit | 4.0 | Fits storytelling and text-focused web pages. |
| 6. Beginner Friendliness | 4.5 | Incredibly easy to configure. |
| 7. Advanced Potential | 3.0 | Limited to triggering entry/exit events; lacks timeline control. |
| 8. Community Activity | 3.5 | Stable development with occasional updates. |
| 9. Visual/Design Quality | 4.0 | Promotes clean, well-spaced step animations. |
| 10. Implementation Value | 5.0 | Extremely lightweight (~4KB) compared to GSAP. |
| **TOTAL** | **40.0 / 50** | **Approved-Niche** |

* **Risk Notes**: Does not perform smooth scrolling; usually paired with native CSS sticky layouts.

---

## 8. Theatre.js

* **Normalized Name**: Theatre.js
* **Aliases**: theatre, `@theatre/core`
* **Category**: Choreography Tools
* **Subcategory**: Visual design timeline editor
* **Official URL**: [theatrejs.com](https://theatrejs.com)
* **Pricing**: Free, open-source.
* **License**: Apache 2.0 License.
* **Ethical Crawl Status**: `api_preferred`

### Normalized Record
* **Summary**: Theatre.js is a motion graphics library with a built-in visual editor workspace. It allows developers to visually animate HTML elements, WebGL objects, and custom Javascript objects.
* **Creative Value**: Gives developer-designers a timeline interface inside the browser, allowing them to animate variables in real-time, export animation JSON data, and load it in production.
* **Integration Options**: npm packages `@theatre/core` and `@theatre/studio`.
* **AI Capabilities**: N/A.
* **Community Notes**: Adored for its unique design interface, but project activity has slowed down in recent quarters.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 3.5 | Niche popularity among high-end 3D developer-designers. |
| 2. Current Relevance | 3.5 | Innovative editor approach, but maintenance speed is slow. |
| 3. Documentation Quality | 4.0 | High-quality getting-started video guides, though some API endpoints lack text docs. |
| 4. Practical Usefulness | 3.5 | Outstanding for animating specific 3D scenes; overkill for typical UI components. |
| 5. Project Fit | 3.5 | Matches high-fidelity WebGL experiments. |
| 6. Beginner Friendliness | 3.0 | Setting up the studio UI overlay in dev environments requires config steps. |
| 7. Advanced Potential | 5.0 | Visual keyframing, audio sync track, and custom bezier curves. |
| 8. Community Activity | 3.5 | Discord is active, but core repository commits are infrequent. |
| 9. Visual/Design Quality | 4.5 | Beautiful interface and animation controls. |
| 10. Implementation Value | 3.0 | The visual editor library is dev-only, but production core runtime still adds weight. |
| **TOTAL** | **37.0 / 50** | **Approved-Niche (Verify)** |

* **Risk Notes**: Review repository status and community forks before adding as a critical project dependency.

---

## 9. Matter.js

* **Normalized Name**: Matter.js
* **Aliases**: matter-js, matter
* **Category**: 2D Physics Canvas
* **Subcategory**: 2D rigid body physics engine
* **Official URL**: [brm.io/matter-js](https://brm.io/matter-js)
* **Pricing**: Free, open-source.
* **License**: MIT License.
* **Ethical Crawl Status**: `api_preferred`

### Normalized Record
* **Summary**: Matter.js is a 2D physics engine for the web. It handles rigid bodies, elastic collisions, friction, gravity, constraints, and composite models.
* **Creative Value**: Allows developers to build playful web sections (e.g. falling letters, blocks that react to mouse swipes, gravity-based menus, interactive canvas sandboxes).
* **Integration Options**: npm package `matter-js`.
* **AI Capabilities**: N/A.
* **Community Notes**: Popular for creative portfolios and web games.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 4.0 | Well-known and stable physics library. |
| 2. Current Relevance | 3.5 | Good for playful branding; rarely used in clean, standard UI elements. |
| 3. Documentation Quality | 3.5 | Clean API docs, though getting-started guides are basic. |
| 4. Practical Usefulness | 3.5 | High utility for creative elements, minimal for direct utility controls. |
| 5. Project Fit | 3.5 | Fits playful vector graphics. |
| 6. Beginner Friendliness | 3.5 | Standard engine loop initialization; requires canvas binding. |
| 7. Advanced Potential | 4.0 | Handles sensors, dynamic gravity vectors, and mouse constraint events. |
| 8. Community Activity | 3.5 | Stable project with low updates. |
| 9. Visual/Design Quality | 4.0 | Physics interactions feel bouncy, organic, and interactive. |
| 10. Implementation Value | 3.0 | Physics calculations have a minor CPU overhead on mobile devices. |
| **TOTAL** | **35.5 / 50** | **Approved-Niche** |

* **Risk Notes**: Limit usage to small, isolated sections to protect low-end mobile devices from thread blocking.

---

## 10. Vivus

* **Normalized Name**: Vivus
* **Aliases**: vivus
* **Category**: SVG Line Animation
* **Subcategory**: SVG path drawing utility
* **Official URL**: [github.com/maxwellito/vivus](https://github.com/maxwellito/vivus)
* **Pricing**: Free, open-source.
* **License**: MIT License.
* **Ethical Crawl Status**: `api_preferred`

### Normalized Record
* **Summary**: Vivus is a lightweight JavaScript class that allows you to animate SVGs, giving them the appearance of being drawn in real-time.
* **Creative Value**: Historically popular for drawing outline logos or icon outlines upon page load.
* **Integration Options**: npm package `vivus`.
* **AI Capabilities**: N/A.
* **Community Notes**: Now rarely used since Framer Motion and standard CSS can achieve the same effect natively.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 3.0 | Decreasing popularity due to modern CSS alternatives. |
| 2. Current Relevance | 2.5 | SVG line animations are now trivially handled inside Framer Motion or vanilla CSS. |
| 3. Documentation Quality | 3.5 | Straightforward README with basic parameter explanations. |
| 4. Practical Usefulness | 2.5 | Replaced by modern layout animation tools. |
| 5. Project Fit | 3.0 | Niche vector icon reveals. |
| 6. Beginner Friendliness | 4.5 | Simple constructor settings. |
| 7. Advanced Potential | 2.5 | Limited exclusively to path drawing. |
| 8. Community Activity | 2.5 | Minimal updates in recent years. |
| 9. Visual/Design Quality | 4.0 | Clean drawing animations. |
| 10. Implementation Value | 4.0 | Tiny footprint, but redundant when Framer Motion is already installed. |
| **TOTAL** | **34.0 / 50** | **Archive/Reject** |

* **Risk Notes**: Redundant in projects that already import `@motion/react` or `gsap`.
