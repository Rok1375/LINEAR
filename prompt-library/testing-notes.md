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
