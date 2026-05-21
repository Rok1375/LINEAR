# Prototype 2 3D Baseline Report

**Prototype name:** Prototype 2 3D Baseline
**Tools used:** React, Three.js, React Three Fiber, React Three Drei, Playwright, Next.js (as base framework environment)
**Commands run:**
- `npm install three @react-three/fiber @react-three/drei`
- `npm install --no-save @playwright/test`
- `npx playwright install`
- `npm run build`
- `npm run start`
- `npx playwright test tests/prototype-3d.spec.js`

**What worked:**
- Successfully integrated React Three Fiber within the React environment.
- Procedural Icosahedron geometry rendered smoothly with physical material.
- Subtle mouse-reactive motion implemented without causing jitter.
- The 3D scene responds to the full viewport gracefully and includes CSS fallback for reduced motion/mobile screens.
- Playwright tests captured screenshots successfully across desktop, tablet, and mobile breakpoints without detecting any console errors.

**What failed or needs review:**
- Initially ran into package manager module resolution conflicts between PNPM and NPM when installing Playwright due to the workspace's pre-existing configuration, which required `npm install --no-save` for testing.
- The prototype is currently using a procedural geometry; testing with an actual GLTF asset remains a follow-up action to benchmark load times.

**Output quality rating:** 4/5
**Implementation difficulty:** 2/5
**Integration friction:** 3/5 (due to local package manager quirks)

**Performance notes:**
- Using procedural geometry keeps the performance high and payload size low.
- Canvas doesn't block scroll and behaves well inside absolute positioning.
- No heavy postprocessing filters were added, keeping the framerate optimal.

**Asset-size notes:**
- Zero external 3D assets used so far. Size is only the weight of the three.js/r3f libraries.

**Cost risk:**
- Low. Uses open-source libraries.

**Privacy/security risk:**
- Low. No external requests are made.

**Recommendation:** `keep`

**Next step:**
- Proceed with optimizing and testing an actual `.glb` model to measure realistic load impact and refine the material properties for the final luxury aesthetic.
