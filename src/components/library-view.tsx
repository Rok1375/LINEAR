"use client";

import Link from "next/link";
import { useMemo, useState, useSyncExternalStore } from "react";
import {
  createFolder,
  deleteFolder,
  deletePrompt,
  getLastDeletedPrompt,
  getPromptLibraryData,
  renameFolder,
  restoreLastDeletedPrompt,
  subscribeToPromptStore,
  togglePromptFavorite
} from "@/lib/prompt-store";

type SortMode = "updated" | "created" | "recent" | "alphabetical";

function formatDate(date: string | null) {
  if (!date) {
    return "Not opened yet";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric"
  }).format(new Date(date));
}

export function LibraryView() {
  const [query, setQuery] = useState("");
  const [folderId, setFolderId] = useState("all");
  const [categoryId, setCategoryId] = useState("all");
  const [tag, setTag] = useState("all");
  const [sortMode, setSortMode] = useState<SortMode>("updated");
  const [folderName, setFolderName] = useState("");
  const [folderDescription, setFolderDescription] = useState("");
  const [editingFolderId, setEditingFolderId] = useState("");
  const [deletingPromptId, setDeletingPromptId] = useState("");
  const [deletingFolderId, setDeletingFolderId] = useState("");
  const [bannerMessage, setBannerMessage] = useState("");
  const data = useSyncExternalStore(subscribeToPromptStore, getPromptLibraryData, getPromptLibraryData);

  const tags = useMemo(() => {
    return Array.from(new Set(data.prompts.flatMap((prompt) => prompt.tags))).sort((a, b) => a.localeCompare(b));
  }, [data.prompts]);

  const filteredPrompts = useMemo(() => {
    const prompts = data.prompts.filter((prompt) => {
      const category = data.categories.find((item) => item.id === prompt.categoryId);
      const folder = data.folders.find((item) => item.id === prompt.folderId);
      const matchesFolder = folderId === "all" || prompt.folderId === folderId;
      const matchesCategory = categoryId === "all" || prompt.categoryId === categoryId;
      const matchesTag = tag === "all" || prompt.tags.includes(tag);
      const haystack = [
        prompt.title,
        prompt.description,
        prompt.body,
        prompt.notes,
        category?.name,
        folder?.name,
        prompt.tags.join(" ")
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery = query.trim().length === 0 || haystack.includes(query.trim().toLowerCase());
      return matchesFolder && matchesCategory && matchesTag && matchesQuery;
    });

    return prompts.sort((a, b) => {
      if (sortMode === "alphabetical") {
        return a.title.localeCompare(b.title);
      }

      if (sortMode === "created") {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }

      if (sortMode === "recent") {
        return new Date(b.lastUsedAt ?? 0).getTime() - new Date(a.lastUsedAt ?? 0).getTime();
      }

      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });
  }, [categoryId, data.categories, data.folders, data.prompts, folderId, query, sortMode, tag]);

  const favoritePrompts = useMemo(() => data.prompts.filter((prompt) => prompt.isFavorite).slice(0, 4), [data.prompts]);
  const recentPrompts = useMemo(() => {
    return data.prompts
      .filter((prompt) => prompt.lastUsedAt)
      .sort((a, b) => new Date(b.lastUsedAt ?? 0).getTime() - new Date(a.lastUsedAt ?? 0).getTime())
      .slice(0, 4);
  }, [data.prompts]);

  const deletedPrompt = getLastDeletedPrompt();

  function resetFolderForm() {
    setFolderName("");
    setFolderDescription("");
    setEditingFolderId("");
  }

  function resetFilters() {
    setQuery("");
    setFolderId("all");
    setCategoryId("all");
    setTag("all");
    setSortMode("updated");
  }

  function handleFolderSubmit() {
    if (!folderName.trim()) {
      return;
    }

    if (editingFolderId) {
      renameFolder(editingFolderId, folderName.trim(), folderDescription.trim());
      setBannerMessage("Folder updated.");
    } else {
      createFolder(folderName.trim(), folderDescription.trim());
      setBannerMessage("Folder created.");
    }

    resetFolderForm();
  }

  return (
    <section className="panel-stack">
      <div className="hero-panel">
        <div>
          <p className="eyebrow">Library</p>
          <h2>Find the right prompt fast.</h2>
          <p className="panel-copy">
            Search by phrase, skim metadata, and reopen a saved prompt without digging through old chats.
          </p>
        </div>

        <Link href="/prompts/new" className="primary-button">
          Create prompt
        </Link>
      </div>

      <div className="toolbar-panel">
        <label className="field">
          <span>Search</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search titles, body text, and tags"
          />
        </label>

        <label className="field">
          <span>Folder</span>
          <select value={folderId} onChange={(event) => setFolderId(event.target.value)}>
            <option value="all">All folders</option>
            {data.folders.map((folder) => (
              <option key={folder.id} value={folder.id}>
                {folder.name}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>Category</span>
          <select value={categoryId} onChange={(event) => setCategoryId(event.target.value)}>
            <option value="all">All categories</option>
            {data.categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>Tag</span>
          <select value={tag} onChange={(event) => setTag(event.target.value)}>
            <option value="all">All tags</option>
            {tags.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>Sort</span>
          <select value={sortMode} onChange={(event) => setSortMode(event.target.value as SortMode)}>
            <option value="updated">Recently updated</option>
            <option value="recent">Recently opened</option>
            <option value="created">Newest created</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </label>
      </div>

      {deletedPrompt ? (
        <div className="info-banner info-banner-actions" role="status">
          <span>
            Deleted <strong>{deletedPrompt.title}</strong>.
          </span>
          <button type="button" className="secondary-button" onClick={() => restoreLastDeletedPrompt()}>
            Undo delete
          </button>
        </div>
      ) : null}

      {bannerMessage ? (
        <div className="info-banner info-banner-actions" role="status">
          <span>{bannerMessage}</span>
          <button type="button" className="secondary-button" onClick={() => setBannerMessage("")}>
            Dismiss
          </button>
        </div>
      ) : null}

      {favoritePrompts.length > 0 || recentPrompts.length > 0 ? (
        <div className="shortcut-grid" aria-label="Prompt shortcuts">
          {favoritePrompts.length > 0 ? (
            <section className="shortcut-panel">
              <h3>Favorites</h3>
              <div className="shortcut-list">
                {favoritePrompts.map((prompt) => (
                  <Link key={prompt.id} href={`/prompts/${prompt.id}`} className="shortcut-link">
                    <span>{prompt.title}</span>
                    <small>{formatDate(prompt.updatedAt)}</small>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          {recentPrompts.length > 0 ? (
            <section className="shortcut-panel">
              <h3>Recently opened</h3>
              <div className="shortcut-list">
                {recentPrompts.map((prompt) => (
                  <Link key={prompt.id} href={`/prompts/${prompt.id}`} className="shortcut-link">
                    <span>{prompt.title}</span>
                    <small>{formatDate(prompt.lastUsedAt)}</small>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      ) : null}

      {filteredPrompts.length === 0 ? (
        <div className="empty-panel">
          <h3>No prompts match this view.</h3>
          <p>Try a broader search, switch folders, or create a new prompt to seed the library.</p>
          <button type="button" className="secondary-button" onClick={resetFilters}>
            Clear filters
          </button>
        </div>
      ) : (
        <div className="prompt-grid">
          {filteredPrompts.map((prompt) => {
            const category = data.categories.find((item) => item.id === prompt.categoryId);
            const folder = data.folders.find((item) => item.id === prompt.folderId);

            return (
              <article key={prompt.id} className="prompt-card">
                <div className="card-topline">
                  <span>{category?.name ?? "Uncategorized"}</span>
                  <span>{formatDate(prompt.lastUsedAt)}</span>
                </div>
                <div className="card-actions">
                  <Link href={`/prompts/${prompt.id}`}>
                    <h3>{prompt.title}</h3>
                  </Link>
                  <button type="button" className="ghost-button" onClick={() => togglePromptFavorite(prompt.id)}>
                    {prompt.isFavorite ? "Unfavorite" : "Favorite"}
                    <span className="sr-only"> {prompt.title}</span>
                  </button>
                </div>
                <p>{prompt.description || prompt.body}</p>
                <div className="meta-row">
                  <span>{folder?.name ?? "No folder"}</span>
                  <span>v{prompt.version}</span>
                </div>
                <div className="tag-row" aria-label="Prompt tags">
                  {prompt.tags.map((tag) => (
                    <span key={tag} className="tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="card-actions">
                  <Link href={`/prompts/${prompt.id}`} className="secondary-button">
                    Open
                  </Link>
                  {deletingPromptId === prompt.id ? (
                    <>
                      <button
                        type="button"
                        className="danger-button"
                        onClick={() => {
                          deletePrompt(prompt.id);
                          setDeletingPromptId("");
                          setBannerMessage("Prompt deleted from the library.");
                        }}
                      >
                        Confirm delete
                      </button>
                      <button type="button" className="ghost-button" onClick={() => setDeletingPromptId("")}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button type="button" className="ghost-button" onClick={() => setDeletingPromptId(prompt.id)}>
                      Delete
                      <span className="sr-only"> {prompt.title}</span>
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}

      <section className="detail-panel">
        <div className="card-actions">
          <div>
            <p className="eyebrow">Folders</p>
            <h3>Manage prompt organization</h3>
          </div>
          {editingFolderId ? (
            <button type="button" className="ghost-button" onClick={resetFolderForm}>
              Stop editing
            </button>
          ) : null}
        </div>

        <div className="form-grid compact-grid">
          <label className="field">
            <span>Folder name</span>
            <input value={folderName} onChange={(event) => setFolderName(event.target.value)} placeholder="Growth" />
          </label>

          <label className="field">
            <span>Description</span>
            <input
              value={folderDescription}
              onChange={(event) => setFolderDescription(event.target.value)}
              placeholder="What belongs in this folder?"
            />
          </label>
        </div>

        <div className="form-actions">
          <button type="button" className="primary-button" onClick={handleFolderSubmit}>
            {editingFolderId ? "Save folder" : "Create folder"}
          </button>
        </div>

        <div className="folder-list">
          {data.folders.map((folder) => {
            const promptCount = data.prompts.filter((prompt) => prompt.folderId === folder.id).length;
            const fallbackFolder = data.folders.find((item) => item.id !== folder.id);

            return (
              <article key={folder.id} className="folder-row">
                <div>
                  <strong>{folder.name}</strong>
                  <p>{folder.description}</p>
                  <span className="folder-count">{promptCount} prompt(s)</span>
                </div>

                <div className="card-actions">
                  <button
                    type="button"
                    className="ghost-button"
                    onClick={() => {
                      setEditingFolderId(folder.id);
                      setFolderName(folder.name);
                      setFolderDescription(folder.description);
                    }}
                  >
                    Rename
                  </button>
                  {deletingFolderId === folder.id ? (
                    <>
                      <button
                        type="button"
                        className="danger-button"
                        onClick={() => {
                          const destination = deleteFolder(folder.id);
                          setDeletingFolderId("");
                          setBannerMessage(
                            promptCount > 0
                              ? `Folder removed. ${promptCount} prompt(s) moved to ${destination.name}.`
                              : "Folder removed."
                          );
                          if (folderId === folder.id) {
                            setFolderId("all");
                          }
                        }}
                      >
                        Confirm delete
                      </button>
                      <button type="button" className="ghost-button" onClick={() => setDeletingFolderId("")}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      className="ghost-button"
                      onClick={() => setDeletingFolderId(folder.id)}
                      disabled={!fallbackFolder && promptCount > 0}
                      title={!fallbackFolder && promptCount > 0 ? "Create another folder before deleting this one." : undefined}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </section>
  );
}
