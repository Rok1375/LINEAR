# Prompt Library MVP

## Product shape

The first release is a local-first prompt workspace for a single user. It helps someone capture prompts quickly, organize them into categories and folders, and reopen or revise them without losing work.

## MVP decisions

- Scope is local-only for the first version. Prompts persist in browser storage with a repository abstraction so we can swap in a database later.
- Authentication is explicitly out of scope for MVP.
- Workspace collaboration, syncing, advanced analytics, and AI-assisted prompt optimization are later-phase features.
- Categories and folders are separate concepts: categories describe intent, folders describe organization.
- Draft recovery is part of MVP for create and edit because losing prompt work would be costly.

## Primary flows

### 1. Create a prompt

1. Open the library and choose `New prompt`.
2. Fill in title, prompt body, notes, category, folder, and tags.
3. Save the prompt and land on the prompt detail view.
4. If the user leaves mid-edit, the unsaved draft is restored when they return.

### 2. Find and reopen a prompt

1. Open the library.
2. Search by title, tag, or prompt text.
3. Filter by folder when needed.
4. Open a prompt detail page to review or copy the saved prompt.

### 3. Edit a prompt safely

1. Open an existing prompt.
2. Choose `Edit prompt`.
3. Change content or metadata.
4. Save to update the prompt and append a lightweight version snapshot.

### 4. Organize the library

1. Browse prompts in the library.
2. Use categories for prompt type and folders for collection-level grouping.
3. See empty states that explain how to create the first prompt or refine a filter.

## Empty, error, and loading states

- Empty library: explain the benefit of saving the first prompt and offer a direct create action.
- Empty search/filter result: keep filters visible and offer a reset action.
- Missing prompt route: show a recovery state with a return path to the library.
- Draft restore: explain when a draft has been restored so the user trusts the state.
- Storage failure: show a clear message that saving in local storage failed and keep the form data visible.

## Mobile expectations

- The shared shell collapses into a stacked layout below tablet widths.
- Primary actions stay near the top of the viewport.
- Forms use single-column fields on mobile.
- Prompt body and notes keep comfortable tap targets and visible labels.
- Dense metadata chips wrap cleanly instead of forcing horizontal scrolling.

## Optimization workflow

1. Open a saved prompt and choose `Optimize`, or open the optimization workspace directly.
2. Select the source prompt, improvement goal, target model, tone, output format, constraints, and Generation Mode (Landing Page or Full Site).
3. The generation mode shapes whether the optimized prompt focuses on a section-by-section structure (landing page) or includes a sitemap and page-level details (full site).
4. Run optimization to produce a review draft without changing the saved prompt.
4. Review the change summary, then copy, reject, or save the optimized output as a new prompt version.

The MVP uses a local deterministic draft builder for the workflow shape. The future service integration can replace
that generator while keeping the review, copy, reject, and save states intact.

## Later enhancements

- AI-backed prompt optimization service integration.
- Deletion with undo or soft-delete archive.
- Folder management UI.
- Shared workspaces, auth, and cloud sync.
