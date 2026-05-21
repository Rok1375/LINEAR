# Agent Workflow Planner Prompt v2

Title: Agent Workflow Planner Prompt v2
Category: ai-agents
Use case: Workflow planner
Version: v2
Tags: ai-agents, planning, workflow, implementation, handoff, future-ready

## Prompt

Create an implementation-ready workflow plan for `{task}` using `{current_context}`, `{constraints}`, `{success_criteria}`, and `{out_of_scope}`. The plan must be decision-complete enough for an AI coding agent or engineer to execute without making major product decisions.

Use `{interfaces_affected}`, `{data_requirements}`, `{risk_tolerance}`, `{testing_context}`, and `{rollout_context}` to define the approach. Include goal, assumptions, key implementation changes, interface or data changes, edge cases, fallback behavior, tests, acceptance criteria, and unresolved blockers.

## Input variables

- `task`: Work to plan.
- `current_context`: Known repo, product, or system context.
- `constraints`: Technical, product, design, deadline, or tooling constraints.
- `success_criteria`: What done means.
- `out_of_scope`: Explicit exclusions.
- `interfaces_affected`: APIs, schemas, UI surfaces, prompts, files, or integrations likely to change.
- `data_requirements`: Data to read, write, migrate, validate, or capture later.
- `risk_tolerance`: Conservative, balanced, experimental, or unknown.
- `testing_context`: Existing tests, manual QA needs, or unavailable test tools.
- `rollout_context`: Local-only, staged, production, behind flag, or documentation-only.

## Future data requirements

- Track plan assumptions, implementation deviations, blocked decisions, test failures, and post-implementation regressions.
- Capture which plan sections were useful or missing so future planning prompts can adapt.
- Preserve data and interface decisions for changelogs, reviews, and follow-up work.

## Precision constraints

- Do not invent detailed schemas, APIs, or migrations unless required by the task.
- Keep the plan concise but explicit where ambiguity would cause implementation mistakes.
- Separate known facts from assumptions.
- Include tests that match the actual change surface and note when tests are unavailable.

## Edge cases

- If the task is underspecified, identify only decisions that materially change implementation.
- If multiple implementation paths exist, choose one default and explain why.
- If a change may affect existing data or users, include compatibility and rollback considerations.
- If the work is documentation-only, do not invent code changes.

## Fallback behavior

- If current context is incomplete, plan an initial inspection pass before edits.
- If success criteria are missing, infer measurable acceptance criteria and mark them as assumptions.
- If rollout context is unknown, default to local implementation plus verification before release.

## Expected output

A structured plan with summary, key implementation changes, public interface or data changes, tests, acceptance criteria, assumptions, fallback behavior, and blockers.

## Example input

`task`: add prompt folders to a Next.js prompt library
`current_context`: app already has prompt CRUD and local persistence
`constraints`: keep data model simple and avoid database migrations for MVP
`success_criteria`: users can create folders and assign prompts
`out_of_scope`: sharing folders between users
`interfaces_affected`: prompt schema, library sidebar, prompt form, local storage
`data_requirements`: folder id, folder name, prompt-folder association
`risk_tolerance`: conservative
`testing_context`: static workflow check and manual QA
`rollout_context`: local MVP

## Example output

A decision-complete plan covering folder data types, sidebar UI, prompt form selector, filtering behavior, local persistence updates, deletion fallback, empty states, static checks, and manual QA for folder creation, deletion, and prompt assignment.

## Version notes

v2 expands the workflow planner prompt with interface and data requirements, rollout context, risk tolerance, fallback behavior, compatibility concerns, and learning signals for future planning quality.
