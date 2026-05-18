# Prompt Library

## What the prompt library is for

This prompt library is a reusable collection of tested prompts for design, image generation, video generation, and AI agent work. It gives the future Prompt Library app a clean seed structure for saving prompts into folders, categorizing them, and improving them over time.

## Folder organization

Each top-level folder is a prompt category:

- `website-design/`: prompts for creating web pages, app screens, and product UI.
- `image-generation/`: prompts for product photos, ads, backgrounds, and visual assets.
- `video-generation/`: prompts for scripts, demos, hooks, and video concepts.
- `ai-agents/`: prompts for agent planning, skill authoring, and workflow triage.

Add new categories only when the existing folders no longer describe the prompt clearly. Use lowercase words separated by hyphens.

## Adding future categories

Create a new category only after at least three prompts share the same durable use case and do not fit the current folders. A category should be broad enough to hold multiple prompt types, but specific enough that users can predict what belongs there.

When adding a category:

1. Create one top-level folder using lowercase hyphenated words, such as `research-synthesis/`.
2. Name files with the same pattern: `category-use-case-v1.md`.
3. Use the exact folder name as the `Category` value in each prompt file.
4. Keep the required metadata sections unchanged.
5. Add at least three starter prompts before treating the category as active.
6. Update this README and the app seed data if the category should appear in the first-run demo library.

Candidate future categories:

- `research-synthesis/`: prompts for source analysis, research briefs, evidence tables, and insight extraction.
- `business-strategy/`: prompts for positioning, pricing, market analysis, operating plans, and decision memos.
- `code-review/`: prompts for implementation review, bug triage, architecture critique, and test planning.
- `content-marketing/`: prompts for campaigns, editorial calendars, landing copy, email sequences, and social posts.
- `data-analysis/`: prompts for spreadsheet analysis, dashboards, metric definitions, and narrative reporting.
- `education-training/`: prompts for lessons, explainers, exercises, rubrics, and interactive learning experiences.

## How to add a new prompt

1. Choose the best category folder.
2. Create a Markdown file with the naming style below.
3. Fill in every required section.
4. Add clear tags that describe the prompt's intent and reusable context.
5. Test the prompt with at least one realistic example before saving it as a library prompt.

## File naming

Use this pattern:

```text
category-use-case-v1.md
```

Examples:

```text
website-design-landing-page-v1.md
image-generation-product-photo-v1.md
video-generation-ad-script-v1.md
ai-agents-skill-md-v1.md
```

Increment the version when the prompt changes in a way that affects output quality or structure.

## Prompt file format

Every prompt file must include:

- Title
- Category
- Use case
- Prompt
- Input variables
- Expected output
- Example input
- Example output
- Tags
- Version

## How to test prompts

Test prompts before saving them. Use realistic inputs, compare the output against the expected output section, and revise anything that creates vague, generic, or inconsistent results. Keep a prompt simple enough that another person can reuse it without needing extra explanation.

Record review notes in `testing-notes.md` when validating or changing the starter library. For structural checks, run the repository static workflow check after editing prompt files.

## How to reuse prompts

Copy the prompt text, replace the input variables with project-specific details, and run it in the target model or tool. Keep the examples nearby so the expected structure and quality bar stay clear.

## Best practices

- Use Git version control so prompt changes are reviewable.
- Test prompts before saving them.
- Add clear tags to every prompt.
- Include examples with each prompt.
- Avoid duplicate prompts.
- Keep prompts simple and reusable.
- Document what each prompt is meant to do.
