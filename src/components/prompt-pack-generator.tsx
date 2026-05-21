"use client";

import { useMemo, useState } from "react";
import {
  DEFAULT_GENERATION_MODE,
  ProjectMode,
  generatePromptPack
} from "@/lib/prompt-pack-generator";

const modeOptions: Array<{ value: ProjectMode; label: string; description: string }> = [
  {
    value: "landing_page",
    label: "Landing page",
    description: "One polished page with section-by-section prompts."
  },
  {
    value: "full_site",
    label: "Full site",
    description: "Sitemap, shared layout, page roles, and page-by-page prompts."
  }
];

export function PromptPackGenerator() {
  const [mode, setMode] = useState<ProjectMode>(DEFAULT_GENERATION_MODE);
  const [projectName, setProjectName] = useState("LaunchPad");
  const [audience, setAudience] = useState("solo founders validating software ideas");
  const [offer, setOffer] = useState("a planning workspace that turns rough ideas into testable launch plans");
  const [tone, setTone] = useState("calm, focused, credible");
  const [primaryAction, setPrimaryAction] = useState("start a free workspace");
  const [generated, setGenerated] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");

  const promptPack = useMemo(
    () =>
      generatePromptPack({
        mode,
        projectName,
        audience,
        offer,
        tone,
        primaryAction
      }),
    [audience, mode, offer, primaryAction, projectName, tone]
  );

  async function copyReport() {
    try {
      await navigator.clipboard.writeText(promptPack.reportMarkdown);
      setCopyStatus("Prompt pack report copied.");
    } catch {
      setCopyStatus("Copy failed. Select the report text and copy it manually.");
    }
  }

  return (
    <section className="panel-stack">
      <div className="hero-panel">
        <div>
          <p className="eyebrow">Generator</p>
          <h2>Choose the project shape before the prompts.</h2>
          <p className="panel-copy">
            Generate a prompt pack for either a focused landing page or a full website/app without mixing the two scopes.
          </p>
        </div>
        <button type="button" className="primary-button" onClick={() => setGenerated(true)}>
          Generate prompt pack
        </button>
      </div>

      <section className="form-panel" aria-labelledby="generation-mode-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Mode</p>
            <h3 id="generation-mode-title">Project mode</h3>
          </div>
          <span className="tag-chip">Default: landing page</span>
        </div>

        <div className="mode-selector" role="radiogroup" aria-label="Project generation mode">
          {modeOptions.map((option) => (
            <label key={option.value} className={mode === option.value ? "mode-option mode-option-active" : "mode-option"}>
              <input
                type="radio"
                name="project-mode"
                value={option.value}
                checked={mode === option.value}
                onChange={() => {
                  setMode(option.value);
                  setGenerated(false);
                  setCopyStatus("");
                }}
              />
              <span>
                <strong>{option.label}</strong>
                <small>{option.description}</small>
              </span>
            </label>
          ))}
        </div>
      </section>

      <section className="form-panel" aria-labelledby="prompt-pack-inputs-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Inputs</p>
            <h3 id="prompt-pack-inputs-title">Prompt pack context</h3>
          </div>
        </div>

        <div className="form-grid">
          <label className="field">
            <span>Project name</span>
            <input value={projectName} onChange={(event) => setProjectName(event.target.value)} />
          </label>
          <label className="field">
            <span>Audience</span>
            <input value={audience} onChange={(event) => setAudience(event.target.value)} />
          </label>
          <label className="field field-wide">
            <span>Offer</span>
            <textarea rows={3} value={offer} onChange={(event) => setOffer(event.target.value)} />
          </label>
          <label className="field">
            <span>Tone</span>
            <input value={tone} onChange={(event) => setTone(event.target.value)} />
          </label>
          <label className="field">
            <span>Primary action</span>
            <input value={primaryAction} onChange={(event) => setPrimaryAction(event.target.value)} />
          </label>
        </div>
      </section>

      {generated ? (
        <section className="detail-panel" aria-labelledby="generated-pack-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{promptPack.modeLabel}</p>
              <h3 id="generated-pack-title">Generated prompt pack</h3>
              <p className="mini-copy">Report filename: {promptPack.reportFilename}</p>
            </div>
            <button type="button" className="secondary-button" onClick={copyReport}>
              Copy report
            </button>
          </div>

          {copyStatus ? (
            <div className="info-banner" role="status">
              {copyStatus}
            </div>
          ) : null}

          <div className="prompt-pack-grid">
            <article className="compare-panel">
              <h4>{promptPack.structureTitle}</h4>
              <ul className="rationale-list">
                {promptPack.structureItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="compare-panel">
              <h4>Validation gates</h4>
              <ul className="rationale-list">
                {promptPack.validationGates.map((gate) => (
                  <li key={gate}>{gate}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="prompt-pack-output">
            <article className="compare-panel">
              <h4>Stitch design brief</h4>
              <pre className="prompt-body compact-body">{promptPack.stitchBrief}</pre>
            </article>

            <article className="compare-panel">
              <h4>Image prompts</h4>
              <pre className="prompt-body compact-body">{promptPack.imagePrompts.map((prompt) => `- ${prompt}`).join("\n")}</pre>
            </article>

            <article className="compare-panel">
              <h4>Final agent prompt</h4>
              <pre className="prompt-body compact-body">{promptPack.finalAgentPrompt}</pre>
            </article>

            <article className="compare-panel">
              <h4>Generated report</h4>
              <pre className="prompt-body compact-body">{promptPack.reportMarkdown}</pre>
            </article>
          </div>
        </section>
      ) : (
        <div className="empty-panel">
          <h3>No prompt pack generated yet.</h3>
          <p>Select a mode, review the context, and generate the pack when the scope is right.</p>
        </div>
      )}
    </section>
  );
}
