# Product Photo Generation Prompt

Title: Product Photo Generation Prompt
Category: image-generation
Use case: Product photo
Version: v1
Tags: image-generation, product-photo, ecommerce, studio, advertising

## Prompt

Generate a high-quality product photo of `{product_name}` for `{channel}`. Show the product clearly as the main subject with `{background_style}` and `{lighting_style}`. The image should feel `{brand_tone}` and should be suitable for `{usage_context}`.

Preserve the product's defining details: `{product_details}`. Avoid clutter, distorted labels, extra objects that compete with the product, unrealistic reflections, and unreadable text.

## Input variables

- `product_name`: Name or description of the product.
- `channel`: Marketplace, website, social ad, email, or packaging use.
- `background_style`: Studio, lifestyle, color backdrop, tabletop, or environment.
- `lighting_style`: Softbox, daylight, dramatic, clean commercial, or natural.
- `brand_tone`: Premium, playful, minimal, bold, warm, clinical, etc.
- `usage_context`: Where the image will appear.
- `product_details`: Materials, colors, shape, label notes, and must-show features.

## Expected output

A polished image-generation prompt that produces a clear product-first image with practical art direction and constraints.

## Example input

`product_name`: matte black insulated water bottle  
`channel`: ecommerce product page  
`background_style`: clean light gray studio surface  
`lighting_style`: soft commercial lighting  
`brand_tone`: premium and minimal  
`usage_context`: hero product image  
`product_details`: black powder-coated finish, stainless cap, slim silhouette

## Example output

A clean studio product image of a matte black insulated water bottle centered on a light gray surface, soft shadow, premium minimal styling, stainless cap visible, no extra props, no distorted logo text.
