# Full Website App System Brief v2

Title: Full Website App System Brief v2
Category: website-design
Use case: Full website or app system
Version: v2
Tags: website-design, full-site, design-system, information-architecture, accessibility, future-ready

## Prompt

Create a full website or app system brief for `{project_name}` serving `{target_audience}`. The output should define information architecture, shared layout, reusable components, content responsibilities, interaction states, responsive behavior, and accessibility requirements before any individual page is implemented.

Use `{site_goal}`, `{primary_action}`, `{page_list}`, `{brand_tone}`, `{content_sources}`, `{user_tasks}`, `{technical_constraints}`, and `{success_metrics}` to produce a decision-ready system plan with page-by-page roles, navigation behavior, component inventory, state coverage, visual direction, implementation order, edge cases, and fallback behavior.

## Input variables

- `project_name`: Product, company, or app name.
- `target_audience`: Primary users or visitors.
- `site_goal`: Main business or user goal.
- `primary_action`: Most important conversion or workflow action.
- `page_list`: Known pages, routes, or app screens.
- `brand_tone`: Visual and copy tone.
- `content_sources`: Existing copy, media, docs, or data sources.
- `user_tasks`: Repeated tasks or decision points.
- `technical_constraints`: Framework, data, auth, CMS, or deployment limits.
- `success_metrics`: How success will be measured.

## Future data requirements

- Track page role, entry path, CTA click, search/filter usage, drop-off point, content freshness, and accessibility review status.
- Capture reusable component defects and missing states so future prompts improve system completeness.
- Record which page templates become duplicated or hard to maintain.

## Precision constraints

- Do not collapse a full-site request into a single landing page.
- Define shared navigation, route roles, repeated components, and page-specific responsibilities.
- Include loading, empty, error, disabled, permission, and long-content states where relevant.
- Avoid choosing Tailwind, ShadCN, database, auth, or analytics tools unless they are provided in `technical_constraints`.

## Edge cases

- If `page_list` is incomplete, propose a minimal sitemap and label it as assumed.
- If content sources are thin, identify required copy/media gaps before inventing detailed content.
- If the site includes both marketing and app workflows, separate public pages from authenticated or task-focused screens.

## Fallback behavior

- If success metrics are missing, default to primary-action completion plus page-level engagement signals.
- If the brand tone is vague, choose one clear visual direction and note alternatives.
- If technical constraints are unknown, keep recommendations framework-neutral and avoid dependency-specific instructions.

## Expected output

A full-site system brief with goal, sitemap, navigation, shared layout, component inventory, state requirements, page-by-page briefs, accessibility and responsive rules, implementation sequence, content gaps, measurement plan, edge cases, and fallback behavior.

## Example input

`project_name`: SignalForge
`target_audience`: small B2B teams evaluating customer research
`site_goal`: explain the product and route qualified visitors to a demo
`primary_action`: book a demo
`page_list`: home, product, pricing, resources, about, contact
`brand_tone`: sharp, useful, expert
`content_sources`: product screenshots, case-study notes, pricing tiers
`user_tasks`: compare plans, understand workflow, review proof, contact sales
`technical_constraints`: Next.js app, no CMS yet
`success_metrics`: demo bookings and pricing-page CTA clicks

## Example output

A full-site system plan with shared navigation, route roles, reusable proof and pricing components, page-specific content responsibilities, responsive menu behavior, empty media fallbacks, accessibility requirements, and an implementation order that starts with IA and shared components before page buildout.

## Version notes

v2 adds full-site scope control, design-system planning, route-level responsibilities, state coverage, technical-constraint safeguards, and measurement guidance.
