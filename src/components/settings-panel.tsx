"use client";

import { useState, useSyncExternalStore } from "react";
import {
  getPromptLibraryData,
  resetPromptLibraryData,
  subscribeToPromptStore
} from "@/lib/prompt-store";

export function SettingsPanel() {
  const data = useSyncExternalStore(subscribeToPromptStore, getPromptLibraryData, getPromptLibraryData);
  const [status, setStatus] = useState("");

  return (
    <section className="panel-stack">
      <div className="hero-panel">
        <div>
          <p className="eyebrow">Settings</p>
          <h2>Storage and workspace preferences</h2>
          <p className="panel-copy">
            Reset local development data back to the starter prompt library when you need a clean demo state.
          </p>
        </div>
      </div>

      {status ? (
        <div className="info-banner" role="status">
          {status}
        </div>
      ) : null}

      <section className="detail-panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Local data</p>
            <h3>Seed library</h3>
          </div>
          <button
            type="button"
            className="secondary-button"
            onClick={() => {
              const seeded = resetPromptLibraryData();
              setStatus(`Reset complete. Loaded ${seeded.prompts.length} starter prompts.`);
            }}
          >
            Reset seed data
          </button>
        </div>
        <p>
          Current local workspace: {data.prompts.length} prompts, {data.categories.length} categories, and{" "}
          {data.folders.length} folders.
        </p>
      </section>
    </section>
  );
}
