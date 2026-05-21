# 3D Product Hero Page Brief v2

Title: 3D Product Hero Page Brief v2
Category: website-design
Use case: 3D product hero
Version: v2
Tags: website-design, 3d, react-three-fiber, three-js, product-hero, future-ready

## Prompt

Create a production-quality 3D product hero brief for `{product_name}` using React Three Fiber, Three.js, and small Drei helpers. The hero should introduce `{product_type}` to `{target_audience}`, make `{primary_action}` obvious, and use `{product_visual}` as the inspectable visual focus without turning the page into a heavy demo.

Use `{brand_tone}`, `{interaction_goal}`, `{asset_status}`, `{performance_budget}`, and `{fallback_visual}` to define the scene, camera, lighting, interaction model, copy hierarchy, responsive behavior, loading state, reduced-motion fallback, and implementation constraints. Prefer lightweight procedural geometry until licensed GLB/GLTF assets are approved.

## Input variables

- `product_name`: Name of the product, object, or offer.
- `product_type`: Short description of what the product is.
- `target_audience`: Primary visitor segment.
- `primary_action`: Main CTA for the hero.
- `product_visual`: Object, product state, or metaphor to render.
- `brand_tone`: Desired visual and copy tone.
- `interaction_goal`: Pointer, scroll, hover, or static interaction purpose.
- `asset_status`: Whether a licensed 3D asset exists, is pending, or is unavailable.
- `performance_budget`: Target device, load, and frame-rate constraints.
- `fallback_visual`: Non-3D image or layout fallback.

## Future data requirements

- Track device class, canvas load time, interaction rate, CTA click rate, render errors, and reduced-motion usage.
- Preserve asset source, license, polygon count, texture size, and GLB validation status for future prompt versions.
- Capture whether users engage with the 3D scene or skip directly to content below the fold.

## Precision constraints

- Do not assume a licensed GLB asset exists unless `asset_status` says it does.
- Keep Drei usage limited to helpers that reduce complexity without hiding performance risk.
- Define accessible fallback content and do not rely on canvas content as the only source of product information.
- Include mobile containment, keyboard-safe page flow, reduced-motion behavior, and text contrast requirements.

## Edge cases

- If no 3D asset is approved, use procedural geometry or a static product-relevant visual direction.
- If the product is abstract software, represent workflow states, data objects, or product metaphors rather than fake hardware.
- If performance budget is strict, avoid postprocessing, large environment maps, and continuous animation.

## Fallback behavior

- If required inputs are incomplete, state assumptions and produce a conservative static-first hero with optional 3D enhancement.
- If interaction intent is unclear, default to subtle pointer-reactive motion that never blocks scroll.
- If the asset pipeline is not ready, include a GLB approval checklist instead of inventing asset details.

## Expected output

A structured 3D hero brief with page goal, hero copy, scene concept, R3F/Three/Drei implementation notes, asset requirements, responsive behavior, loading and fallback states, accessibility constraints, performance budget, edge cases, and measurement recommendations.

## Example input

`product_name`: Atlas Desk
`product_type`: AI workspace for research teams
`target_audience`: product strategists comparing market signals
`primary_action`: book a workflow demo
`product_visual`: layered research cards orbiting a central decision map
`brand_tone`: precise, calm, premium
`interaction_goal`: subtle pointer parallax that reveals depth
`asset_status`: no approved GLB asset yet
`performance_budget`: fast load on mid-range laptops and graceful mobile fallback
`fallback_visual`: high-contrast product screenshot collage

## Example output

A calm 3D hero plan with a left-aligned value proposition, a procedural card-and-map scene rendered in R3F, subtle pointer depth, static mobile fallback, no postprocessing, loading skeleton, descriptive copy outside the canvas, and CTA tracking tied to hero engagement.

## Version notes

v2 adds 3D-specific implementation guidance, asset licensing constraints, performance safeguards, reduced-motion requirements, and fallback behavior for React Three Fiber product heroes.
