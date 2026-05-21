# AI Media Baseline Report

Linear: `SOR-48`

## Summary

This baseline compares a hosted AI image generation path against local/workflow availability for a shared premium creative brief. No private or client assets are used.

## Shared Brief

Create a premium dark luxury visual for a motion-first digital designer portfolio. The image should feel cinematic, futuristic, editorial, high contrast, and suitable for a hero background. Avoid generic stock-photo style. Leave negative space for typography.

## Planned Paths

| Path | Status | Notes |
|---|---|---|
| OpenAI Images API | Completed | Generated two low-quality 1024x1024 hosted test outputs with `gpt-image-1-mini`. |
| ComfyUI local workflow | Blocked | Local ComfyUI service was not available at `127.0.0.1:8188`. No local model or workflow was run. |
| Replicate | Blocked | No `REPLICATE_API_TOKEN` was configured. No Replicate request was made. |

## Outputs

| Output | Tool | Path | Quality notes |
|---|---|---|---|
| 1 | OpenAI Images API | `assets/ai-generated/prototype-ai-media/openai-baseline-1.png` | Strong premium dark cinematic background with generous left-side negative space; refined but slightly abstract architectural geometry; suitable for a hero background. |
| 2 | OpenAI Images API | `assets/ai-generated/prototype-ai-media/openai-baseline-2.png` | Very minimal luxury composition with strong dark negative space and clean vertical geometry; useful for typography-heavy hero layouts. |

Metadata:

- `assets/ai-generated/prototype-ai-media/openai-baseline-1.json`
- `assets/ai-generated/prototype-ai-media/openai-baseline-2.json`

## Cost And Friction Notes

- OpenAI path was straightforward once API access was available.
- Exact cost should be confirmed in the OpenAI usage dashboard; metadata records mark this as a low-quality 1024x1024 hosted test.
- ComfyUI remains `test-later` because no local service, model files, or workflow graph were available in this workspace.
- Replicate remains `test-later` because no token was configured and optional provider testing should not be forced.

## Rights And Safety Notes

- No private or client assets are uploaded.
- Prompt excludes logos, copyrighted characters, brands, unsafe content, political content, and readable text.
- Generated outputs are test artifacts only and should not be published without a separate rights, model, and usage review.

## Recommendation

Keep for hosted image generation. The OpenAI path produced two useful dark hero-background candidates with low setup friction and preserved metadata. Test ComfyUI later only after a controlled local workflow, model source, node list, and licensing review are available.
