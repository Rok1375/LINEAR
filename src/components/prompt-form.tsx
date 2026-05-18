"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState, useSyncExternalStore } from "react";
import {
  clearPromptDraft,
  createEmptyDraft,
  getPromptById,
  getPromptLibraryData,
  loadPromptDraft,
  savePrompt,
  savePromptDraft,
  subscribeToPromptStore
} from "@/lib/prompt-store";
import { PromptDraft } from "@/lib/prompt-schema";

type PromptFormProps = {
  promptId?: string;
};

type FormErrors = {
  title?: string;
  body?: string;
};

function buildInitialDraft(promptId?: string) {
  const draftKey = promptId ?? "new";
  const savedDraft = loadPromptDraft(draftKey);

  if (savedDraft) {
    return { draft: savedDraft, recovered: true };
  }

  if (!promptId) {
    return { draft: createEmptyDraft(), recovered: false };
  }

  const prompt = getPromptById(promptId);

  if (!prompt) {
    return { draft: createEmptyDraft(), recovered: false };
  }

  return {
    draft: {
      title: prompt.title,
      body: prompt.body,
      description: prompt.description,
      notes: prompt.notes,
      tags: prompt.tags,
      categoryId: prompt.categoryId,
      folderId: prompt.folderId
    },
    recovered: false
  };
}

function validateDraft(draft: PromptDraft): FormErrors {
  const nextErrors: FormErrors = {};

  if (!draft.title.trim()) {
    nextErrors.title = "Title is required.";
  }

  if (!draft.body.trim()) {
    nextErrors.body = "Prompt body is required.";
  }

  return nextErrors;
}

export function PromptForm({ promptId }: PromptFormProps) {
  const router = useRouter();
  const data = useSyncExternalStore(subscribeToPromptStore, getPromptLibraryData, getPromptLibraryData);
  const prompt = promptId ? getPromptById(promptId) : null;
  const [initialState] = useState(() => buildInitialDraft(promptId));
  const [draft, setDraft] = useState<PromptDraft>(initialState.draft);
  const [recoveredDraft] = useState(initialState.recovered);
  const [errors, setErrors] = useState<FormErrors>({});
  const [saveError, setSaveError] = useState("");

  useEffect(() => {
    const draftKey = promptId ?? "new";
    savePromptDraft(draftKey, draft);
  }, [draft, promptId]);

  if (promptId && !prompt) {
    return (
      <section className="panel-stack">
        <div className="empty-panel">
          <h2>Prompt not found.</h2>
          <p>The record may have moved or the local data may have been reset.</p>
          <Link href="/library" className="primary-button">
            Return to library
          </Link>
        </div>
      </section>
    );
  }

  function updateDraft<K extends keyof PromptDraft>(key: K, value: PromptDraft[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateDraft(draft);
    setErrors(nextErrors);
    setSaveError("");

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    try {
      const result = savePrompt(draft, promptId);
      clearPromptDraft(promptId ?? "new");
      router.push(`/prompts/${result.id}`);
      router.refresh();
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : "Unable to save this prompt.");
    }
  }

  return (
    <section className="panel-stack">
      <div className="hero-panel">
        <div>
          <p className="eyebrow">{promptId ? "Edit prompt" : "New prompt"}</p>
          <h2>{promptId ? "Refine a saved prompt." : "Capture a reusable prompt."}</h2>
          <p className="panel-copy">
            Drafts save locally as you type, so stepping away does not wipe out your work.
          </p>
        </div>

        <Link href="/library" className="secondary-button">
          Back to library
        </Link>
      </div>

      {recoveredDraft ? (
        <div className="info-banner" role="status">
          Restored an unsaved draft from local storage.
        </div>
      ) : null}

      <form className="form-panel" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label className="field field-wide">
            <span>Title</span>
            <input
              value={draft.title}
              onChange={(event) => updateDraft("title", event.target.value)}
              placeholder="Name this prompt so it is easy to find later"
              aria-invalid={errors.title ? "true" : "false"}
              aria-describedby={errors.title ? "title-error" : undefined}
            />
            {errors.title ? (
              <strong className="field-error" id="title-error">
                {errors.title}
              </strong>
            ) : null}
          </label>

          <label className="field">
            <span>Category</span>
            <select value={draft.categoryId} onChange={(event) => updateDraft("categoryId", event.target.value)}>
              {data.categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Folder</span>
            <select value={draft.folderId} onChange={(event) => updateDraft("folderId", event.target.value)}>
              {data.folders.map((folder) => (
                <option key={folder.id} value={folder.id}>
                  {folder.name}
                </option>
              ))}
            </select>
          </label>

          <label className="field field-wide">
            <span>Description</span>
            <input
              value={draft.description}
              onChange={(event) => updateDraft("description", event.target.value)}
              placeholder="Short context for when you should use this prompt"
            />
          </label>

          <label className="field field-wide">
            <span>Prompt body</span>
            <textarea
              value={draft.body}
              onChange={(event) => updateDraft("body", event.target.value)}
              placeholder="Write the prompt exactly the way you want to reuse it"
              rows={12}
              aria-invalid={errors.body ? "true" : "false"}
              aria-describedby={errors.body ? "body-error" : undefined}
            />
            {errors.body ? (
              <strong className="field-error" id="body-error">
                {errors.body}
              </strong>
            ) : null}
          </label>

          <label className="field field-wide">
            <span>Notes</span>
            <textarea
              value={draft.notes}
              onChange={(event) => updateDraft("notes", event.target.value)}
              placeholder="Capture caveats, audience notes, or setup instructions"
              rows={5}
            />
          </label>

          <label className="field field-wide">
            <span>Tags</span>
            <input
              value={draft.tags.join(", ")}
              onChange={(event) =>
                updateDraft(
                  "tags",
                  event.target.value
                    .split(",")
                    .map((item) => item.trim())
                    .filter(Boolean)
                )
              }
              placeholder="research, launch, sales"
            />
          </label>
        </div>

        {saveError ? (
          <div className="field-error" role="alert">
            {saveError}
          </div>
        ) : null}

        <div className="form-actions">
          <button type="submit" className="primary-button">
            {promptId ? "Save changes" : "Save prompt"}
          </button>
          <Link href={promptId ? `/prompts/${promptId}` : "/library"} className="secondary-button">
            Cancel
          </Link>
        </div>
      </form>
    </section>
  );
}
