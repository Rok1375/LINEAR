# Motion-Rich Landing Page Brief v2

Title: Motion-Rich Landing Page Brief v2
Category: website-design
Use case: Motion-rich landing page
Version: v2
Tags: website-design, motion, gsap, responsive, landing-page, future-ready

## Prompt

Create a motion-rich landing page brief for `{product_name}` that uses GSAP for controlled reveal or scroll sequences and Motion for component-level interactions. The page should serve `{target_audience}`, explain `{offer}`, and guide visitors toward `{primary_action}` without letting animation compete with comprehension.

Use `{brand_tone}`, `{motion_style}`, `{proof_points}`, `{conversion_risks}`, `{content_sections}`, and `{reduced_motion_policy}` to define page narrative, animation system, section timing, interaction rules, accessibility requirements, responsive behavior, validation gates, and fallback behavior.

## Input variables

- `product_name`: Name of the product or offer.
- `target_audience`: Primary visitor segment.
- `offer`: What the page is selling or explaining.
- `primary_action`: Main CTA.
- `brand_tone`: Copy and visual tone.
- `motion_style`: Desired motion feel, such as editorial, precise, playful, or cinematic.
- `proof_points`: Claims, testimonials, metrics, screenshots, or demos available.
- `conversion_risks`: Objections or trust gaps.
- `content_sections`: Required sections or page sequence.
- `reduced_motion_policy`: How motion should degrade for users who prefer less motion.

## Future data requirements

- Track scroll depth, animation completion, CTA clicks, reduced-motion sessions, layout shift, and section-level engagement.
- Capture which animation types improve comprehension versus creating friction.
- Store browser/device notes for scroll-linked behavior and mobile performance.

## Precision constraints

- Use GSAP for timeline sequencing only where CSS or Motion alone is not enough.
- Use Motion for hover, tap, presence, and layout interactions that belong to React components.
- Avoid scrolljacking, pinned content that traps users, unreadable text during animation, and motion that starts before content is usable.
- Include explicit reduced-motion behavior and verify that the page still works with animations disabled.

## Edge cases

- If proof is weak, use product walkthroughs, process transparency, or screenshots instead of invented trust signals.
- If the audience is task-focused, keep motion quiet and use it to reveal hierarchy rather than decorate.
- If mobile performance is uncertain, replace complex scroll effects with simpler entrance and interaction states.

## Fallback behavior

- If `motion_style` is missing, default to restrained reveal motion with short durations and clear easing.
- If `content_sections` are incomplete, include hero, proof, value blocks, process, CTA, FAQ, and footer.
- If reduced-motion policy is missing, remove JS-driven motion and keep content in the final readable state.

## Expected output

A landing page brief with narrative structure, section-by-section copy goals, GSAP timeline opportunities, Motion component interactions, reduced-motion fallback, responsive behavior, accessibility notes, performance constraints, edge cases, and validation gates.

## Example input

`product_name`: Brightline
`target_audience`: design-led agencies
`offer`: a client portal for approvals and creative handoff
`primary_action`: start a trial
`brand_tone`: polished, direct, confident
`motion_style`: editorial reveal with subtle card interactions
`proof_points`: agency testimonials, approval-time reduction metric
`conversion_risks`: agencies may fear client portals are too rigid
`content_sections`: hero, workflow, proof, integrations, pricing CTA, FAQ
`reduced_motion_policy`: no scroll motion, instant content, hover states only

## Example output

A polished landing page plan with GSAP reveal for hero and section rhythm, Motion hover/tap feedback on workflow cards, proof handled without overclaiming, mobile-friendly static section order, explicit reduced-motion fallback, and CTA measurement tied to trial starts.

## Version notes

v2 adds practical GSAP and Motion division of responsibility, reduced-motion policy, scroll and mobile cautions, and measurement guidance for motion-heavy landing pages.
