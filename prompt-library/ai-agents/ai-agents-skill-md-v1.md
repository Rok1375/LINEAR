# Codex Skill Markdown Prompt

Title: Codex Skill Markdown Prompt
Category: ai-agents
Use case: Skill.md authoring
Version: v1
Tags: ai-agents, codex, skill-md, documentation, workflow

## Prompt

Create a concise `SKILL.md` for a Codex skill named `{skill_name}`. The skill should help with `{skill_purpose}` and should be used when `{trigger_context}`.

Include frontmatter with name and description, then write practical instructions for when to use the skill, the workflow to follow, what files or references to load, and how to verify the result. Keep the main skill easy to scan and move long reference material into separate files if needed.

## Input variables

- `skill_name`: Skill folder/name.
- `skill_purpose`: What the skill helps Codex do.
- `trigger_context`: When the skill should be used.
- `required_workflow`: Main steps the skill should enforce.
- `verification_steps`: How to check that the skill worked.
- `references`: Optional supporting files or templates.

## Expected output

A complete `SKILL.md` draft with clear frontmatter, trigger guidance, workflow, reference-loading guidance, and verification steps.

## Example input

`skill_name`: meeting-notes-and-actions  
`skill_purpose`: turn transcripts into summaries, decisions, risks, and owner-tagged actions  
`trigger_context`: the user provides meeting notes, transcripts, or rough call notes  
`required_workflow`: identify context, extract decisions, summarize discussion, list action items  
`verification_steps`: check owners, deadlines, and unresolved questions  
`references`: templates/action-summary.md

## Example output

A concise skill file with frontmatter, "Use when" guidance, a four-step meeting-notes workflow, instructions to use the action-summary template, and checks for owners, dates, risks, and missing context.
