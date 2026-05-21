# 3D Asset Pipeline

Linear: follow-up guidance from the 3D prototype audit
Reviewed: 2026-05-20

## Purpose

This document defines the minimum safe path for moving from procedural React Three Fiber prototypes to imported GLB/GLTF assets. It protects the app from unlicensed assets, oversized files, broken materials, and inaccessible canvas-only experiences.

## Current Baseline

The workspace has an isolated `/prototype/3d` route using React Three Fiber, Three.js primitives, and small Drei helpers. No GLB/GLTF asset has been approved or imported yet. Keep it that way until the checks below pass.

Do not move imported GLB assets into production prompt-library screens until asset source, license, optimization, validation, fallback, and performance notes are documented.

## Approved Asset Checklist

Before adding a GLB/GLTF file, record:

- Source URL, creator, license, and allowed usage.
- Whether the asset includes trademarks, recognizable products, people, or private/client material.
- Polygon count, texture count, texture dimensions, and file size.
- Animation clips, cameras, lights, and unsupported extensions.
- Optimization steps, such as mesh simplification, texture resizing, compression, or unused-node removal.
- Validation result from a neutral viewer such as the Khronos glTF Sample Viewer.
- Runtime fallback for mobile, reduced motion, render failure, or slow connection.

## Implementation Rules

- Keep 3D routes isolated until performance and accessibility have been reviewed.
- Prefer procedural geometry for early prompts and prototypes.
- Load imported assets lazily and show a stable loading state.
- Do not make the canvas the only place where product meaning appears.
- Avoid large environment maps, heavy postprocessing, and continuous animation unless there is a measurable reason.
- Keep Drei helpers small and purposeful; do not import staging helpers casually.
- Verify mobile layout, text contrast, and reduced-motion behavior before promoting a 3D treatment.

## Runtime Fallbacks

Every 3D experience should define:

- Static image or screenshot fallback.
- Short explanatory copy outside the canvas.
- Reduced-motion state that stops nonessential animation.
- Error state if the model or renderer fails.
- Mobile containment so the canvas does not push key content out of reach.

## Review Steps

1. Confirm the asset license and usage rights.
2. Validate the GLB/GLTF outside the app.
3. Optimize size and textures before committing.
4. Add the asset to an isolated prototype route first.
5. Run static checks, TypeScript, ESLint, production build, and browser/manual visual QA.
6. Record result notes in `prototype-results/` before any production UI adoption.

## Fallback Steps

If an asset is blocked by license, size, missing textures, or poor runtime performance:

- use procedural geometry
- use a generated/static image with documented rights
- reduce the scene to CSS or image composition
- keep the item as `test-later` until asset quality and licensing are solved
