# Short-Form Hook Prompt

Title: Short-Form Hook Prompt
Category: video-generation
Use case: Short-form hook
Version: v1
Tags: video-generation, short-form, hook, social-video, creator

## Prompt

Generate `{count}` short-form video hooks for `{topic}` aimed at `{audience}`. Each hook should fit the first `{seconds}` seconds of a video and create curiosity without clickbait.

Vary the hook types: contrarian insight, mistake to avoid, quick transformation, surprising stat, direct question, and before/after. Keep each hook easy to say out loud and suitable for `{platform}`.

## Input variables

- `topic`: Video topic.
- `audience`: Intended viewers.
- `count`: Number of hooks.
- `seconds`: Hook length in seconds.
- `platform`: TikTok, Reels, Shorts, LinkedIn, etc.
- `tone`: Direct, playful, expert, calm, bold, etc.

## Expected output

A numbered list of short hooks with hook type, exact spoken line, and optional visual opening idea.

## Example input

`topic`: organizing AI prompts  
`audience`: solo creators  
`count`: 8  
`seconds`: 3  
`platform`: TikTok  
`tone`: direct and useful

## Example output

Eight hooks such as "Stop rewriting the same prompt every morning" and "Your best AI workflow is probably buried in chat history," each paired with a quick visual opening idea.
