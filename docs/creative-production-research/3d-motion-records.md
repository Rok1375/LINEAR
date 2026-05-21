# 3D Motion And Creative Coding Structured Records (LIB: Three.js / WebGL)

This document contains structured evaluations, scoring, and recommendations for the primary 3D web graphics, shaders, and creative coding frameworks collected in the source map. It serves as the single source of truth for selecting WebGL/WebGPU libraries, asset pipeline paths, and shader mathematical models.

---

## Evaluation Summary & Shortlist

Based on the scoring rubric, here is the prioritized shortlist of 3D motion and creative coding systems:

| Rank | Source | Score | Category | Ethical Crawl Status | Recommendation | Core Use Case |
|---|---|---|---|---|---|---|
| **1** | **Drei Helpers** | **48.5 / 50** | React 3D Helpers | `allowed` | **Approved (Gold Standard)** | Essential prebuilt React components for cameras, loader overrides, and scene styling. |
| **2** | **Three.js** | **48.0 / 50** | 3D Engine | `allowed` | **Approved (Core Engine)** | Foundation engine for meshes, lighting, camera matrix states, and WebGL renders. |
| **3** | **React Three Fiber (R3F)** | **47.0 / 50** | React 3D Wrapper | `allowed` | **Approved (React Standard)** | Componentized scene architectures, layout states, and event listeners. |
| **4** | **Blender glTF Pipeline** | **46.5 / 50** | Asset Pipeline | `allowed` | **Approved (Asset Standard)** | The mandatory pathway for compressing and exporting external 3D meshes (GLB). |
| **5** | **Spline** | **44.5 / 50** | Design Embed | `api_preferred` | **Approved** | Embed-friendly visual 3D scenes requiring low-code triggers and UI canvas states. |
| **6** | **Babylon.js** | **44.0 / 50** | 3D Engine | `allowed` | **Approved** | Game-engine alternative to Three.js with full built-in physics and WebXR support. |
| **7** | **p5.js** | **43.5 / 50** | Creative Coding | `allowed` | **Approved** | Rapid mathematical vector art prototyping and canvas generator algorithms. |
| **8** | **The Book of Shaders** | **42.5 / 50** | Shader Reference | `allowed` | **Approved (Educational)** | Mathematical baseline for writing custom fragment shader patterns. |
| **9** | **Codrops Creative Hub** | **41.0 / 50** | Inspiration | `allowed` | **Approved** | Design-driven showcase code examples and interactive WebGL layout tricks. |
| **10** | **Shadertoy** | **39.0 / 50** | Shader Sandbox | `allowed` | **Approved (Inspiration)** | Fragment shader code reference, math functions, and visual procedural sandboxes. |
| **11** | **MDN WebGPU API** | **39.0 / 50** | Low-level GPU | `allowed` | **Approved (Niche)** | Experimental WebGPU compute shaders and high-performance browser rendering. |
| **12** | **TouchDesigner** | **36.5 / 50** | Motion Install | `allowed` | **Approved (Niche)** | Desktop projection mapping and hardware-level interactive spatial sensors. |

---

## 1. Three.js

* **Normalized Name**: Three.js
* **Aliases**: three, `three/addons/`
* **Category**: 3D Engine
* **Subcategory**: Canonical WebGL/WebGPU 3D library
* **Official URL**: [threejs.org](https://threejs.org)
* **Pricing**: Free, open-source.
* **License**: MIT
* **Ethical Crawl Status**: `allowed`

### Normalized Record
* **Summary**: Three.js is the standard JavaScript 3D library for browser rendering. It creates scenes, cameras, lighting setups, geometries, and materials using WebGL or WebGPU render loops.
* **Creative Value**: Very high. The backbone of web 3D. Used for custom particle engines, procedural environments, interactive product loaders, and complex scene lighting.
* **Integration Options**: NPM package (`three`), script files. Addons must be imported from `three/addons/`.
* **3D Capabilities**: Render loops, math utility models (Vector3, Matrix4, Quaternion), standard meshes/materials (MeshStandardMaterial, ShaderMaterial), glTF/GLB loaders.
* **Community Notes**: Supported by the largest WebGL community on GitHub and Discourse.
* **Maintenance Notes**: Actively maintained with monthly releases.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 5.0 | The canonical engine for web-based 3D content. |
| 2. Current Relevance | 5.0 | Constantly updated with WebGPU and progressive web standards. |
| 3. Documentation Quality | 5.0 | Thorough and search-friendly documentation with thousands of visual code sandbox examples. |
| 4. Practical Usefulness | 5.0 | Core foundation for any WebGL design project. |
| 5. Project Fit | 5.0 | Directly matches 3D Creative Engineering requirements. |
| 6. Beginner Friendliness | 3.5 | Requires solid understanding of 3D math, lights, and layout lifecycles. |
| 7. Advanced Potential | 5.0 | Supports custom GLSL shaders, frame buffer objects (FBO), and postprocessing filters. |
| 8. Community Activity | 5.0 | Huge active user base, stackoverflow tags, and Discord discussions. |
| 9. Visual/Design Quality | 5.0 | Renders high-fidelity physically based rendering (PBR) scenes. |
| 10. Implementation Value | 4.5 | Well-designed package, though modular chunks must be tree-shaken in bundles. |
| **TOTAL** | **48.0 / 50** | **Approved (Core Engine)** |

---

## 2. React Three Fiber (R3F)

* **Normalized Name**: React Three Fiber
* **Aliases**: R3F, `@react-three/fiber`
* **Category**: React 3D Wrapper
* **Subcategory**: Custom React renderer for Three.js
* **Official URL**: [r3f.docs.pmnd.rs](https://r3f.docs.pmnd.rs)
* **Pricing**: Free, open-source.
* **License**: MIT
* **Ethical Crawl Status**: `allowed`

### Normalized Record
* **Summary**: R3F is a custom React renderer that compiles declarative component trees into standard Three.js scene graphs, integrating 3D elements into the React state lifecycle.
* **Creative Value**: High. Dramatically simplifies structural component architectures, camera controls, pointer/click raycasting triggers, and render loop bindings (`useFrame`).
* **Integration Options**: NPM package (`@react-three/fiber`).
* **3D Capabilities**: Declarative rendering of standard Three meshes, event handling, frameloop pacing, React Suspense for async asset loading.
* **Community Notes**: Maintained by Poimandres; widely used for portfolio layouts and React-based interactive dashboards.
* **Maintenance Notes**: Regularly updated to track React concurrent modes.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 5.0 | Standard React integration wrapper for Three.js. |
| 2. Current Relevance | 5.0 | Essential for component-driven frontend structures. |
| 3. Documentation Quality | 4.0 | Detailed guides, though references are separated between React and Three.js manuals. |
| 4. Practical Usefulness | 5.0 | Extremely practical for React applications. |
| 5. Project Fit | 5.0 | Matches the Next.js/React layout stack perfectly. |
| 6. Beginner Friendliness | 3.5 | Steep learning curve for matching React component states with mutable 3D references. |
| 7. Advanced Potential | 5.0 | Fully supports custom render pipelines, portal rendering, and custom hooks. |
| 8. Community Activity | 5.0 | Highly active, supportive community (Poimandres). |
| 9. Visual/Design Quality | 5.0 | Matches the visual outputs of underlying Three.js engines. |
| 10. Implementation Value | 4.5 | Straightforward npm install; requires monitoring peer dependencies. |
| **TOTAL** | **47.0 / 50** | **Approved** |

---

## 3. Drei Helpers

* **Normalized Name**: Drei
* **Aliases**: `@react-three/drei`
* **Category**: React 3D Helpers
* **Subcategory**: Helper utility library for React Three Fiber
* **Official URL**: [github.com/pmndrs/drei](https://github.com/pmndrs/drei)
* **Pricing**: Free, open-source.
* **License**: MIT
* **Ethical Crawl Status**: `allowed`

### Normalized Record
* **Summary**: Drei is a helper library for React Three Fiber containing pre-configured cameras, controls, loader overrides, environment maps, HTML overlays, and post-processing tools.
* **Creative Value**: Extremely high. Removes the boilerplate code needed to load GLTF models, setup orbit controls, add responsive HTML labels, or load environment lighting textures.
* **Integration Options**: NPM package (`@react-three/drei`).
* **3D Capabilities**: Canvas controls (OrbitControls, KeyboardControls), textures/environments (Environment, useTexture), loader shortcuts (useGLTF), staging visual tools (Sparkles, Float, Center).
* **Community Notes**: Standard pairing alongside R3F.
* **Maintenance Notes**: Actively maintained alongside R3F.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 5.0 | Ubiquitous choice when working with React Three Fiber. |
| 2. Current Relevance | 5.0 | Holds standard, critical utility wrappers for loading assets. |
| 3. Documentation Quality | 4.5 | Clear readme listing all components; examples are interactive. |
| 4. Practical Usefulness | 5.0 | Saves thousands of lines of boilerplate code. |
| 5. Project Fit | 5.0 | Perfect fit for rich 3D interfaces. |
| 6. Beginner Friendliness | 4.5 | Makes complex Three.js setups (like loading GLTF with suspenses) simple. |
| 7. Advanced Potential | 4.5 | Excellent shader abstractions, though custom loaders require falling back. |
| 8. Community Activity | 5.0 | Actively updated by core contributors and community. |
| 9. Visual/Design Quality | 5.0 | Pre-packaged effects like soft shadows look outstanding out-of-the-box. |
| 10. Implementation Value | 5.0 | Fast, standard npm installation. |
| **TOTAL** | **48.5 / 50** | **Approved (Gold Standard)** |

---

## 4. Blender glTF Pipeline

* **Normalized Name**: Blender glTF Exporter
* **Aliases**: glTF 2.0 Exporter, Blender GLB, gltf-pipeline
* **Category**: Asset Pipeline
* **Subcategory**: Exporter and compression tool chain for web 3D models
* **Official URL**: [docs.blender.org](https://docs.blender.org/manual/en/latest/addons/import_export/scene_gltf2.html)
* **Pricing**: Free, open-source.
* **License**: GPL
* **Ethical Crawl Status**: `allowed` (Exporter docs public)

### Normalized Record
* **Summary**: The Blender-to-glTF/GLB export pipeline is the required workflow for converting 3D meshes, textures, animations, and riggings into web-friendly, compressed delivery files.
* **Creative Value**: High. Bridging custom 3D design work into code. Using GLTF compression extensions (like Draco or Meshopt) ensures assets load rapidly over normal network speeds.
* **Integration Options**: Exporter comes built-in with Blender. Command-line compressor tools (`gltf-pipeline` / `gltf-transform`) process exported outputs.
* **3D Capabilities**: Exporting physically based rendering (PBR) materials, camera positions, animations, bone armatures, shape keys, Draco compression, mesh optimization.
* **Community Notes**: The standard interchange format for the Khronos Group and 3D web developers.
* **Maintenance Notes**: Heavily maintained and updated alongside Blender core.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 5.0 | The industry standard for exporting assets to the web. |
| 2. Current Relevance | 5.0 | glTF is the "JPEG of 3D" and remains completely relevant. |
| 3. Documentation Quality | 4.5 | Detailed specifications on materials export mappings and extension flags. |
| 4. Practical Usefulness | 5.0 | Essential for optimizing model payloads and textures. |
| 5. Project Fit | 5.0 | Mandatory pipeline for any project using custom 3D model files. |
| 6. Beginner Friendliness | 3.5 | Exporter settings (normals, animation baking, texture packing) require training. |
| 7. Advanced Potential | 4.5 | Supports custom extensions, Draco compression, and LOD (Level of Detail) setups. |
| 8. Community Activity | 5.0 | Backed by the Khronos Group and massive Blender community. |
| 9. Visual/Design Quality | 5.0 | Preserves physical shader properties accurately. |
| 10. Implementation Value | 4.0 | Exporter is built into Blender; command-line compression takes some setup. |
| **TOTAL** | **46.5 / 50** | **Approved (Asset Standard)** |

---

## 5. Spline

* **Normalized Name**: Spline
* **Aliases**: `spline-viewer`, `@splinetool/react-spline`
* **Category**: Design Embed
* **Subcategory**: Web-based 3D design editor and runtime viewer
* **Official URL**: [spline.design](https://spline.design)
* **Pricing**: Free basic tier; paid subscriptions for team assets and video rendering. Viewer runtime embed is free.
* **License**: Proprietary editor; open-source React-wrapper and JS web components.
* **Ethical Crawl Status**: `api_preferred`

### Normalized Record
* **Summary**: Spline is a 3D design tool built for the web. It exports scenes to interactive web components (`<spline-viewer>`) that load textures, animations, and camera states out-of-the-box.
* **Creative Value**: Enables designers to build interactive 3D assets visually, without writing WebGL code, and hand them off directly as web components.
* **Integration Options**: JS Web component, NPM packages (`@splinetool/react-spline`, `@splinetool/runtime`).
* **3D Capabilities**: Hover/click triggers, physics collisions, camera orbits, particle generators, state machine loops, design export assets.
* **Community Notes**: Gaining fast popularity among designers for its low entry barrier.
* **Maintenance Notes**: Actively maintained, with frequent feature additions.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 4.5 | Gaining massive traction in low-code 3D interfaces. |
| 2. Current Relevance | 4.5 | Essential tool for quick design-to-web 3D workflows. |
| 3. Documentation Quality | 4.0 | Simple tutorials; API docs are concise but cover basic triggers. |
| 4. Practical Usefulness | 4.5 | Excellent for hero sections and illustrative 3D icons. |
| 5. Project Fit | 4.0 | Useful for interactive assets, though heavier than raw optimized code. |
| 6. Beginner Friendliness | 5.0 | Visual editor makes creating interactive 3D scenes accessible to beginners. |
| 7. Advanced Potential | 3.5 | Custom shader manipulation and pipeline changes are limited compared to raw Three.js. |
| 8. Community Activity | 4.0 | Growing community sharing designs and assets. |
| 9. Visual/Design Quality | 5.0 | Very clean visual rendering engine with vector-like styling. |
| 10. Implementation Value | 4.5 | Simple HTML script embed or React component. |
| **TOTAL** | **44.5 / 50** | **Approved** |

---

## 6. Babylon.js

* **Normalized Name**: Babylon.js
* **Aliases**: babylon, babylonjs
* **Category**: 3D Engine
* **Subcategory**: All-in-one WebGL/WebGPU game engine
* **Official URL**: [babylonjs.com](https://babylonjs.com)
* **Pricing**: Free, open-source.
* **License**: Apache 2.0
* **Ethical Crawl Status**: `allowed`

### Normalized Record
* **Summary**: Babylon.js is a full-featured 3D engine designed for browser games and complex WebGL environments. It comes complete with physical engines, sound pipelines, GUI overlays, and WebXR bindings.
* **Creative Value**: High for game-like structures, virtual reality (WebXR) interfaces, and heavy physics simulations.
* **Integration Options**: NPM package (`@babylonjs/core`), playground files.
* **3D Capabilities**: Complete engine, built-in physics engines (Havok, Ammo.js), GUI managers, WebXR support, node material editors.
* **Community Notes**: Popular in commercial enterprise environments and browser game development.
* **Maintenance Notes**: Backed by Microsoft and open-source contributors; very active releases.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 4.5 | Strong reputation, but less adopted than Three.js for pure portfolio/creative agency web projects. |
| 2. Current Relevance | 4.5 | Fully features WebGPU, modern shaders, and VR inputs. |
| 3. Documentation Quality | 5.0 | Incredible documentation, API reference, interactive playground, and active developer forums. |
| 4. Practical Usefulness | 4.5 | Powerful for games, though bundle sizes are larger for basic creative UI elements. |
| 5. Project Fit | 4.0 | Excellent fallback for complex physics/XR requirements. |
| 6. Beginner Friendliness | 3.0 | Large, structured classes require learning a game-engine layout hierarchy. |
| 7. Advanced Potential | 5.0 | Absolute control over rendering pipelines, physics nodes, and WebGPU compute shaders. |
| 8. Community Activity | 4.5 | Active developer forums and GitHub codebase. |
| 9. Visual/Design Quality | 4.5 | High rendering capability, though default scenes require tweaking to look "artistic". |
| 10. Implementation Value | 4.0 | Direct npm install; requires bundler optimization. |
| **TOTAL** | **44.0 / 50** | **Approved** |

---

## 7. p5.js

* **Normalized Name**: p5.js
* **Aliases**: p5, processingjs
* **Category**: Creative Coding
* **Subcategory**: Accessibility-first canvas sketch library
* **Official URL**: [p5js.org](https://p5js.org)
* **Pricing**: Free, open-source.
* **License**: LGPL
* **Ethical Crawl Status**: `allowed`

### Normalized Record
* **Summary**: p5.js is a JavaScript library designed to make creative coding and visual algorithms accessible for artists, designers, and beginners.
* **Creative Value**: Excellent for rapid generative graphics sketches, procedural textures, noise algorithms (Perlin noise), dynamic interactive grids, and physics-like particle flows.
* **Integration Options**: NPM package (`p5`), CDN script links, iframe sandbox embeds.
* **3D Capabilities**: Basic 3D mode (WEBGL canvas renderer), basic geometry shaders, custom lights.
* **Community Notes**: Supported by the Processing Foundation. The primary educational gateway into creative coding.
* **Maintenance Notes**: Regularly updated for accessibility and web standards.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 5.0 | The most popular and recognized library for creative coding sketches. |
| 2. Current Relevance | 4.0 | Solid for algorithm rendering, though custom raw canvas/WebGL is faster for complex UI. |
| 3. Documentation Quality | 5.0 | Immaculate visual reference API guides with editable code examples. |
| 4. Practical Usefulness | 4.0 | Excellent for background patterns and procedural image creation. |
| 5. Project Fit | 3.5 | Good for isolated sketches; harder to integrate clean layout states in React. |
| 6. Beginner Friendliness | 5.0 | Easiest API for writing code sketches; designed specifically for visual beginners. |
| 7. Advanced Potential | 3.5 | WEBGL mode is functional, but lacks the complex scene-graph utility of Three.js. |
| 8. Community Activity | 5.0 | Massive global community, processing forums, and open sketch galleries. |
| 9. Visual/Design Quality | 4.0 | Very good for flat vector math and algorithm layouts. |
| 10. Implementation Value | 4.5 | Simple implementation, though standard DOM binding requires checking cleanup cycles. |
| **TOTAL** | **43.5 / 50** | **Approved** |

---

## 8. The Book of Shaders

* **Normalized Name**: The Book of Shaders
* **Aliases**: BookOfShaders, BOS
* **Category**: Shader Reference
* **Subcategory**: Educational manual for GLSL fragment shaders
* **Official URL**: [thebookofshaders.com](https://thebookofshaders.com)
* **Pricing**: Free, open-source.
* **License**: CC BY-NC-SA 3.0
* **Ethical Crawl Status**: `allowed`

### Normalized Record
* **Summary**: An interactive, step-by-step guide written by Patricio Gonzalez Vivo and Jen Lowe, teaching how to program fragment shaders (GLSL) from basic math to noise algorithms.
* **Creative Value**: High. The definitive mathematical reference for visual developers learning how to write custom shader materials (lighting, noise, liquid distortions, morphing patterns) in WebGL.
* **Integration Options**: Conceptual resource; code snippets are ported directly into Three.js `ShaderMaterial` code blocks.
* **3D Capabilities**: Non-Euclidean geometry drawing, procedural noise functions (fractal Brownian motion), signed distance fields (SDF), trigonometric visual patterns.
* **Community Notes**: The primary starting point recommended by WebGL developers for learning shaders.
* **Maintenance Notes**: Older, stable educational manual; concepts remain fully compatible with current GLSL specs.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 4.5 | Standard reference for shader mathematics. |
| 2. Current Relevance | 4.0 | GLSL concepts remain directly relevant, though WebGPU (WGSL) is expanding. |
| 3. Documentation Quality | 5.0 | Pristine explanations, diagrams, and editable inline shader playgrounds. |
| 4. Practical Usefulness | 4.5 | Critical for writing custom textures and high-performance WebGL backdrops. |
| 5. Project Fit | 4.0 | Great reference for writing custom R3F materials. |
| 6. Beginner Friendliness | 3.5 | Shader math (coordinates normalization, color vectors) requires adjustment from DOM habits. |
| 7. Advanced Potential | 4.5 | Teaches the core building blocks of custom graphic generation. |
| 8. Community Activity | 4.5 | Widely linked and referenced across visual coding forums. |
| 9. Visual/Design Quality | 4.5 | Visual math patterns are highly clean. |
| 10. Implementation Value | 3.5 | Code must be adapted manually to match Three.js shader conventions. |
| **TOTAL** | **42.5 / 50** | **Approved (Educational reference for custom shader materials)** |

---

## 9. Codrops Creative Hub

* **Normalized Name**: Codrops
* **Aliases**: tympanus, Codrops Collective
* **Category**: Inspiration
* **Subcategory**: Creative frontend tutorials and demo collection
* **Official URL**: [tympanus.net/codrops](https://tympanus.net/codrops)
* **Pricing**: Free community access.
* **License**: Demo-specific licenses (mostly MIT / custom demo use).
* **Ethical Crawl Status**: `allowed`

### Normalized Record
* **Summary**: Codrops is an influential web design blog and tutorial hub showcasing cutting-edge frontend experiments, scroll triggers, WebGL effects, and custom transition designs.
* **Creative Value**: Outstanding. Provides actual, inspectable codebases for high-end web interactions (e.g. image warp hover states, interactive WebGL galleries, fluid distortions).
* **Integration Options**: Manual download of GitHub repositories, tutorials step walkthroughs.
* **3D Capabilities**: Source codes combine Three.js, GSAP, WebGL shaders, SVG grids, and interactive DOM alignments.
* **Community Notes**: The primary benchmark library for creative web designers looking for technical implementation details.
* **Maintenance Notes**: Actively published for over a decade.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 4.5 | High popularity among frontend designers and interactive builders. |
| 2. Current Relevance | 4.5 | Regularly publishes state-of-the-art interactive web tricks. |
| 3. Documentation Quality | 3.5 | Written as tutorial walkthroughs; files lack centralized library docs. |
| 4. Practical Usefulness | 4.5 | High value for copying interactive patterns and testing in projects. |
| 5. Project Fit | 4.0 | Directly aligns with frontend components development. |
| 6. Beginner Friendliness | 3.5 | Code is highly complex and requires understanding of advanced JS/CSS pipelines. |
| 7. Advanced Potential | 4.5 | Shows how to combine shaders, GSAP, and DOM layouts into single components. |
| 8. Community Activity | 4.0 | Large newsletter reach and active showcase comments. |
| 9. Visual/Design Quality | 5.0 | Top-tier visual aesthetics and transition timing. |
| 10. Implementation Value | 3.0 | Demos are standalone; code must be refactored to fit current React projects. |
| **TOTAL** | **41.0 / 50** | **Approved (Inspiration and UI Pattern repository)** |

---

## 10. Shadertoy

* **Normalized Name**: Shadertoy
* **Aliases**: shadertoy
* **Category**: Shader Sandbox
* **Subcategory**: Community fragment shader playground and code database
* **Official URL**: [shadertoy.com](https://shadertoy.com)
* **Pricing**: Free community sharing.
* **License**: Creator-specific licenses (typically CC BY-NC-SA 3.0).
* **Ethical Crawl Status**: `allowed`

### Normalized Record
* **Summary**: Shadertoy is a browser playground allowing developers to write pixel shaders in GLSL. It renders scenes procedurally using mathematical fragment calculations.
* **Creative Value**: Infinite artistic scope. Holds thousands of community-authored mathematical algorithms for raymarching, fluid simulations, procedural stars/water, and retro screen filters.
* **Integration Options**: Embeddable iframe player, manual copying of math functions into custom Three.js/WebGL pipelines.
* **3D Capabilities**: Raymarching rendering, custom signed distance functions, math noise matrices, procedural graphics.
* **Community Notes**: The primary gallery of mathematical visual wizards.
* **Maintenance Notes**: Stable community platform.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 5.0 | The dominant portal for pixel shader sharing. |
| 2. Current Relevance | 4.5 | Highly relevant for procedural math calculations. |
| 3. Documentation Quality | 3.0 | Lacks structured tutorials; documentation is limited to forum logs and user comments. |
| 4. Practical Usefulness | 4.0 | Great reference for complex graphics; math must be extracted from standard inputs. |
| 5. Project Fit | 3.5 | Code runs inside isolated canvases; must be integrated into scene graphs to interact. |
| 6. Beginner Friendliness | 2.0 | Steep entry barrier: requires advanced math, vector algebra, and shader structure knowledge. |
| 7. Advanced Potential | 5.0 | Unlimited capabilities for screen effects and math-only visuals. |
| 8. Community Activity | 5.0 | Massively active community posting daily creations. |
| 9. Visual/Design Quality | 5.0 | Out-of-this-world visual effects generated entirely by code lines. |
| 10. Implementation Value | 2.0 | High implementation cost: requires mapping uniforms (iTime, iResolution) to target libraries. |
| **TOTAL** | **39.0 / 50** | **Approved (Resource for mathematical visual algorithms)** |

---

## 11. MDN WebGPU API

* **Normalized Name**: MDN WebGPU API
* **Aliases**: WebGPU, WGSL, WebGPU_API
* **Category**: Low-level GPU
* **Subcategory**: Browser standards specification and API documentation
* **Official URL**: [developer.mozilla.org/en-US/docs/Web/API/WebGPU_API](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API)
* **Pricing**: Free, open browser standard.
* **License**: Public MDN docs.
* **Ethical Crawl Status**: `allowed`

### Normalized Record
* **Summary**: WebGPU is the successor to WebGL, exposing modern GPU capabilities (like compute shaders) directly to JavaScript inside the browser.
* **Creative Value**: High for complex physics simulations (millions of GPU particles), neural network inference, and real-time ray tracing in web browsers.
* **Integration Options**: Native browser API, core render drivers in Three.js and Babylon.js.
* **3D Capabilities**: GPU compute shaders, raw GPU buffers, pipeline creation, WGSL (WebGPU Shading Language) scripts.
* **Community Notes**: Active development by the W3C GPU for the Web Community Group.
* **Maintenance Notes**: Heavily maintained and progressive browser standard rolls.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 4.0 | Rising fast as the future of browser graphics; currently preview/partial on mobile. |
| 2. Current Relevance | 5.0 | Extremely relevant for modern high-performance web engineering. |
| 3. Documentation Quality | 4.5 | Detailed specifications on MDN, though tutorial guides are still expanding. |
| 4. Practical Usefulness | 4.0 | Outstanding for compute pipelines, though too low-level for quick UI mockups. |
| 5. Project Fit | 4.0 | Fits advanced backend/physics research pathways. |
| 6. Beginner Friendliness | 1.5 | Extremely steep learning curve; writing simple triangle shapes takes dozens of lines of buffer code. |
| 7. Advanced Potential | 5.0 | Complete GPU execution controls, compute pipeline access, and WGSL scripting. |
| 8. Community Activity | 4.0 | Growing community, active spec discussions and code samples. |
| 9. Visual/Design Quality | 5.0 | Capable of rendering ultra-complex lighting scenes and calculations. |
| 10. Implementation Value | 2.0 | Complex native implementation; best consumed through wrappers like Three/Babylon. |
| **TOTAL** | **39.0 / 50** | **Approved (Niche - Target driver standard for core 3D engines)** |

---

## 12. TouchDesigner

* **Normalized Name**: TouchDesigner
* **Aliases**: TD, Derivative TouchDesigner
* **Category**: Motion Install
* **Subcategory**: Node-based visual development platform for real-time media
* **Official URL**: [derivative.ca](https://derivative.ca)
* **Pricing**: Free non-commercial tier; paid commercial licenses ($600 - $2200).
* **License**: Proprietary.
* **Ethical Crawl Status**: `allowed`

### Normalized Record
* **Summary**: TouchDesigner is a visual development platform for creating real-time 3D art, projection mappings, system UI controls, and hardware-interactive sensor installations.
* **Creative Value**: High for physical installations, combining camera tracking (Kinect), lighting grids (DMX/ArtNet), and live audio streams.
* **Integration Options**: Standalone desktop runtime (Windows/Mac), OSC/WebSocket communication triggers.
* **3D Capabilities**: Node-based visual scripting, Python scripting integrations, custom GLSL operators, real-time particle structures, camera calibration.
* **Community Notes**: The standard platform used by interactive designers and installation artists globally.
* **Maintenance Notes**: Heavily maintained by Derivative.

### Scoring Rubric

| Criteria | Score | Rationale |
|---|---|---|
| 1. Popularity/Trending | 4.5 | The dominant tool for physical media systems and visual shows. |
| 2. Current Relevance | 4.0 | Core tool for interactive environments and spatial projections. |
| 3. Documentation Quality | 4.5 | Thorough wiki documentation, forums, and hundreds of community video guides. |
| 4. Practical Usefulness | 3.5 | Indispensable for physical spaces; limited value for standard browser web layouts. |
| 5. Project Fit | 2.0 | Low fit for direct web deployments; serves as input/OSC link setup. |
| 6. Beginner Friendliness | 2.0 | Node wiring logic is clean, but requires understanding signals, operators, and installation hardware. |
| 7. Advanced Potential | 5.0 | Unrivaled hardware sensor mappings, scripting operators, and visual networks. |
| 8. Community Activity | 4.5 | High community sharing, active Discord, and user meetups. |
| 9. Visual/Design Quality | 5.0 | Incredible real-time render engine and lighting feedback. |
| 10. Implementation Value | 1.5 | Gated strictly to desktop operating runtimes; cannot be packaged into a standard web client. |
| **TOTAL** | **36.5 / 50** | **Approved (Niche - Projection mapping and interactive physical installations)** |

---

## 3. Shortlist & Recommendations

Based on our scoring, we categorize the 3D and creative coding systems into four implementation zones:

### 1. Default Web 3D Framework Stack
* **Drei** (Score: 48.5) and **React Three Fiber** (Score: 47.0) combined with **Three.js** (Score: 48.0) are the recommended default pathway for 3D web experiences.
* *Pipeline Rule*: All 3D assets must pass through the **Blender glTF Exporter** (Score: 46.5) and be compressed (Draco/Meshopt) before inclusion in client routes.

### 2. Design-to-Web Fast Prototyping
* **Spline** (Score: 44.5) is approved for quick low-code interactive graphics. Make sure to audit script bundle weight and loading transitions before deployment.

### 3. Algorithm & Math Prototyping
* **p5.js** (Score: 43.5) is approved for developing and testing vector math patterns.
* **The Book of Shaders** (Score: 42.5) should be used as the central reference for coding custom GLSL shader overlays in Three.js materials.

### 4. Special Installations & Advanced Hardware
* **TouchDesigner** (Score: 36.5) should be utilized when projects require physical sensor inputs, lighting grids, or offline interactive video walls.
