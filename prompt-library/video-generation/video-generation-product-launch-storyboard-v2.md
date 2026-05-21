# Product Launch Video Storyboard v2

Title: Product Launch Video Storyboard v2
Category: video-generation
Use case: Product launch storyboard
Version: v2
Tags: video-generation, product-launch, storyboard, launch-campaign, captions, future-ready

## Prompt

Create a product launch video storyboard for `{product_name}` announcing `{launch_message}` to `{target_audience}`. The video should fit `{duration}`, match `{platform}`, and move from hook to problem, product reveal, proof, CTA, and cutdown variants without inventing unsupported claims.

Use `{key_features}`, `{proof_points}`, `{visual_assets}`, `{tone}`, `{call_to_action}`, `{production_constraints}`, and `{compliance_notes}` to define timed scenes, voiceover, on-screen text, shot direction, captions, transitions, accessibility notes, edge cases, and fallback behavior.

## Input variables

- `product_name`: Product or offer being launched.
- `launch_message`: Main announcement or launch angle.
- `target_audience`: Intended viewer.
- `duration`: Target video length.
- `platform`: Delivery channel.
- `key_features`: Features or benefits to show.
- `proof_points`: Approved metrics, quotes, demos, or credibility signals.
- `visual_assets`: Product footage, screenshots, renders, generated images, or b-roll.
- `tone`: Voice and pacing.
- `call_to_action`: Desired next step.
- `production_constraints`: Budget, format, talent, asset, or editing limits.
- `compliance_notes`: Claims, regulated language, rights, or review constraints.

## Future data requirements

- Track hook retention, CTA clicks, view-through rate, version performance, asset usage, approval status, and claim substantiation.
- Preserve scene-level notes on which proof points and visuals were used.
- Capture platform-specific performance so later prompts can tune duration, opening line, captions, and CTA placement.

## Precision constraints

- Do not invent customer quotes, launch stats, awards, guarantees, or comparative claims.
- Include captions and make on-screen text readable in the target aspect ratio.
- Keep the storyboard achievable with the listed assets and production constraints.
- Separate hero launch video, cutdowns, and social variants instead of forcing one script to serve every platform.

## Edge cases

- If proof is limited, use concrete product demonstration instead of fake external validation.
- If visual assets are incomplete, list required assets and propose a low-budget fallback.
- If duration is short, prioritize hook, product reveal, one proof moment, and CTA.

## Fallback behavior

- If platform is missing, default to a 30-second web/social launch video plus 10-second cutdown.
- If compliance notes are missing, avoid absolute claims, regulated outcomes, and urgency pressure.
- If the launch message is broad, choose one audience-specific angle and mark it as assumed.

## Expected output

A timed product launch storyboard with scenes, voiceover, on-screen text, shot direction, visual asset needs, captions, transitions, CTA, platform variants, cutdown plan, accessibility notes, compliance constraints, edge cases, and fallback behavior.

## Example input

`product_name`: Brightline
`launch_message`: client approvals without messy email threads
`target_audience`: agency owners
`duration`: 45 seconds
`platform`: website hero and LinkedIn
`key_features`: approval timeline, file comments, client dashboard
`proof_points`: beta agencies cut approval rounds from five to two
`visual_assets`: product screenshots, UI clips, brand stills
`tone`: crisp, confident, useful
`call_to_action`: start a trial
`production_constraints`: no live talent, screen recording plus motion graphics
`compliance_notes`: beta metric needs review before publication

## Example output

A 45-second storyboard with a fast email-chaos hook, product workflow reveal, one substantiated beta metric marked for approval, captions and on-screen text, screenshot-driven scenes, LinkedIn cutdown, and fallback copy if the metric cannot be published.

## Version notes

v2 adds launch-specific story structure, proof safeguards, asset needs, captions, platform variants, cutdowns, and compliance fallback behavior.
