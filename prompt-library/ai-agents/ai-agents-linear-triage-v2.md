# Linear Triage Prompt v2

Title: Linear Triage Prompt v2
Category: ai-agents
Use case: Linear triage
Version: v2
Tags: ai-agents, linear, triage, project-management, backlog, future-ready

## Prompt

Triage Linear work for `{project_name}` in the `{team_name}` team. Use `{project_goal}`, `{known_scope}`, `{existing_issues}`, `{preferred_phases}`, `{stakeholders}`, and `{delivery_risks}` to create or update a clear execution plan without duplicating work.

Produce Linear-ready milestones, issue recommendations, update recommendations for existing issues, dependencies, acceptance criteria, priority, estimate, owner readiness, and next actions. Treat existing issue data as the source of truth and preserve relationships when work is already represented.

## Input variables

- `project_name`: Linear project name.
- `team_name`: Linear team name.
- `project_goal`: What the project is trying to accomplish.
- `known_scope`: Features, folders, files, or deliverables already known.
- `existing_issues`: Relevant existing issue identifiers or summaries.
- `preferred_phases`: Optional phase names.
- `stakeholders`: Product, design, engineering, QA, or customer owners.
- `delivery_risks`: Timeline, dependency, technical, data, compliance, or scope risks.
- `definition_of_done`: Quality bar or release criteria.

## Future data requirements

- Track issue age, duplicate rate, estimate accuracy, blocker frequency, cycle spillover, owner changes, and acceptance-criteria completeness.
- Store project assumptions and dependencies so future triage can identify stale work faster.
- Capture issue relationships between research, design, implementation, QA, and release tasks.

## Precision constraints

- Do not create overlapping issues when an update, relation, or subtask would be clearer.
- Keep issue titles action-oriented and acceptance criteria testable.
- Separate discovery, implementation, QA, release, and follow-up work when they require different owners or timelines.
- Flag missing owners, ambiguous scope, and unvalidated dependencies.

## Edge cases

- If existing issues conflict with the project goal, recommend which issue should be clarified before new work starts.
- If scope is too broad, split by milestone and identify the smallest useful release slice.
- If delivery risks are high, include risk-reduction tasks before large implementation tasks.

## Fallback behavior

- If existing issue data is missing, produce a proposed issue plan and clearly mark it as needing deduplication before creation.
- If phases are missing, default to Discovery, Implementation, QA, Launch, and Follow-up.
- If estimates are not supported by the team, provide relative size guidance instead.

## Expected output

A Linear-ready issue plan with milestones, issue titles, descriptions, acceptance criteria, relationships, priority, estimates or size guidance, recommended updates to existing issues, edge cases, and unresolved questions.

## Example input

`project_name`: Prompt Library
`team_name`: Sorensdr
`project_goal`: build a Next.js app and seed it with reusable prompt examples
`known_scope`: folders for website-design, image-generation, video-generation, ai-agents
`existing_issues`: SOR-18 seed content
`preferred_phases`: folder structure, examples, metadata, testing, expansion
`stakeholders`: product owner and solo engineer
`delivery_risks`: seed prompts may drift from app seed data
`definition_of_done`: 20 active starter prompts appear in the app and pass static checks

## Example output

A triage plan that updates SOR-18 instead of duplicating it, adds milestones for content structure and app seeding, proposes issue titles with testable acceptance criteria, flags seed-data drift as a dependency, and recommends QA tasks for static validation.

## Version notes

v2 expands the Linear triage prompt with stakeholder context, delivery risk, definition of done, deduplication safeguards, issue-health data requirements, and fallback behavior for missing Linear context.
