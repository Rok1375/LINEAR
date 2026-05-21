# Landing Page Design Brief v2

Title: Landing Page Design Brief v2
Category: website-design
Use case: Landing page
Version: v2
Tags: website-design, landing-page, conversion, responsive, product-marketing, future-ready

## Prompt

Create a production-quality landing page brief for `{product_name}`, a `{product_type}` serving `{target_audience}`. Optimize the page for `{primary_action}` while making the offer, audience fit, proof, and next step obvious within the first viewport.

Use `{brand_tone}`, `{key_benefits}`, `{proof_points}`, `{differentiators}`, and `{conversion_risks}` to shape the narrative. Produce a goal-oriented page plan with hero copy, section sequence, visual direction, interaction notes, accessibility requirements, responsive behavior, and measurement recommendations. Make the page specific enough for a designer or developer to implement without inventing core positioning.

## Input variables

- `product_name`: Name of the product or offer.
- `product_type`: Short description of what it is.
- `target_audience`: Primary visitor segment and buying context.
- `primary_action`: Main action visitors should take.
- `brand_tone`: Desired voice and visual tone.
- `key_benefits`: 3 to 5 product benefits.
- `proof_points`: Testimonials, metrics, logos, case studies, or credibility signals.
- `differentiators`: What makes the offer meaningfully different.
- `conversion_risks`: Objections, trust gaps, or reasons visitors may hesitate.
- `analytics_goal`: Primary metric to evaluate page success.

## Future data requirements

- Track audience segment, acquisition channel, offer maturity, proof type, CTA click rate, scroll depth, and conversion outcome.
- Capture which sections drive engagement so future versions can prioritize proof, pricing, workflow, or FAQ content based on evidence.
- Preserve assumptions about positioning, objections, and missing proof so follow-up research can close the gaps.

## Precision constraints

- Avoid generic startup claims, inflated promises, and vague adjectives without concrete support.
- Include desktop and mobile layout guidance, semantic heading structure, keyboard-accessible interactions, and contrast-safe visual direction.
- Tie every section to a job: clarify, prove, explain, compare, reassure, or convert.
- Do not invent fake testimonials, customer logos, security claims, or pricing details.

## Edge cases

- If `proof_points` are weak or missing, use trust-building alternatives such as process transparency, founder credibility, screenshots, demos, or risk reversal.
- If the audience has multiple segments, prioritize the highest-intent segment and note secondary messaging variants.
- If the product is early-stage, avoid over-polished enterprise positioning and emphasize clarity, use cases, and learning signals.

## Fallback behavior

- If required inputs are incomplete, state the missing fields, make conservative assumptions, and mark assumed sections clearly.
- If the primary action is unclear, default to a low-friction CTA such as "Start free" or "Book a demo" based on product type.
- If visual direction is unspecified, propose one distinct direction and explain why it fits the audience and offer.

## Expected output

A structured landing page brief with page goal, audience, positioning, section-by-section layout, suggested copy, visual direction, responsive and accessibility notes, edge-case handling, and measurement recommendations.

## Example input

`product_name`: LaunchPad
`product_type`: planning tool for solo founders
`target_audience`: founders validating a software idea
`primary_action`: start a free workspace
`brand_tone`: calm, focused, practical
`key_benefits`: clarify scope, organize tasks, track validation, reduce busywork
`proof_points`: 1,200 beta users, founder testimonials
`differentiators`: turns rough ideas into testable plans without heavy project management
`conversion_risks`: founders may think planning tools slow them down
`analytics_goal`: free workspace starts

## Example output

A calm conversion brief with a hero headline like "Turn a rough idea into a launch plan you can test this week." Sections cover founder pain points, a three-step validation workflow, focused screenshots, beta-user proof, risk-reducing FAQ, and a final CTA. The plan includes mobile stacking, accessible CTA states, conservative proof handling, and CTA click rate as the primary metric.

## Version notes

v2 expands the v1 landing page prompt with future data requirements, conversion-risk handling, accessibility constraints, explicit fallback behavior, and measurement guidance while preserving the original reusable structure.
