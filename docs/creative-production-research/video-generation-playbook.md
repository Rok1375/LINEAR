# Video Generation Playbook

Linear: follow-up guidance from the AI media audit
Reviewed: 2026-05-20

## Purpose

This playbook defines how to choose, test, and review AI video generation paths for this workspace. It keeps hosted and local experiments repeatable, rights-safe, and honest about blockers.

## Provider Readiness

| Path | Current status | Use when | Required before generation |
|---|---|---|---|
| Runway | Research source only | Fast hosted text/image-to-video tests | API access, selected model, cost, input rules, retention notes |
| Luma | Research source only | Hosted video experiments and image-to-video tests | API access, model ID, prompt fields, callback/output handling |
| Veo/Vertex | Research source only | Enterprise Google image/video workflow | Project access, model availability, region, IAM, watermark/safety notes |
| Replicate | Blocked/test-later | Comparing hosted model cards quickly | `REPLICATE_API_TOKEN`, selected model page, schema, pricing, license |
| fal | Research source only | Fast hosted model comparison | Token, exact model slug, queue behavior, schema, file-retention notes |
| ComfyUI | Blocked/test-later | Local workflow automation and model control | Running local service, model files, workflow JSON, node review, license notes |
| OpenAI Images API | Completed for image baseline | Generating source imagery or visual tests | API key, model metadata, rights and safety review |

Treat any unavailable token, local service, model file, workflow graph, license, or privacy approval as blocked or test-later. Do not work around those blockers by uploading private assets to another provider.

## Test Workflow

1. Define the video goal, input assets, platform, duration, aspect ratio, quality bar, budget, and privacy limits.
2. Choose one provider for the first smoke test.
3. Save provider, model, prompt, seed or task ID, cost estimate, queue time, output path, and review notes.
4. Review output for identity drift, text artifacts, claim risk, motion intensity, accessibility, and brand fit.
5. Decide keep, revise, test-later, or drop.
6. Store useful reports in `prototype-results/` and reusable prompts in `prompt-library/video-generation/`.

## Safety And Rights Rules

- Do not upload private, client, branded, or person-identifiable assets without explicit approval.
- Do not publish generated video without model/provider, rights, and usage review.
- Avoid readable generated text unless the provider supports it reliably and it is reviewed.
- Avoid unsupported product claims, fake testimonials, false scarcity, regulated outcomes, and sensitive targeting.
- Include captions or caption guidance for any spoken or text-dependent video.
- Include motion-sensitivity review for fast flashes, camera shakes, and intense loops.

## Output Review Checklist

- Source identity preserved where required.
- Product shape, labels, faces, and brand colors remain stable.
- No invented logos, text, claims, or credentials appear.
- Motion supports the message and does not obscure inspection.
- Aspect ratio and crop match target platform.
- Captions, alt text, or transcript notes are ready.
- Metadata is saved with enough detail to reproduce or compare the test.

## Fallback Steps

If generation is blocked:

- produce a storyboard instead of a rendered video
- create a static hero image or carousel
- run a no-private-assets hosted smoke test
- set up ComfyUI deliberately with reviewed nodes and model licenses
- defer Replicate or fal until token, model page, schema, pricing, and license are reviewed

## Prompt Expansion Priorities

- Image-to-video production brief.
- Product launch storyboard.
- UGC-style ad concept.
- Generative video provider comparison.
- Future v3 prompts should be based on live output tests, not assumptions.
