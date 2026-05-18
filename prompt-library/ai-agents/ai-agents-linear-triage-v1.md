# Linear Triage Prompt

Title: Linear Triage Prompt
Category: ai-agents
Use case: Linear triage
Version: v1
Tags: ai-agents, linear, triage, project-management, backlog

## Prompt

Triage Linear work for `{project_name}` in the `{team_name}` team. Review the goal `{project_goal}` and create or update issues so the project has clear phases, ownership-ready tasks, acceptance criteria, and next actions.

Avoid duplicate issues. Group work by milestone or phase. Each issue should have a clear title, concise goal, acceptance criteria, suggested priority, estimate, and next action. If existing issues already cover part of the work, update or relate them instead of creating overlapping tasks.

## Input variables

- `project_name`: Linear project name.
- `team_name`: Linear team name.
- `project_goal`: What the project is trying to accomplish.
- `known_scope`: Features, folders, files, or deliverables already known.
- `existing_issues`: Relevant existing issue identifiers or summaries.
- `preferred_phases`: Optional phase names.

## Expected output

A Linear-ready issue plan with milestones, issue titles, descriptions, acceptance criteria, relationships, and recommended updates to existing issues.

## Example input

`project_name`: Prompt Library  
`team_name`: Sorensdr  
`project_goal`: build a Next.js app and seed it with reusable prompt examples  
`known_scope`: folders for website-design, image-generation, video-generation, ai-agents  
`existing_issues`: SOR-18 seed content  
`preferred_phases`: folder structure, examples, metadata, testing, expansion

## Example output

A plan to add a Prompt Content Library milestone, create five phase issues, create four category issues, and update SOR-18 to reference the folder-based prompt seed work.
