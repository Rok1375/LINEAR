"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  deletePrompt,
  getPromptById,
  getPromptLibraryData,
  savePrompt,
  subscribeToPromptStore,
  togglePromptFavorite,
  touchPrompt
} from "@/lib/prompt-store";

type PromptDetailProps = {
  promptId: string;
};

export function PromptDetail({ promptId }: PromptDetailProps) {
  const router = useRouter();
  const [copyStatus, setCopyStatus] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [selectedVersionId, setSelectedVersionId] = useState("");
  const data = useSyncExternalStore(subscribeToPromptStore, getPromptLibraryData, getPromptLibraryData);
  const prompt = getPromptById(promptId);

  useEffect(() => {
    if (promptId) {
      touchPrompt(promptId);
    }
  }, [promptId]);

  if (!prompt) {
    return (
      <section className="panel-stack">
        <div className="empty-panel">
          <h2>Prompt not found.</h2>
          <p>The saved record is unavailable in local storage right now.</p>
          <Link href="/library" className="primary-button">
            Return to library
          </Link>
        </div>
      </section>
    );
  }

  const currentPrompt = prompt;
  const category = data.categories.find((item) => item.id === prompt.categoryId);
  const folder = data.folders.find((item) => item.id === prompt.folderId);
  const variables = currentPrompt.variables.length > 0 ? currentPrompt.variables.join(", ") : "None detected";
  const selectedVersion = currentPrompt.versionHistory.find((version) => version.id === selectedVersionId) ?? null;
  const compareVersion = selectedVersion ?? currentPrompt.versionHistory[0] ?? null;

  function formatDateTime(value: string) {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    }).format(new Date(value));
  }

  async function copyText(label: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      touchPrompt(currentPrompt.id);
      setCopyStatus(`${label} copied.`);
    } catch {
      setCopyStatus("Copy failed. Select the text and copy it manually.");
    }
  }

  function toggleFavorite() {
    togglePromptFavorite(currentPrompt.id);
  }

  function restoreVersion() {
    if (!compareVersion) {
      return;
    }

    const restored = savePrompt(
      {
        title: compareVersion.title,
        body: compareVersion.body,
        description: currentPrompt.description,
        notes: compareVersion.notes,
        tags: compareVersion.tags,
        categoryId: compareVersion.categoryId,
        folderId: compareVersion.folderId
      },
      currentPrompt.id
    );

    setSelectedVersionId(restored.versionHistory[0]?.id ?? "");
    setCopyStatus(`Restored ${compareVersion.title} as version ${restored.version}.`);
  }

  function duplicateVersion() {
    if (!compareVersion) {
      return;
    }

    const duplicate = savePrompt({
      title: `${compareVersion.title} copy`,
      body: compareVersion.body,
      description: currentPrompt.description,
      notes: compareVersion.notes,
      tags: compareVersion.tags,
      categoryId: compareVersion.categoryId,
      folderId: compareVersion.folderId
    });

    router.push(`/prompts/${duplicate.id}`);
    router.refresh();
  }

  return (
    <section className="panel-stack">
      <div className="hero-panel">
        <div>
          <p className="eyebrow">{category?.name ?? "Prompt"}</p>
          <h2>{currentPrompt.title}</h2>
          <p className="panel-copy">{currentPrompt.description || "No description yet."}</p>
        </div>

        <div className="hero-actions">
          <button type="button" className="secondary-button" onClick={toggleFavorite}>
            {currentPrompt.isFavorite ? "Unfavorite" : "Favorite"}
          </button>
          <button type="button" className="primary-button" onClick={() => copyText("Prompt", currentPrompt.body)}>
            Copy prompt
          </button>
          <Link href={`/optimize?prompt=${currentPrompt.id}`} className="secondary-button">
            Optimize
          </Link>
          <Link href={`/prompts/${currentPrompt.id}/edit`} className="primary-button">
            Edit prompt
          </Link>
          <Link href="/library" className="secondary-button">
            Back to library
          </Link>
        </div>
      </div>

      {copyStatus ? (
        <div className="info-banner" role="status">
          {copyStatus}
        </div>
      ) : null}

      <div className="detail-grid">
        <article className="detail-panel">
          <div className="section-heading">
            <h3>Prompt body</h3>
            <button type="button" className="text-button" onClick={() => copyText("Prompt body", currentPrompt.body)}>
              Copy body
            </button>
          </div>
          <pre className="prompt-body">{currentPrompt.body}</pre>
        </article>

        <aside className="detail-sidebar">
          <div className="detail-panel">
            <div className="section-heading">
              <h3>Metadata</h3>
              <button
                type="button"
                className="text-button"
                onClick={() =>
                    copyText(
                      "Metadata",
                      [
                      `Title: ${currentPrompt.title}`,
                      `Category: ${category?.name ?? "Prompt"}`,
                      `Folder: ${folder?.name ?? "None"}`,
                      `Version: ${currentPrompt.version}`,
                      `Variables: ${variables}`,
                      `Tags: ${currentPrompt.tags.join(", ") || "None"}`
                    ].join("\n")
                  )
                }
              >
                Copy metadata
              </button>
            </div>
            <dl className="meta-list">
              <div>
                <dt>Folder</dt>
                <dd>{folder?.name ?? "None"}</dd>
              </div>
              <div>
                <dt>Category</dt>
                <dd>{category?.name ?? "None"}</dd>
              </div>
              <div>
                <dt>Version</dt>
                <dd>{currentPrompt.version}</dd>
              </div>
              <div>
                <dt>Variables</dt>
                <dd>{variables}</dd>
              </div>
            </dl>
          </div>

          <div className="detail-panel">
            <div className="section-heading">
              <h3>Notes</h3>
                <button
                  type="button"
                  className="text-button"
                  onClick={() => copyText("Notes", currentPrompt.notes || "No notes saved yet.")}
                >
                Copy notes
                </button>
              </div>
            <p>{currentPrompt.notes || "No notes saved yet."}</p>
          </div>

          <div className="detail-panel">
            <h3>Tags</h3>
            <div className="tag-row">
              {currentPrompt.isFavorite ? <span className="tag-chip tag-chip-favorite">Favorite</span> : null}
              {currentPrompt.tags.length > 0 ? (
                currentPrompt.tags.map((tag) => (
                  <span key={tag} className="tag-chip">
                    {tag}
                  </span>
                ))
              ) : (
                <p>No tags yet.</p>
              )}
            </div>
          </div>

          <div className="detail-panel">
            <h3>Danger zone</h3>
            <p>Delete this prompt if it is no longer useful. The library view keeps a one-step undo banner.</p>
            <div className="card-actions">
              {confirmDelete ? (
                <>
                  <button
                    type="button"
                    className="danger-button"
                    onClick={() => {
                      deletePrompt(currentPrompt.id);
                      router.push("/library");
                      router.refresh();
                    }}
                  >
                    Confirm delete
                  </button>
                  <button type="button" className="ghost-button" onClick={() => setConfirmDelete(false)}>
                    Cancel
                  </button>
                </>
              ) : (
                <button type="button" className="ghost-button" onClick={() => setConfirmDelete(true)}>
                  Delete prompt
                </button>
              )}
            </div>
          </div>
        </aside>
      </div>

      <section className="detail-panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Version history</p>
            <h3>Compare prompt iterations</h3>
          </div>
          <div className="card-actions">
            <button type="button" className="secondary-button" onClick={restoreVersion} disabled={!compareVersion}>
              Restore version
            </button>
            <button type="button" className="ghost-button" onClick={duplicateVersion} disabled={!compareVersion}>
              Duplicate
            </button>
          </div>
        </div>

        {prompt.versionHistory.length > 0 ? (
          <div className="version-workspace">
            <label className="field">
              <span>Previous version</span>
            <select
              value={compareVersion?.id ?? ""}
              onChange={(event) => setSelectedVersionId(event.target.value)}
            >
              {currentPrompt.versionHistory.map((version, index) => (
                <option key={version.id} value={version.id}>
                    Version {currentPrompt.version - index - 1} saved {formatDateTime(version.savedAt)}
                </option>
              ))}
            </select>
            </label>

            {compareVersion ? (
              <>
                <dl className="version-meta">
                  <div>
                    <dt>Saved</dt>
                    <dd>{formatDateTime(compareVersion.savedAt)}</dd>
                  </div>
                  <div>
                    <dt>Tags</dt>
                    <dd>{compareVersion.tags.join(", ") || "None"}</dd>
                  </div>
                  <div>
                    <dt>Folder</dt>
                    <dd>{data.folders.find((item) => item.id === compareVersion.folderId)?.name ?? "None"}</dd>
                  </div>
                  <div>
                    <dt>Category</dt>
                    <dd>{data.categories.find((item) => item.id === compareVersion.categoryId)?.name ?? "None"}</dd>
                  </div>
                </dl>

                <div className="compare-grid">
                  <article className="compare-panel">
                  <div className="section-heading">
                      <h4>Current v{currentPrompt.version}</h4>
                      <button type="button" className="text-button" onClick={() => copyText("Current version", currentPrompt.body)}>
                        Copy
                      </button>
                    </div>
                    <pre className="prompt-body compact-body">{currentPrompt.body}</pre>
                    <p>{currentPrompt.notes || "No notes saved on the current version."}</p>
                  </article>

                  <article className="compare-panel">
                    <div className="section-heading">
                      <h4>Previous version</h4>
                      <button
                        type="button"
                        className="text-button"
                        onClick={() => copyText("Previous version", compareVersion.body)}
                      >
                        Copy
                      </button>
                    </div>
                    <pre className="prompt-body compact-body">{compareVersion.body}</pre>
                    <p>{compareVersion.notes || "No notes saved on this version."}</p>
                  </article>
                </div>
              </>
            ) : null}
          </div>
        ) : (
          <p>Version history appears after editing or saving an optimized prompt as a new version.</p>
        )}
      </section>
    </section>
  );
}
