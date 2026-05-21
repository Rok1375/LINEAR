# Social Ad Image Prompt v2

Title: Social Ad Image Prompt v2
Category: image-generation
Use case: Social ad
Version: v2
Tags: image-generation, social-ad, paid-social, creative, campaign, future-ready

## Prompt

Create a platform-aware social ad image prompt for `{brand_name}` promoting `{offer}` to `{target_audience}` on `{platform}`. The image should make `{core_message}` visible quickly, feature `{main_subject}`, use `{visual_style}` and `{color_direction}`, and leave space for `{overlay_copy}` when needed.

Define the creative angle, composition, subject treatment, visual hierarchy, crop, motion-readiness if relevant, and exclusions. Prioritize clarity at small sizes and compliance with paid-social creative review expectations.

## Input variables

- `brand_name`: Brand or product name.
- `offer`: Product, discount, launch, or campaign offer.
- `target_audience`: Intended audience.
- `platform`: Instagram, TikTok, LinkedIn, X, Pinterest, etc.
- `visual_style`: Photo, editorial, CGI, flat lay, lifestyle, or collage.
- `color_direction`: Brand colors or mood.
- `main_subject`: Product, person, scene, or object to focus on.
- `core_message`: Main idea the ad should communicate.
- `overlay_copy`: Optional short text that may be placed over the image.
- `creative_angle`: Problem, aspiration, comparison, proof, novelty, or urgency.
- `compliance_notes`: Restricted claims, regulated topics, brand safety, or platform constraints.

## Future data requirements

- Track platform, placement, creative angle, audience segment, thumb-stop rate, click-through rate, conversion rate, fatigue, and rejection reasons.
- Store winning and losing creative attributes so future prompts can adapt by channel.
- Capture overlay readability and small-size comprehension feedback.

## Precision constraints

- Keep the composition readable at mobile feed size.
- Avoid unsupported claims, before/after exaggeration, misleading scarcity, and invented badges.
- Do not include more than one dominant message.
- If overlay copy is needed, reserve clean negative space instead of generating tiny unreadable text.

## Edge cases

- If platform rules may reject the creative, choose a safer benefit-led concept and avoid sensitive personalization.
- If the audience is broad, create a single clear use case rather than trying to speak to everyone.
- If the offer is abstract, use a concrete visual metaphor tied to the audience's daily context.

## Fallback behavior

- If `creative_angle` is missing, default to a benefit-led product-in-context concept.
- If `overlay_copy` is missing, design with optional copy space but no generated text.
- If compliance notes are missing, avoid claims, medical/financial guarantees, and artificial urgency.

## Expected output

A concise image-generation prompt with platform-aware layout, subject treatment, creative rationale, constraints, edge cases, fallback defaults, and data requirements.

## Example input

`brand_name`: BrightDesk
`offer`: launch of an ergonomic desk lamp
`target_audience`: remote workers
`platform`: Instagram feed
`visual_style`: lifestyle product photo
`color_direction`: warm neutrals with a soft yellow accent
`main_subject`: desk lamp on a tidy home office desk
`core_message`: better focus during late work sessions
`overlay_copy`: Focus after sunset
`creative_angle`: aspiration
`compliance_notes`: no medical claims about eye strain

## Example output

A warm Instagram-feed image prompt showing a modern desk lamp illuminating a tidy home office at dusk, soft yellow accent glow, remote-work context, clean upper-left negative space for "Focus after sunset," no medical claims, no unreadable generated text, and a calm aspirational tone.

## Version notes

v2 expands the social ad prompt with platform, compliance, overlay, creative-angle, performance-data, and fallback guidance for safer paid-social generation.
