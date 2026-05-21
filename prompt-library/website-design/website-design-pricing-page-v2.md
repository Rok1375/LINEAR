# Pricing Page Design Brief v2

Title: Pricing Page Design Brief v2
Category: website-design
Use case: Pricing page
Version: v2
Tags: website-design, pricing, conversion, saas, plans, future-ready

## Prompt

Create a pricing page brief for `{product_name}` that helps `{target_audience}` choose the right plan with confidence and complete `{primary_action}`. Make plan differences, value thresholds, limitations, and trust signals clear without pushing every visitor toward the most expensive option.

Use `{plans}`, `{key_limitations}`, `{trust_points}`, `{buyer_questions}`, `{upgrade_triggers}`, and `{pricing_model}` to define the page. Include plan positioning, comparison logic, recommendation treatment, FAQ topics, responsive behavior, accessibility notes, and analytics events.

## Input variables

- `product_name`: Product name.
- `target_audience`: Buyer or user segment.
- `plans`: Plan names, prices, intended users, and major limits.
- `primary_action`: Desired pricing-page action.
- `key_limitations`: Usage limits, feature gates, seats, credits, or billing rules.
- `trust_points`: Refund policy, support promise, security notes, customer proof, or compliance claims.
- `buyer_questions`: Common objections or pre-purchase questions.
- `upgrade_triggers`: Events that should make a user move to a higher plan.
- `pricing_model`: Subscription, usage-based, seat-based, hybrid, one-time, or unknown.

## Future data requirements

- Track plan card views, comparison-table interactions, FAQ expansion, CTA clicks, checkout starts, plan changes, and cancellation reasons.
- Capture upgrade path data so future prompts can improve plan boundaries and recommendation logic.
- Preserve assumptions about buyer objections, billing rules, and trust claims for later validation.

## Precision constraints

- Do not invent exact prices, guarantees, compliance claims, or discount rules.
- Make recommendation logic transparent and buyer-centered.
- Include mobile comparison behavior that avoids unreadable wide tables.
- Explain limits in plain language and distinguish hard limits from soft usage guidance.

## Edge cases

- If pricing is not final, propose a structure that works with placeholder pricing and clear "pricing subject to change" notes.
- If there is a free plan, clarify what success looks like before upgrading.
- If plans overlap, recommend clearer segmentation or feature grouping.
- If enterprise/custom pricing exists, define a path that does not interrupt self-serve buyers.

## Fallback behavior

- If `plans` are incomplete, create a provisional tier model based on audience maturity and mark assumptions.
- If trust points are missing, use transparent FAQs, support expectations, and cancellation clarity rather than fabricated proof.
- If pricing model is unknown, default to a simple subscription comparison and list questions needed to refine it.

## Expected output

A pricing page brief with plan positioning, comparison structure, recommendation logic, upgrade cues, supporting copy, FAQ topics, responsive UX, accessibility notes, edge-case handling, and analytics recommendations.

## Example input

`product_name`: PromptVault
`target_audience`: small creative teams
`plans`: Free, Pro at $12/user, Team at $29/user
`primary_action`: start free trial
`key_limitations`: prompt count, shared folders, optimization runs
`trust_points`: cancel anytime, encrypted storage, priority support
`buyer_questions`: what happens when prompt limits are reached, whether team prompts are private
`upgrade_triggers`: shared folders, approval workflow, higher optimization volume
`pricing_model`: seat-based subscription

## Example output

A pricing brief with Free for exploration, Pro for solo professionals, and Team for shared libraries and approvals. It includes a mobile-friendly feature comparison, upgrade-trigger copy, plain-language limits, privacy and cancellation FAQs, and analytics for plan CTA clicks and FAQ engagement.

## Version notes

v2 expands the pricing prompt with buyer-objection handling, pricing-model context, upgrade analytics, fallback plan logic, and clearer constraints around proof and billing claims.
