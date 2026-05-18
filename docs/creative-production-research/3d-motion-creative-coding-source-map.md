# 3D Motion And Creative Coding Source Map

Linear: `SOR-36`
Collected: 2026-05-18
Scope: 3D web, motion graphics, creative coding, shaders, interactive design tools, canvas/WebGL/WebGPU, and design-to-web workflows.

## Source Records

| # | Source | Category | Source type | URL | Why it matters | Verification method |
|---|---|---|---|---|---|---|
| 1 | Three.js docs | 3D web engine | Official docs | https://threejs.org/docs/ | Canonical reference for scenes, cameras, renderers, materials, geometry, animation mixers, loaders, controls, and WebGL/WebGPU-adjacent APIs. | Verify examples against the installed `three` version, profile render loops, and test asset loading in production builds. |
| 2 | Three.js examples | 3D web examples | Official examples | https://threejs.org/examples/ | High-signal source for shaders, postprocessing, particles, loaders, controls, WebGPU experiments, and advanced rendering patterns. | Identify required addon imports, pin versions, check mobile performance, and isolate demo-only assumptions. |
| 3 | Three.js manual installation | 3D web setup | Official docs | https://threejs.org/manual/en/installation.html | Practical setup source for npm/CDN usage, import maps, addons, and bundler-friendly project structure. | Confirm current import paths, especially `three/addons/`, before copying older examples. |
| 4 | React Three Fiber docs | React 3D | Official docs | https://r3f.docs.pmnd.rs/getting-started/introduction | Primary React renderer source for componentized Three.js scenes, hooks, render loops, events, and React integration. | Check React and Three peer versions, test lifecycle cleanup, and profile scene re-renders. |
| 5 | React Three Fiber GitHub | React 3D | GitHub repo | https://github.com/pmndrs/react-three-fiber | Repository signal for compatibility, examples, issue activity, and ecosystem direction. | Review releases, open issues, and examples before choosing it for app architecture. |
| 6 | Drei GitHub | React 3D helpers | GitHub repo | https://github.com/pmndrs/drei | Helper library for controls, environments, loaders, text, staging, HTML overlays, and reusable R3F scene building blocks. | Verify helper compatibility with installed R3F/Three versions and avoid importing large helpers casually. |
| 7 | Babylon.js docs | 3D web engine | Official docs | https://doc.babylonjs.com/ | Full-featured alternative to Three.js with engine, scene graph, materials, physics, GUI, loaders, and WebXR support. | Prototype a small scene, verify package/version docs, and compare bundle/runtime cost with Three.js. |
| 8 | Babylon.js playground | 3D examples | Official examples/tool | https://playground.babylonjs.com/ | Interactive examples and shareable playgrounds for learning materials, cameras, shaders, physics, and WebXR. | Treat playground code as prototypes; port into a bundler project before production use. |
| 9 | Rive web runtime docs | Interactive motion | Official docs | https://rive.app/docs/runtimes/web/web-js | Best source for designer-authored vector animation, state machines, canvas/WebGL runtime choices, and interactive controls. | Verify asset export compatibility, runtime package, state machine inputs, events, and reduced-motion fallback. |
| 10 | Rive runtimes overview | Interactive motion | Official docs | https://www.rive.app/runtimes | Runtime matrix for deciding whether Rive assets can move across web, native, game, and design workflows. | Confirm platform support, package names, feature parity, and licensing before committing. |
| 11 | Spline viewer docs | Design-to-web 3D | Official docs | https://docs.spline.design/doc/spline-viewer/docqM9M20jR9 | Practical path for embedding Spline-authored 3D scenes in web projects with a viewer component. | Verify viewer package, load behavior, accessibility fallback, and whether exported scenes meet performance budgets. |
| 12 | Spline React docs | Design-to-web 3D | Official docs/package | https://github.com/splinetool/react-spline | Source for React integration of Spline scenes and runtime loading behavior. | Test SSR/client boundaries, loading states, asset hosting, and interaction events in the target framework. |
| 13 | Blender glTF exporter docs | Blender-to-web | Official docs | https://docs.blender.org/manual/en/latest/addons/import_export/scene_gltf2.html | Critical bridge from Blender assets to web runtimes through glTF/GLB, animations, materials, cameras, and texture export. | Export a known test scene, inspect GLB size, validate textures/materials, and load with Three.js/Babylon. |
| 14 | Khronos glTF specification | Blender-to-web | Official specification | https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html | Authoritative asset-format reference for 3D web interchange, PBR materials, animation data, extensions, and runtime expectations. | Use for debugging exporter/runtime mismatches and extension support. |
| 15 | glTF Sample Viewer | Asset verification | Official tool | https://github.khronos.org/glTF-Sample-Viewer-Release/ | Useful verification target for GLB materials, lighting, environment maps, and extension behavior independent of app code. | Compare against target runtime rendering and record mismatches before blaming app code. |
| 16 | MDN WebGPU API | WebGPU | Reference docs | https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API | Standards-oriented reference for modern GPU access, compute/render pipelines, browser support, and API concepts. | Check browser compatibility, feature detection, fallbacks, and security/context requirements. |
| 17 | WebGPU Fundamentals | WebGPU tutorials | Tutorial/reference | https://webgpufundamentals.org/ | Practical learning source for buffers, shaders, bind groups, render pipelines, textures, and compute patterns. | Validate examples in target browsers and compare with MDN/spec behavior. |
| 18 | WebGL Fundamentals | WebGL tutorials | Tutorial/reference | https://webglfundamentals.org/ | Reliable low-level source for WebGL rendering, shaders, matrices, textures, and performance basics. | Use to debug abstraction leaks in Three.js/Babylon/Pixi and confirm GPU concepts. |
| 19 | The Book of Shaders | Shader education | Tutorial/book | https://thebookofshaders.com/ | Strong source for fragment shader fundamentals, patterns, noise, signed distance fields, and visual math. | Recreate small shader sketches and adapt GLSL carefully to target runtime conventions. |
| 20 | Shadertoy | Shader examples | Community gallery | https://www.shadertoy.com/ | Large discovery source for advanced fragment shader ideas, raymarching, procedural textures, and visual effects. | Treat as inspiration; check license/author, port uniforms deliberately, and profile before reuse. |
| 21 | p5.js reference | Creative coding | Official docs | https://p5js.org/reference/ | Accessible creative-coding source for canvas, WebGL mode, shapes, color, typography, media, and interaction sketches. | Verify p5 version, canvas lifecycle, pixel density, WebGL mode, and integration constraints in React/Next. |
| 22 | p5.js examples | Creative coding | Official examples | https://p5js.org/examples/ | Fast pattern source for generative visuals, interaction, physics-like sketches, typography, media, and WebGL basics. | Port examples into isolated sketches and test mobile/responsive behavior. |
| 23 | Processing Foundation | Creative coding community | Official/community | https://processingfoundation.org/ | Broader creative coding ecosystem behind Processing and p5.js, useful for learning paths, community references, and education. | Use for community discovery, then verify implementation details in p5.js or target runtime docs. |
| 24 | TouchDesigner docs | Motion/interactive tool | Official docs | https://docs.derivative.ca/ | Canonical source for node-based interactive media, real-time visuals, OSC/MIDI/input workflows, shaders, and projection/media pipelines. | Verify license tier, export/runtime constraints, integration path, and whether web delivery is required. |
| 25 | Derivative forum | Motion/interactive community | Community forum | https://forum.derivative.ca/ | Useful source for current TouchDesigner workflows, device integration, shader questions, and production troubleshooting. | Treat as leads; reproduce networks locally and check version-specific operator behavior. |
| 26 | Codrops creative hub | Creative examples | Community tutorials/gallery | https://tympanus.net/codrops/hub/ | High-signal source for creative web experiments, WebGL effects, scroll scenes, shaders, transitions, and interaction patterns. | Check demo date, dependency versions, license, accessibility, and whether the technique is production-ready. |
| 27 | Awwwards Three.js collection | Showcase | Community gallery | https://www.awwwards.com/awwwards/collections/three-js/ | Pattern discovery source for polished 3D/web creative direction, scrolling scenes, interactive products, and portfolio techniques. | Use as inspiration only; independently identify stack, measure page weight, and validate accessibility/mobile fit. |
| 28 | CreativeApplications.Net | Creative technology | Editorial/community | https://www.creativeapplications.net/ | Strong discovery source for creative coding, installations, generative systems, motion graphics, and tool experiments. | Follow through to project docs/repos before recording implementation details. |
| 29 | OpenProcessing | Creative coding gallery | Community gallery | https://openprocessing.org/ | Large p5.js/Processing sketch discovery surface for generative art, interaction, particles, typography, and teaching examples. | Check sketch license/author, dependency/version assumptions, and simplify before production use. |
| 30 | YouTube: SimonDev | Tutorial channel | YouTube channel | https://www.youtube.com/@simondev758 | Practical tutorial source for Three.js, shaders, game-like interactions, terrain, particles, and browser 3D techniques. | Reproduce tutorials in a pinned project, check current package APIs, and avoid copying obsolete import patterns. |

## Recommended Prototype Shortlist

1. **Three.js + React Three Fiber + Drei**: default React-based 3D web prototype path.
2. **Babylon.js**: compare when a project needs engine-level features, GUI, WebXR, or a batteries-included scene toolkit.
3. **Rive**: best first candidate for designer-authored interactive vector motion.
4. **Spline**: fastest design-to-web 3D embed path, with careful performance and loading review.
5. **Blender glTF/GLB pipeline**: required baseline for imported 3D assets.
6. **p5.js + shader references**: fastest creative-coding sketch path before production hardening.
7. **WebGPU/WebGL fundamentals**: use for lower-level rendering experiments and debugging abstraction leaks.
8. **TouchDesigner**: research path for installation, real-time visuals, and non-web motion workflows.

## Manual Review Flags

- **Showcases and galleries**: Awwwards, Codrops, Shadertoy, OpenProcessing, and CreativeApplications.Net are discovery sources, not implementation authority.
- **Design-to-web embeds**: Spline and Rive assets need loading, fallback, licensing, and accessibility checks before product use.
- **3D asset pipelines**: Always validate GLB files with a neutral viewer before debugging runtime code.
- **Shaders and WebGPU**: Require browser compatibility checks, graceful fallback, and performance profiling.
- **Tutorial channels**: Rebuild examples in a clean pinned project before recording them as reusable patterns.

## Next Step

Use this map as the source pool for `SOR-38`. Start the first structured record batch with Three.js, React Three Fiber, Drei, Babylon.js, Rive, Spline, Blender glTF, MDN WebGPU, p5.js, TouchDesigner, Codrops, Shadertoy, and The Book of Shaders.
