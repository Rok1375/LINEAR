# Video Ad Script Prompt v2

Title: Video Ad Script Prompt v2
Category: video-generation
Use case: Ad script
Version: v2
Tags: video-generation, ad-script, marketing, short-video, conversion, future-ready

## Prompt

Write a platform-aware video ad script for `{product_name}` promoting `{offer}` to `{target_audience}` on `{platform}`. The script must fit `{duration}`, use `{tone}`, open with a strong hook, show the problem, introduce the product, demonstrate the benefit, handle one likely objection, and end with `{call_to_action}`.

Include timed scenes, voiceover, on-screen text, shot direction, visual assets needed, transitions, pacing notes, and a compact variant for testing. Keep language specific, filmable, and suitable for AI video generation or human production.

## Input variables

- `product_name`: Product or brand name.
- `offer`: Main offer or campaign message.
- `target_audience`: Intended viewers.
- `duration`: Video length.
- `tone`: Practical, funny, premium, urgent, calm, etc.
- `call_to_action`: Final action.
- `platform`: TikTok, Reels, YouTube Shorts, LinkedIn, etc.
- `primary_objection`: Main hesitation the ad should reduce.
- `proof_point`: Metric, testimonial, demo moment, or credibility signal.
- `production_constraints`: Available footage, format, budget, actors, screen recording, or AI-only.

## Future data requirements

- Track hook retention, watch time, click-through rate, conversion rate, objection-handling performance, platform, and creative fatigue.
- Store scene-level notes so future scripts can reuse strong hooks and cut weak moments.
- Capture which proof types perform best by audience and offer.

## Precision constraints

- Do not invent proof points, customer quotes, statistics, or guarantees.
- Keep on-screen text short enough to read at the target pace.
- Make each scene serve one job: hook, problem, product, proof, objection, or CTA.
- Include safe alternatives for claims that may require substantiation.

## Edge cases

- If the offer is complex, focus on one high-intent use case rather than explaining every feature.
- If the platform favors silent autoplay, make the story understandable from visuals and captions.
- If production constraints are AI-only, avoid shots that require exact hands, UI text, or legal claims unless assets are provided.

## Fallback behavior

- If `primary_objection` is missing, infer the most likely objection from the audience and mark it as assumed.
- If `proof_point` is missing, use a demo moment or concrete before/after workflow instead of fabricated proof.
- If duration is missing, default to 30 seconds for paid social and 45 to 60 seconds for product education.

## Expected output

A timed video ad script with hook, scenes, voiceover, on-screen text, visual direction, objection handling, production notes, test variant, fallback assumptions, and CTA.

## Example input

`product_name`: PromptVault
`offer`: reusable prompt folders for creative teams
`target_audience`: marketing managers
`duration`: 30 seconds
`tone`: crisp and practical
`call_to_action`: start a free workspace
`platform`: LinkedIn
`primary_objection`: teams already store prompts in documents
`proof_point`: shared folders and one-click copy demo
`production_constraints`: screen recording plus simple motion graphics

## Example output

A 30-second LinkedIn script opening with "Your best prompts should not live in yesterday's chat." Scenes show scattered docs, PromptVault folders, one-click copy, and a team workflow. The objection is handled by showing faster retrieval than shared docs, and the CTA invites viewers to start a free workspace.

## Version notes

v2 expands the ad script prompt with objection handling, production constraints, substantiation safeguards, performance data requirements, and test-variant guidance.
