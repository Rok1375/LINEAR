# Interactive Portfolio Editorial Brief v2

Title: Interactive Portfolio Editorial Brief v2
Category: website-design
Use case: Interactive portfolio or editorial page
Version: v2
Tags: website-design, portfolio, editorial, scroll-narrative, interactive, future-ready

## Prompt

Create an interactive portfolio or editorial page brief for `{subject_name}` that tells `{story_arc}` for `{audience}`. The page should use visual assets, motion, and scroll rhythm to make the work inspectable and memorable while preserving readable content and fast fallback behavior.

Use `{featured_work}`, `{visual_assets}`, `{interaction_style}`, `{brand_tone}`, `{primary_action}`, `{performance_budget}`, and `{accessibility_constraints}` to define the narrative sequence, asset treatment, motion rules, responsive layout, fallback states, proof handling, and measurement recommendations.

## Input variables

- `subject_name`: Person, studio, product, campaign, or topic.
- `story_arc`: Narrative arc or editorial thesis.
- `audience`: Intended visitor.
- `featured_work`: Projects, examples, media, or milestones to feature.
- `visual_assets`: Existing images, videos, 3D assets, sketches, or screenshots.
- `interaction_style`: Scroll, hover, carousel, timeline, spatial, or static treatment.
- `brand_tone`: Desired editorial voice and visual tone.
- `primary_action`: Contact, inquiry, share, subscribe, or continue-reading action.
- `performance_budget`: Device and loading constraints.
- `accessibility_constraints`: Motion, contrast, keyboard, captions, or semantic requirements.

## Future data requirements

- Track asset load time, scroll depth, featured-work engagement, CTA clicks, media play rate, and accessibility QA notes.
- Preserve source, license, dimensions, crop, captions, and alt text for every major asset.
- Capture which sections are skipped or revisited so later prompts can improve narrative pacing.

## Precision constraints

- Primary visuals must reveal the actual work, subject, or state being discussed, not generic atmosphere.
- Avoid hiding key information inside hover-only, canvas-only, or animation-only interactions.
- Include captions, alt text direction, keyboard reachability, reduced-motion behavior, and mobile media fallbacks.
- Keep decorative motion secondary to story comprehension and asset inspection.

## Edge cases

- If visual assets are missing, define an asset request list and a safe placeholder strategy.
- If the subject has mixed work types, group by story role rather than chronology alone.
- If performance budget is tight, prefer static editorial composition over heavy scroll effects.

## Fallback behavior

- If interaction style is unclear, default to a readable scroll narrative with optional hover/tap enhancements.
- If primary action is missing, use a context-appropriate contact or next-project CTA.
- If media rights are unclear, mark assets as pending review and avoid publication-ready claims.

## Expected output

An editorial page brief with story thesis, section sequence, asset plan, interaction and motion rules, responsive layout, accessibility requirements, performance constraints, fallback behavior, edge cases, and measurement recommendations.

## Example input

`subject_name`: Nova Studio
`story_arc`: how a small team turns technical prototypes into launch-ready brand moments
`audience`: founders hiring a creative technology studio
`featured_work`: three launch sites, one 3D prototype, one generated media campaign
`visual_assets`: screenshots, short clips, process notes
`interaction_style`: scroll narrative with motion accents
`brand_tone`: cinematic, precise, confident
`primary_action`: request a project fit call
`performance_budget`: strong desktop, restrained mobile
`accessibility_constraints`: reduced-motion support, captions, keyboard-safe navigation

## Example output

A portfolio brief with a strong first-viewport signal, work-led sections, captioned media, scroll reveals that never obscure reading, mobile static fallbacks, a performance budget for clips and images, and a final project-fit CTA.

## Version notes

v2 adds editorial structure, asset inspection requirements, interaction fallback rules, accessibility constraints, and performance guidance for portfolio and narrative web pages.
