# Manual QA Checklist

Use this checklist after dependencies are installed and the dev server is running.

## Library

- Open `/library` at 320px, 768px, 1024px, and 1440px widths.
- Confirm prompt cards wrap without clipped text or overlapping controls.
- Search by title, body text, category, folder, and tag.
- Combine folder, category, tag, and sort filters, then clear filters from an empty result.
- Favorite and unfavorite a prompt from a card.
- Delete a prompt from a card, confirm the undo banner appears, and restore it.

## Create And Edit

- Open `/prompts/new`, submit an empty form, and confirm title/body errors are announced and visually tied to fields.
- Create a prompt with title, body, notes, category, folder, and tags.
- Edit the prompt, change metadata and body text, and confirm it saves as a new version.
- Leave a partially completed new/edit form, return, and confirm draft recovery.

## Detail And Versions

- Open a prompt detail view and copy the prompt body, metadata, and notes.
- Confirm opening a prompt updates the recent shortcuts in the library.
- Compare the current prompt with a previous version.
- Restore an older version and confirm the current version changes.
- Duplicate an older version and confirm a new prompt opens.
- Delete a prompt from detail and confirm navigation returns to the library.

## Optimization

- Open a prompt detail view and choose Optimize.
- Run optimization with a goal, target model, tone, output format, and constraints.
- Confirm the optimized draft and change summary appear without exposing the API key.
- Copy, reject, retry after a forced failure, and save the optimized draft as a new version.
- Temporarily remove `OPENAI_API_KEY` locally and confirm the UI shows a readable error state.

## Accessibility

- Tab through primary navigation, library filters, cards, forms, optimization, and version controls.
- Confirm visible focus states are never clipped.
- Confirm disabled controls look disabled and do not move on hover.
- Enable reduced motion in the OS/browser and confirm transitions are effectively removed.
- Check color contrast for body text, muted text, chips, and danger states.
