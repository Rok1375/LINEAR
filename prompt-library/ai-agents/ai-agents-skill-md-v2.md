# Codex Skill Markdown Prompt v2

Title: Codex Skill Markdown Prompt v2
Category: ai-agents
Use case: Skill.md authoring
Version: v2
Tags: ai-agents, codex, skill-md, documentation, workflow, future-ready

## Prompt

Create a concise `SKILL.md` for a Codex skill named `{skill_name}`. The skill should help with `{skill_purpose}` and should be used when `{trigger_context}`. Make the skill practical for future agents by defining when to use it, what to inspect, what workflow to follow, what references to load, how to verify results, and what not to do.

Use `{required_workflow}`, `{verification_steps}`, `{references}`, `{tooling_context}`, `{failure_modes}`, and `{output_expectations}` to produce a skill that is easy to scan and hard to misuse. Move long reference material out of the main skill when possible.

## Input variables

- `skill_name`: Skill folder/name.
- `skill_purpose`: What the skill helps Codex do.
- `trigger_context`: When the skill should be used.
- `required_workflow`: Main steps the skill should enforce.
- `verification_steps`: How to check that the skill worked.
- `references`: Optional supporting files or templates.
- `tooling_context`: Tools, apps, plugins, scripts, or environment assumptions.
- `failure_modes`: Common mistakes, blocked states, or unsafe behavior.
- `output_expectations`: Required response shape, files, artifacts, or handoff format.

## Future data requirements

- Track skill trigger accuracy, skipped prerequisites, verification failures, user corrections, and repeated failure modes.
- Store examples of successful outputs so future versions can refine workflow and output expectations.
- Capture tool availability assumptions separately from durable skill behavior.

## Precision constraints

- Keep frontmatter minimal and valid with `name` and `description`.
- Define trigger boundaries clearly enough to avoid overuse.
- Include verification steps that can be performed, not vague quality claims.
- Do not bury critical behavior in long prose; use compact workflow sections.

## Edge cases

- If references are long, direct agents to specific files instead of embedding everything.
- If tools may be unavailable, include a safe fallback or stop condition.
- If the skill overlaps another skill, define the handoff boundary.
- If the skill handles risky actions, require confirmation or explicit safety checks.

## Fallback behavior

- If `verification_steps` are missing, create a minimal structural verification checklist.
- If `references` are missing, write a self-contained skill and mark future reference opportunities.
- If trigger context is broad, narrow it to concrete user intents and file patterns.

## Expected output

A complete `SKILL.md` draft with valid frontmatter, trigger guidance, workflow, reference-loading guidance, failure-mode handling, verification steps, output expectations, and fallback behavior.

## Example input

`skill_name`: meeting-notes-and-actions
`skill_purpose`: turn transcripts into summaries, decisions, risks, and owner-tagged actions
`trigger_context`: the user provides meeting notes, transcripts, or rough call notes
`required_workflow`: identify context, extract decisions, summarize discussion, list action items
`verification_steps`: check owners, deadlines, and unresolved questions
`references`: templates/action-summary.md
`tooling_context`: local document editing only if the user asks for a file
`failure_modes`: inventing owners or deadlines
`output_expectations`: concise summary with decisions, risks, and actions

## Example output

A concise skill file with valid frontmatter, use-when boundaries, a four-step workflow, instructions to use the action-summary template when available, explicit checks against invented owners, and verification for dates, risks, and missing context.

## Version notes

v2 expands the skill authoring prompt with tooling context, failure modes, output expectations, trigger boundaries, verification defaults, and future quality data requirements.
