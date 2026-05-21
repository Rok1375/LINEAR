# Product Demo Video Prompt v2

Title: Product Demo Video Prompt v2
Category: video-generation
Use case: Product demo
Version: v2
Tags: video-generation, product-demo, walkthrough, onboarding, saas, future-ready

## Prompt

Create a product demo video plan for `{product_name}` showing how `{target_user}` completes `{workflow}` and reaches `{desired_takeaway}`. The demo should fit `{duration}` and focus on workflow value, not a full feature tour.

Use `{key_features}`, `{starting_state}`, `{success_state}`, `{viewer_context}`, and `{production_constraints}` to define scenes. Include narration, screen actions, callouts, transitions, pacing, required assets, accessibility notes, and a fallback cutdown version.

## Input variables

- `product_name`: Product name.
- `target_user`: Main viewer or user.
- `workflow`: Task being demonstrated.
- `duration`: Desired length.
- `key_features`: Features used in the workflow.
- `desired_takeaway`: What viewers should remember.
- `starting_state`: User's situation before the workflow begins.
- `success_state`: Visible outcome at the end of the workflow.
- `viewer_context`: Sales demo, onboarding, help center, launch video, or internal training.
- `production_constraints`: Screen recording, prototype, live product, voiceover, captions, or AI-generated visuals.

## Future data requirements

- Track viewer context, completion rate, replay points, drop-off scenes, CTA clicks, support-ticket reduction, and feature adoption.
- Store scene-level comprehension notes to improve future demos.
- Capture which workflows most often need demos and which users watch them.

## Precision constraints

- Do not show every feature; show only what moves the workflow forward.
- Avoid fake UI states, impossible data, and unreadable screen text.
- Include captions or caption-ready narration for accessibility.
- Make the final outcome visible and tied to the viewer's job.

## Edge cases

- If the product is not built yet, frame the plan as a prototype demo and avoid implying live functionality.
- If the workflow has errors or approvals, show one realistic recovery path.
- If the demo is for onboarding, slow down around first-time concepts; if it is for sales, emphasize business outcome faster.

## Fallback behavior

- If `starting_state` is missing, infer a common pain point from the workflow and label it as assumed.
- If `success_state` is missing, define one measurable or visible outcome.
- If production constraints are missing, default to screen recording plus concise voiceover and captions.

## Expected output

A structured product demo plan with scene order, narration, screen direction, callouts, transitions, assets, accessibility notes, edge cases, fallback assumptions, and closing CTA.

## Example input

`product_name`: PromptVault
`target_user`: content strategist
`workflow`: save and reuse a campaign prompt
`duration`: 60 seconds
`key_features`: folders, tags, copy button, optimization
`desired_takeaway`: prompts become reusable team assets
`starting_state`: a strategist has a useful campaign prompt buried in chat history
`success_state`: the optimized prompt is saved, tagged, and copied for reuse
`viewer_context`: onboarding
`production_constraints`: screen recording with captions

## Example output

A 60-second onboarding demo plan showing a strategist moving a campaign prompt from chat history into PromptVault, assigning a folder and tags, optimizing wording, copying the final version, and ending with a reusable team asset. The plan includes captions, callouts, and a 30-second cutdown.

## Version notes

v2 expands the product demo prompt with starting and success states, viewer context, accessibility, prototype-safe language, production constraints, and adoption data requirements.
