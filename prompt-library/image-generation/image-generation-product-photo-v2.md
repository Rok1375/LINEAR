# Product Photo Generation Prompt v2

Title: Product Photo Generation Prompt v2
Category: image-generation
Use case: Product photo
Version: v2
Tags: image-generation, product-photo, ecommerce, studio, advertising, future-ready

## Prompt

Create a high-quality product image prompt for `{product_name}` for `{channel}` and `{usage_context}`. The image must make the product the unmistakable subject, preserve `{product_details}`, and use `{background_style}`, `{lighting_style}`, `{camera_angle}`, and `{brand_tone}` to support the buying context.

Specify composition, materials, shadows, scale cues, negative space, aspect ratio, and exclusions. If the output will be used for commerce, prioritize accurate product representation over stylized novelty.

## Input variables

- `product_name`: Name or description of the product.
- `channel`: Marketplace, website, social ad, email, packaging, or retail media.
- `background_style`: Studio, lifestyle, color backdrop, tabletop, or environment.
- `lighting_style`: Softbox, daylight, dramatic, clean commercial, or natural.
- `brand_tone`: Premium, playful, minimal, bold, warm, clinical, etc.
- `usage_context`: Where the image will appear.
- `product_details`: Materials, colors, shape, label notes, and must-show features.
- `camera_angle`: Front, three-quarter, top-down, macro, hero, or contextual.
- `aspect_ratio`: Required output ratio or placement.
- `compliance_notes`: Marketplace, legal, packaging, claims, or text restrictions.

## Future data requirements

- Track channel, placement, aspect ratio, click-through rate, conversion rate, return reasons, and product-detail accuracy issues.
- Store rejected outputs and artifact notes so future prompts can avoid recurring distortions.
- Capture which visual contexts perform best by product category and audience.

## Precision constraints

- Avoid distorted labels, unreadable text, extra product variants, incorrect materials, unrealistic reflections, and props that compete with the product.
- Do not add claims, badges, logos, certifications, or packaging text unless provided.
- Keep product scale believable and surface contact physically plausible.
- Include negative prompts or exclusions when the target image model supports them.

## Edge cases

- If label text must be exact, recommend adding a separate design or compositing pass instead of relying on image generation alone.
- If product details are sparse, ask for or assume only high-level shape, material, and color without inventing branding.
- If the image is for a marketplace main image, remove lifestyle props and prioritize clean product visibility.

## Fallback behavior

- If `camera_angle` is missing, default to a three-quarter hero view.
- If `aspect_ratio` is missing, default to a square crop for commerce and a 4:5 crop for social.
- If compliance notes are missing, use conservative ecommerce-safe styling with no unsupported claims or readable invented text.

## Expected output

A polished image-generation prompt that produces a clear product-first image with precise art direction, channel-aware constraints, edge-case handling, fallback defaults, and exclusions.

## Example input

`product_name`: matte black insulated water bottle
`channel`: ecommerce product page
`background_style`: clean light gray studio surface
`lighting_style`: soft commercial lighting
`brand_tone`: premium and minimal
`usage_context`: hero product image
`product_details`: black powder-coated finish, stainless cap, slim silhouette
`camera_angle`: three-quarter hero
`aspect_ratio`: 1:1
`compliance_notes`: no readable logo text or claims

## Example output

A square studio product prompt showing a matte black insulated water bottle in a three-quarter hero view on a light gray surface, soft commercial lighting, accurate powder-coated texture, visible stainless cap, subtle contact shadow, no props, no distorted text, no claims, and premium minimal styling.

## Version notes

v2 expands the product photo prompt with camera, aspect ratio, compliance, artifact prevention, commerce-specific fallbacks, and performance data requirements.
