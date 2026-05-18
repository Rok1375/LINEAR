# Product Demo Video Prompt

Title: Product Demo Video Prompt
Category: video-generation
Use case: Product demo
Version: v1
Tags: video-generation, product-demo, walkthrough, onboarding, saas

## Prompt

Create a product demo video plan for `{product_name}` showing how `{target_user}` completes `{workflow}`. The demo should be `{duration}` and focus on the value of the workflow rather than every feature.

Break the demo into scenes with narration, screen actions, callouts, and transitions. Include what to show, what to say, and what outcome the viewer should understand by the end.

## Input variables

- `product_name`: Product name.
- `target_user`: Main viewer or user.
- `workflow`: Task being demonstrated.
- `duration`: Desired length.
- `key_features`: Features used in the workflow.
- `desired_takeaway`: What viewers should remember.

## Expected output

A structured product demo plan with scene order, narration, screen direction, callouts, and closing CTA.

## Example input

`product_name`: PromptVault  
`target_user`: content strategist  
`workflow`: save and reuse a campaign prompt  
`duration`: 60 seconds  
`key_features`: folders, tags, copy button, optimization  
`desired_takeaway`: prompts become reusable team assets

## Example output

A 60-second demo plan showing a strategist saving a campaign prompt, assigning it to a folder, tagging it, optimizing the wording, and copying the final version for reuse. The closing CTA invites teams to build their shared prompt library.
