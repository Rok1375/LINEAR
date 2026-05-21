# Short-Form Hook Prompt v2

Title: Short-Form Hook Prompt v2
Category: video-generation
Use case: Short-form hook
Version: v2
Tags: video-generation, short-form, hook, social-video, creator, future-ready

## Prompt

Generate `{count}` short-form video hooks for `{topic}` aimed at `{audience}` on `{platform}`. Each hook must fit the first `{seconds}` seconds, match `{tone}`, create curiosity without clickbait, and lead naturally into `{content_promise}`.

Vary hook types across contrarian insight, mistake to avoid, quick transformation, surprising stat, direct question, before/after, pattern interrupt, and proof-led hook. Include exact spoken line, visual opening idea, why it works, risk level, and one safer fallback if the hook overpromises.

## Input variables

- `topic`: Video topic.
- `audience`: Intended viewers.
- `count`: Number of hooks.
- `seconds`: Hook length in seconds.
- `platform`: TikTok, Reels, Shorts, LinkedIn, etc.
- `tone`: Direct, playful, expert, calm, bold, etc.
- `content_promise`: What the video will actually deliver after the hook.
- `avoid_claims`: Claims, words, topics, or angles to avoid.
- `proof_available`: Stats, experience, demo, or proof the hook can safely reference.

## Future data requirements

- Track hook type, first-three-second retention, average watch time, saves, comments, shares, and follow-through quality.
- Store which hooks underperform because they are unclear, too broad, too familiar, or overpromising.
- Capture audience and platform context so future hooks can adapt tone and pacing.

## Precision constraints

- Do not use clickbait, fear tactics, fake stats, or claims unsupported by `proof_available`.
- Keep each hook easy to say out loud and short enough for the requested duration.
- Make the hook connect to the actual content promise.
- Include enough variation that the hooks test different psychological angles.

## Edge cases

- If the topic is saturated, use specificity, lived context, or a sharper audience segment.
- If proof is unavailable, avoid stat-led hooks and use observation or workflow-led hooks.
- If the platform is professional, reduce slang and prioritize credibility.

## Fallback behavior

- If `content_promise` is missing, infer one from the topic and mark it as assumed.
- If `avoid_claims` are missing, avoid extreme outcomes, guaranteed results, and sensitive personal targeting.
- If `count` is high, group hooks by type to preserve variety.

## Expected output

A numbered list of hooks with hook type, exact spoken line, visual opening idea, rationale, risk note, and safer fallback where needed.

## Example input

`topic`: organizing AI prompts
`audience`: solo creators
`count`: 8
`seconds`: 3
`platform`: TikTok
`tone`: direct and useful
`content_promise`: a simple folder and tagging system for reusable prompts
`avoid_claims`: guaranteed productivity numbers
`proof_available`: personal workflow demo

## Example output

Eight hooks grouped by type, including "Stop rewriting the same prompt every morning" with a visual of repeated chat prompts, a rationale tied to creator frustration, and a low-risk note because it promises a workflow demo rather than a guaranteed result.

## Version notes

v2 expands the short-form hook prompt with content-promise alignment, risk notes, proof constraints, platform adaptation, fallback hooks, and retention data requirements.
