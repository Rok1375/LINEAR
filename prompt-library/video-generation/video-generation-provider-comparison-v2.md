# Generative Video Provider Comparison Prompt v2

Title: Generative Video Provider Comparison Prompt v2
Category: video-generation
Use case: Generative video provider comparison
Version: v2
Tags: video-generation, provider-comparison, runway, luma, comfyui, future-ready

## Prompt

Compare generative video provider options for `{project_name}` and recommend the safest test path for `{video_goal}`. Evaluate Runway, Luma, Veo or Vertex, Replicate, fal, and local ComfyUI only where access, rights, inputs, cost, and workflow readiness can be verified.

Use `{input_assets}`, `{desired_output}`, `{duration}`, `{aspect_ratio}`, `{quality_bar}`, `{privacy_constraints}`, `{budget_limit}`, `{timeline}`, and `{local_setup_status}` to produce a comparison table, blocked/test-later notes, recommended prototype path, metadata to capture, edge cases, and fallback behavior.

## Input variables

- `project_name`: Campaign, product, or prototype name.
- `video_goal`: What the generated video must accomplish.
- `input_assets`: Text prompt, source image, product image, footage, or reference assets.
- `desired_output`: Style, motion, fidelity, and delivery needs.
- `duration`: Required length.
- `aspect_ratio`: Required crop.
- `quality_bar`: What counts as acceptable output.
- `privacy_constraints`: Client, private, branded, or person-identifiable limits.
- `budget_limit`: Maximum spend or test budget.
- `timeline`: How quickly a result is needed.
- `local_setup_status`: ComfyUI service, model files, workflow graph, and node readiness.

## Future data requirements

- Track provider, model, prompt, seed or task ID, input assets, cost, queue time, output URL expiry, license notes, artifact ratings, and approval status.
- Preserve blocked reasons such as missing token, unavailable local service, unapproved model license, or unknown data retention.
- Capture provider-specific strengths and failures for future routing.

## Precision constraints

- Mark ComfyUI as blocked or test-later unless local service, model files, workflow graph, and custom-node review are ready.
- Mark Replicate or fal as blocked or test-later unless token, selected model page, schema, pricing, and license are reviewed.
- Do not upload private or client assets to hosted providers without explicit privacy approval.
- Prefer official docs and provider model pages over social posts or community examples.

## Edge cases

- If all providers are blocked, recommend a storyboard, static motion mock, or local setup checklist instead of forcing generation.
- If budget is low, prefer one hosted smoke test or a no-generation planning brief.
- If output needs product accuracy, prioritize identity preservation and review over stylized novelty.

## Fallback behavior

- If provider access is unknown, produce a decision matrix and verification checklist before any generation.
- If privacy constraints are strict, default to local-only or synthetic test assets.
- If timeline is urgent, recommend the lowest-friction hosted path that satisfies rights and privacy limits.

## Expected output

A provider comparison report with options, readiness status, blockers, cost and rights considerations, recommended prototype path, fallback steps, metadata fields, edge cases, and acceptance criteria for a first generation test.

## Example input

`project_name`: Atlas Desk hero loop
`video_goal`: create a six-second product-style background loop
`input_assets`: generated internal hero image, no client assets
`desired_output`: subtle card motion, premium lighting, stable safe area
`duration`: 6 seconds
`aspect_ratio`: 16:9
`quality_bar`: usable as a website background after review
`privacy_constraints`: internal generated assets only
`budget_limit`: low smoke test
`timeline`: same day
`local_setup_status`: ComfyUI not running, no workflow graph

## Example output

A comparison that recommends one hosted smoke test, marks ComfyUI as test-later until local service and workflow are ready, marks provider-token gaps clearly, includes metadata to save, and proposes a static fallback if output quality or rights review fails.

## Version notes

v2 adds provider-readiness gates, blocked/test-later handling for ComfyUI and hosted tokens, privacy constraints, cost metadata, and fallback steps for generative video provider selection.
