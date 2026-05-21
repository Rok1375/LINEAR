# UGC-Style Ad Video Prompt v2

Title: UGC-Style Ad Video Prompt v2
Category: video-generation
Use case: UGC-style ad
Version: v2
Tags: video-generation, ugc, social-ad, creator-brief, compliance, future-ready

## Prompt

Create a UGC-style video ad concept for `{product_name}` promoting `{offer}` to `{target_audience}` on `{platform}`. The concept should feel like a credible creator recommendation while clearly disclosing the offer, respecting `{compliance_notes}`, and avoiding fabricated personal experience.

Use `{creator_persona}`, `{hook_angle}`, `{primary_objection}`, `{proof_available}`, `{desired_action}`, `{duration}`, `{production_constraints}`, and `{avoid_claims}` to produce a creator brief, hook variants, script, shot list, on-screen text, caption notes, compliance checks, edge cases, and fallback behavior.

## Input variables

- `product_name`: Product or offer.
- `offer`: Promotion, benefit, or campaign angle.
- `target_audience`: Intended viewer.
- `platform`: TikTok, Reels, Shorts, LinkedIn, or another channel.
- `creator_persona`: Speaker identity, expertise, or point of view.
- `hook_angle`: Opening angle or hook family.
- `primary_objection`: Viewer hesitation to address.
- `proof_available`: Approved proof, demo, screenshot, or experience.
- `desired_action`: CTA.
- `duration`: Target length.
- `production_constraints`: Talent, filming, editing, or asset limits.
- `compliance_notes`: Disclosure, regulated claims, rights, or review rules.
- `avoid_claims`: Claims or targeting language to avoid.

## Future data requirements

- Track hook family, creator persona, retention, thumb-stop rate, CTA click, comment sentiment, compliance status, and winning variants.
- Preserve which proof assets were approved versus assumed.
- Capture platform-specific moderation or rejection notes.

## Precision constraints

- Do not claim the creator personally used the product unless that is true and supplied.
- Include ad disclosure guidance when the concept is sponsored or paid.
- Avoid sensitive personal targeting, guaranteed outcomes, false scarcity, and unsubstantiated before/after claims.
- Keep on-screen text short enough to read on mobile.

## Edge cases

- If proof is unavailable, use a demo, walkthrough, or expectation-setting angle instead of performance claims.
- If creator persona is vague, choose a credible role that matches the audience and mark it as assumed.
- If platform is LinkedIn, reduce slang and use a more professional creator voice.

## Fallback behavior

- If hook angle is missing, provide three options: problem-led, mistake-led, and demo-led.
- If production constraints are missing, default to simple talking-head plus screen/product insert shots.
- If compliance notes are missing, use conservative disclosure and claim language.

## Expected output

A UGC-style ad package with creator brief, hook variants, script, shot list, on-screen text, captions, proof and claim checks, platform notes, CTA, test variants, edge cases, and fallback behavior.

## Example input

`product_name`: LaunchPad
`offer`: plan a software launch in one focused workspace
`target_audience`: solo founders
`platform`: TikTok and Reels
`creator_persona`: practical founder coach
`hook_angle`: mistake to avoid
`primary_objection`: planning slows founders down
`proof_available`: demo workspace and beta founder quote
`desired_action`: start a free workspace
`duration`: 30 seconds
`production_constraints`: phone video plus screen recording
`compliance_notes`: sponsored content disclosure required
`avoid_claims`: guaranteed launch success, income claims

## Example output

A creator brief with disclosure, three hook variants, a 30-second script, phone-shot directions, screen-recording inserts, concise captions, proof-safe language, CTA, and conservative fallback if the founder quote is not approved.

## Version notes

v2 adds creator-persona structure, proof and disclosure safeguards, platform-specific tone handling, mobile readability constraints, and fallback hook families.
