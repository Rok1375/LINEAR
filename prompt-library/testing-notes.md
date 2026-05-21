# Prompt Library Testing Notes

Review date: 2026-05-18

## Method

Each starter prompt was reviewed against its included example input for:

- Clear task framing.
- Useful input variables.
- Concrete expected output.
- Reusable example input and output.
- Distinct purpose compared with prompts in the same category.
- Tags that support search and filtering.
- Avoidance of vague, generic, or sensitive content.

The static workflow check also validates that every prompt file includes the required metadata and example sections.

## Results

| Prompt | Review result | Notes |
| --- | --- | --- |
| `website-design-landing-page-v1.md` | Pass | Clear conversion-oriented brief with concrete section expectations. |
| `website-design-dashboard-v1.md` | Pass | Distinct from landing/pricing prompts and appropriately focused on repeat-use product UI. |
| `website-design-pricing-page-v1.md` | Pass | Clear plan-comparison task with trust, FAQ, and recommendation guidance. |
| `image-generation-product-photo-v1.md` | Pass | Strong product-first constraints and practical art-direction inputs. |
| `image-generation-hero-background-v1.md` | Pass | Includes readability and composition constraints that reduce unusable hero imagery. |
| `image-generation-social-ad-v1.md` | Pass | Platform, subject, color, and message variables make the concept reusable. |
| `video-generation-ad-script-v1.md` | Pass | Clear scene, voiceover, on-screen text, and CTA expectations. |
| `video-generation-product-demo-v1.md` | Pass | Focuses on workflow value rather than exhaustive feature narration. |
| `video-generation-short-form-hook-v1.md` | Pass | Requires varied hook types and avoids clickbait. |
| `ai-agents-linear-triage-v1.md` | Pass | Useful for issue planning while warning against duplicate Linear work. |
| `ai-agents-skill-md-v1.md` | Pass | Clear skill authoring constraints and verification expectations. |
| `ai-agents-workflow-planner-v1.md` | Pass | Produces implementation-ready plans with assumptions, phases, tests, and acceptance criteria. |

## Improvements Applied

- Confirmed all 12 files follow the shared metadata/example schema.
- Confirmed the starter prompts are distinct within each category.
- Added static validation for required sections and multi-tag coverage.
- Kept wording changes minimal because the existing prompt examples were already concrete and reusable.

## Follow-Up

When live model/tool testing is available, run each prompt with its example input and save any output-quality findings as a new versioned prompt file.

## v2 Enhancement Review

Review date: 2026-05-19

### Method

The starter library was expanded from 12 historical `v1` prompts to 12 active `v2` prompts. It was later expanded to 20 active `v2` prompts with additional web and video generation coverage. Each `v2` prompt was reviewed for:

- Traceable title, file name, and `Version: v2` labeling.
- Expanded context and domain-specific detail.
- Future data requirements for later optimization.
- Precision constraints that reduce vague, unsupported, or unsafe output.
- Edge cases and fallback behavior for incomplete inputs.
- Continued fit with the existing category and metadata schema.

### Results

| Prompt | Review result | Notes |
| --- | --- | --- |
| `website-design-landing-page-v2.md` | Pass | Adds conversion risks, differentiators, analytics goal, proof safeguards, and accessibility constraints. |
| `website-design-dashboard-v2.md` | Pass | Adds freshness, permissions, decision context, alert handling, and data-quality states. |
| `website-design-pricing-page-v2.md` | Pass | Adds pricing model, buyer questions, upgrade triggers, billing safeguards, and plan fallback logic. |
| `website-design-3d-product-hero-v2.md` | Pass | Adds React Three Fiber, Three.js, Drei, asset approval, performance, and fallback guidance for 3D product heroes. |
| `website-design-motion-landing-page-v2.md` | Pass | Adds GSAP/Motion responsibilities, reduced-motion policy, scroll safety, and validation gates. |
| `website-design-full-site-system-v2.md` | Pass | Adds information architecture, reusable components, page roles, state coverage, and technical-constraint safeguards. |
| `website-design-interactive-portfolio-editorial-v2.md` | Pass | Adds portfolio/editorial narrative, asset inspection, interaction fallback, and performance guidance. |
| `image-generation-product-photo-v2.md` | Pass | Adds camera angle, aspect ratio, compliance notes, artifact prevention, and commerce-safe fallbacks. |
| `image-generation-hero-background-v2.md` | Pass | Adds safe-area metadata, responsive crop variants, brand colors, and contrast constraints. |
| `image-generation-social-ad-v2.md` | Pass | Adds platform compliance, overlay copy, creative angle, small-size readability, and paid-social data needs. |
| `video-generation-ad-script-v2.md` | Pass | Adds objection handling, proof constraints, production limits, and test-variant guidance. |
| `video-generation-product-demo-v2.md` | Pass | Adds starting/success states, viewer context, accessibility, and cutdown guidance. |
| `video-generation-short-form-hook-v2.md` | Pass | Adds content-promise alignment, proof limits, risk notes, safer fallbacks, and retention signals. |
| `video-generation-image-to-video-brief-v2.md` | Pass | Adds source-image rights checks, identity preservation, provider-neutral fields, and output review guidance. |
| `video-generation-product-launch-storyboard-v2.md` | Pass | Adds launch structure, asset needs, proof safeguards, captions, platform variants, and compliance fallbacks. |
| `video-generation-ugc-ad-v2.md` | Pass | Adds creator persona, disclosure, proof limits, mobile text readability, and platform-specific tone handling. |
| `video-generation-provider-comparison-v2.md` | Pass | Adds Runway, Luma, Veo/Vertex, Replicate, fal, and ComfyUI readiness gates with blocked/test-later handling. |
| `ai-agents-linear-triage-v2.md` | Pass | Adds stakeholders, delivery risk, definition of done, deduplication rules, and Linear issue-health signals. |
| `ai-agents-skill-md-v2.md` | Pass | Adds tooling context, failure modes, output expectations, trigger boundaries, and verification defaults. |
| `ai-agents-workflow-planner-v2.md` | Pass | Adds interfaces, data requirements, rollout context, risk tolerance, and fallback planning behavior. |

### Improvements Applied

- Preserved all `v1` files as historical baselines.
- Added 20 `v2` files as the active starter prompt set.
- Updated app seed data to point at `v2` source files.
- Expanded static validation so active prompts require future-ready sections.
- Added web/video prompts for R3F/Three/Drei heroes, GSAP/Motion landing pages, full-site systems, interactive editorial pages, image-to-video briefs, launch storyboards, UGC ads, and provider comparison.

### Follow-Up

Run live prompt-output tests against one realistic example per category and record any model-specific behavior before creating future `v3` versions.
