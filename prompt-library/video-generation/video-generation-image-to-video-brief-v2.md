# Image-To-Video Production Brief v2

Title: Image-To-Video Production Brief v2
Category: video-generation
Use case: Image-to-video production brief
Version: v2
Tags: video-generation, image-to-video, ai-video, production-brief, rights-review, future-ready

## Prompt

Create an AI image-to-video production brief for `{project_name}` using `{source_image_description}` as the visual starting point. The video should communicate `{message}` to `{target_audience}` in `{duration}` for `{platform}` while preserving source-image identity, composition, and rights constraints.

Use `{motion_direction}`, `{camera_direction}`, `{aspect_ratio}`, `{brand_tone}`, `{do_not_change}`, `{rights_status}`, and `{production_constraints}` to define the shot plan, prompt, negative prompt guidance, provider notes, review checklist, accessibility requirements, edge cases, and fallback behavior.

## Input variables

- `project_name`: Campaign, product, or video name.
- `source_image_description`: Description of the image being animated.
- `message`: Core idea or offer.
- `target_audience`: Intended viewer.
- `duration`: Target length.
- `platform`: Delivery surface.
- `motion_direction`: Subject, environment, or camera movement.
- `camera_direction`: Push, pan, orbit, locked-off, or handheld feel.
- `aspect_ratio`: Required crop.
- `brand_tone`: Visual mood and pacing.
- `do_not_change`: Elements that must remain stable.
- `rights_status`: Ownership, model release, brand, or license status.
- `production_constraints`: Provider, budget, safety, or asset limits.

## Future data requirements

- Track provider, model, prompt, seed or generation ID, cost, render duration, artifact notes, rights review, and approval status.
- Preserve source image path, license, release status, and whether the output changed protected or branded elements.
- Capture viewer retention, hook performance, and revision reasons when the video is used in a campaign.

## Precision constraints

- Do not animate private, client, branded, or person-identifiable imagery unless rights status is approved.
- Preserve product shape, labels, faces, and key composition when `do_not_change` requires it.
- Include accessibility notes for captions, text overlays, flashing, and motion sensitivity.
- Avoid invented logos, unreadable generated text, distorted anatomy, and unsupported product claims.

## Edge cases

- If rights status is unknown, produce a test-only brief and require approval before publication.
- If source image quality is low, recommend cleanup, upscaling, or a new image before generation.
- If platform constraints conflict with aspect ratio or duration, prioritize platform delivery requirements and note tradeoffs.

## Fallback behavior

- If motion direction is missing, default to subtle camera movement and environmental motion.
- If provider is unknown, keep the brief provider-neutral and include fields needed by Runway, Luma, Veo, Replicate, fal, or ComfyUI.
- If the image cannot be safely animated, propose a storyboard or static carousel alternative.

## Expected output

A production-ready image-to-video brief with source-image summary, rights status, shot and motion direction, provider-neutral generation prompt, negative constraints, accessibility and platform notes, review checklist, edge cases, fallback behavior, and metadata to preserve.

## Example input

`project_name`: Atlas Desk launch teaser
`source_image_description`: dark product hero image with layered research cards and a left-side text safe area
`message`: research teams can turn scattered signals into decisions
`target_audience`: product leaders
`duration`: 6 seconds
`platform`: LinkedIn and website hero loop
`motion_direction`: cards drift into alignment while background light shifts
`camera_direction`: slow push-in
`aspect_ratio`: 16:9 and 1:1 variants
`brand_tone`: precise, premium, calm
`do_not_change`: card shapes, empty text safe area, brand colors
`rights_status`: generated test image, internal review only
`production_constraints`: no readable generated text, low motion intensity

## Example output

A provider-neutral brief for a six-second loop with subtle push-in, drifting cards, stable safe area, no generated text, rights marked internal-review only, captions/alt-text notes, and review checks for identity drift and artifacting.

## Version notes

v2 adds source-image rights checks, provider-neutral image-to-video fields, identity preservation constraints, accessibility requirements, and publication fallback behavior.
