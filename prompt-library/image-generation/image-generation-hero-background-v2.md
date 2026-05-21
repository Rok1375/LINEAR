# Hero Background Image Prompt v2

Title: Hero Background Image Prompt v2
Category: image-generation
Use case: Hero background
Version: v2
Tags: image-generation, hero-background, website, brand, visual-direction, future-ready

## Prompt

Create a website hero background prompt for `{brand_or_product}` that supports `{hero_message}` for `{target_audience}`. The image should feel `{mood}`, feature `{visual_subject}`, fit `{aspect_ratio}`, and preserve a readable safe area at `{text_area}` for foreground copy and calls to action.

Define composition, depth, contrast, color palette, focal area, negative space, responsive crop considerations, and exclusions. Prefer specific scenes or product-relevant metaphors over generic gradients or decorative abstraction.

## Input variables

- `brand_or_product`: Brand, product, or page subject.
- `hero_message`: Main message the hero will support.
- `target_audience`: Intended visitor.
- `mood`: Calm, energetic, premium, technical, playful, editorial, etc.
- `text_area`: Left, center, right, top, or bottom safe area for overlay text.
- `visual_subject`: Product, place, person, scene, or metaphor.
- `aspect_ratio`: Desired output ratio.
- `brand_colors`: Required or preferred color palette.
- `foreground_content`: Headline, CTA, or UI elements that must remain readable.
- `crop_variants`: Desktop, tablet, mobile, or social crops needed.

## Future data requirements

- Track hero engagement, CTA clicks, readability issues, crop failures, contrast failures, and audience-specific performance.
- Store safe-area metadata so future designs can reuse successful composition patterns.
- Capture which subject types improve comprehension: product, user scene, interface, metaphor, or environment.

## Precision constraints

- Maintain enough negative space and contrast for foreground content.
- Avoid busy patterns, low-contrast text zones, irrelevant stock-photo scenes, distorted UI, and generic abstract gradients.
- Do not include readable text inside the generated image unless explicitly requested.
- Define responsive crop priorities so important visual elements are not cut off on mobile.

## Edge cases

- If the hero has long copy, expand the safe area and reduce background detail behind text.
- If the product is intangible, use a concrete workflow scene, interface metaphor, or audience environment.
- If brand colors reduce contrast, propose a tint, overlay, or alternate palette that preserves accessibility.

## Fallback behavior

- If `brand_colors` are missing, choose a restrained palette that matches `{mood}` and does not fight foreground text.
- If `crop_variants` are missing, design for 16:9 desktop with a center-safe mobile crop.
- If the visual subject is vague, select one product-relevant subject and label it as an assumption.

## Expected output

A visual prompt for a hero background with composition guidance, safe text area, responsive crop notes, subject rationale, constraints, edge-case handling, and fallback behavior.

## Example input

`brand_or_product`: AI writing workspace
`hero_message`: organize every reusable prompt in one place
`target_audience`: small marketing teams
`mood`: clean, focused, modern
`text_area`: left side
`visual_subject`: organized digital workspace with prompt cards on a monitor
`aspect_ratio`: 16:9
`brand_colors`: slate, soft blue, warm white
`foreground_content`: headline, subcopy, primary CTA
`crop_variants`: desktop and mobile

## Example output

A clean 16:9 hero background prompt showing a modern desk with a monitor displaying organized prompt cards, soft daylight, slate and warm-white palette, visual detail weighted to the right, left-side negative space for headline and CTA, center-safe crop for mobile, no readable generated text, no busy patterns.

## Version notes

v2 expands the hero background prompt with safe-area metadata, responsive crop planning, contrast constraints, visual-subject fallback logic, and engagement data requirements.
