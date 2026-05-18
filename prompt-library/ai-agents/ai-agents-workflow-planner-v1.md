# Agent Workflow Planner Prompt

Title: Agent Workflow Planner Prompt
Category: ai-agents
Use case: Workflow planner
Version: v1
Tags: ai-agents, planning, workflow, implementation, handoff

## Prompt

Create an implementation-ready workflow plan for `{task}`. The plan should be useful for an AI coding agent or engineer who needs to execute without making major product decisions.

Include goal, assumptions, phased approach, data or interface changes, edge cases, test plan, and acceptance criteria. Keep the plan concise but decision-complete. Flag any unresolved question that would materially change implementation.

## Input variables

- `task`: Work to plan.
- `current_context`: Known repo, product, or system context.
- `constraints`: Technical, product, design, deadline, or tooling constraints.
- `success_criteria`: What done means.
- `out_of_scope`: Explicit exclusions.

## Expected output

A structured plan with summary, key implementation changes, tests, assumptions, and any blockers.

## Example input

`task`: add prompt folders to a Next.js prompt library  
`current_context`: app already has prompt CRUD and local persistence  
`constraints`: keep data model simple and avoid database migrations for MVP  
`success_criteria`: users can create folders and assign prompts  
`out_of_scope`: sharing folders between users

## Example output

A plan covering folder data types, sidebar UI, prompt form folder selector, filtering behavior, local persistence updates, empty states, and tests for folder creation, rename, deletion, and prompt assignment.
