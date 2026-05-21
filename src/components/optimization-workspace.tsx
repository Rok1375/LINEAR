"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState, useSyncExternalStore } from "react";
import {
  getPromptLibraryData,
  savePrompt,
  subscribeToPromptStore,
  touchPrompt
} from "@/lib/prompt-store";

type OptimizationTone = "clear" | "direct" | "warm" | "executive" | "technical";
type OutputFormat = "polished" | "structured" | "checklist" | "template";

type OptimizationDraft = {
  promptBody: string;
  rationale: string[];
  model?: string;
  requestKey: string;
};

const toneLabels: Record<OptimizationTone, string> = {
  clear: "Clear",
  direct: "Direct",
  warm: "Warm",
  executive: "Executive",
  technical: "Technical"
};

const formatLabels: Record<OutputFormat, string> = {
  polished: "Polished prompt",
  structured: "Structured sections",
  checklist: "Checklist",
  template: "Reusable template"
};

function getInitialPromptId() {
  if (typeof window === "undefined") {
    return "";
  }

  const params = new URLSearchParams(window.location.search);
  return params.get("prompt") ?? params.get("promptId") ?? "";
}

function buildRequestKey(input: {
  promptId: string;
  goal: string;
  targetModel: string;
  tone: OptimizationTone;
  constraints: string;
  outputFormat: OutputFormat;
  generationMode: "landing_page" | "full_site";
}) {
  return JSON.stringify(input);
}

export function OptimizationWorkspace() {
  const router = useRouter();
  const data = useSyncExternalStore(subscribeToPromptStore, getPromptLibraryData, getPromptLibraryData);
  const [selectedPromptId, setSelectedPromptId] = useState(() => getInitialPromptId());
  const [goal, setGoal] = useState("Make the prompt more reliable and easier to reuse.");
  const [targetModel, setTargetModel] = useState("General LLM");
  const [tone, setTone] = useState<OptimizationTone>("clear");
  const [constraints, setConstraints] = useState("");
  const [outputFormat, setOutputFormat] = useState<OutputFormat>("structured");
  const [generationMode, setGenerationMode] = useState<"landing_page" | "full_site">("landing_page");
  const [draft, setDraft] = useState<OptimizationDraft | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationError, setOptimizationError] = useState("");
  const [status, setStatus] = useState("");
  const effectivePromptId = selectedPromptId || data.prompts[0]?.id || "";

  const selectedPrompt = useMemo(() => {
    return data.prompts.find((prompt) => prompt.id === effectivePromptId) ?? null;
  }, [data.prompts, effectivePromptId]);

  const requestKey = useMemo(
    () =>
      buildRequestKey({
        promptId: effectivePromptId,
        goal,
        targetModel,
        tone,
        constraints,
        outputFormat,
        generationMode
      }),
    [constraints, effectivePromptId, goal, outputFormat, targetModel, tone, generationMode]
  );

  const visibleDraft = draft?.requestKey === requestKey ? draft : null;

  async function handleRunOptimization() {
    if (!selectedPrompt) {
      setStatus("Choose a saved prompt before running optimization.");
      return;
    }

    setIsOptimizing(true);
    setOptimizationError("");
    setStatus("Optimizing prompt...");

    try {
      const response = await fetch("/api/optimize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          promptBody: selectedPrompt.body,
          goal,
          targetModel,
          tone: toneLabels[tone],
          constraints,
          outputFormat: formatLabels[outputFormat],
          generationMode
        })
      });
      const responseText = await response.text();
      const payload = responseText
        ? (JSON.parse(responseText) as Partial<OptimizationDraft> & { error?: string })
        : ({ error: "Optimization service returned an empty response." } as Partial<OptimizationDraft> & {
            error?: string;
          });

      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to optimize this prompt.");
      }

      if (!payload.promptBody || !Array.isArray(payload.rationale)) {
        throw new Error("The optimization response was incomplete.");
      }

      touchPrompt(selectedPrompt.id);
      setDraft({
        promptBody: payload.promptBody,
        rationale: payload.rationale,
        model: payload.model,
        requestKey
      });
      setOptimizationError("");
      setStatus("Optimization draft ready for review.");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to optimize this prompt.";
      setOptimizationError(message);
      setStatus("");
    } finally {
      setIsOptimizing(false);
    }
  }

  async function handleCopy() {
    if (!visibleDraft) {
      return;
    }

    try {
      await navigator.clipboard.writeText(visibleDraft.promptBody);
      setStatus("Optimized prompt copied.");
    } catch {
      setStatus("Copy failed. Select the optimized prompt and copy it manually.");
    }
  }

  function handleSaveAsVersion() {
    if (!selectedPrompt || !visibleDraft) {
      return;
    }

    const notes = [
      selectedPrompt.notes,
      "",
      "Optimization note:",
      `Goal: ${goal.trim() || "Improve prompt quality"}`,
      `Target model: ${targetModel}`,
      `Tone: ${toneLabels[tone]}`,
      constraints.trim() ? `Constraints: ${constraints.trim()}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    const updated = savePrompt(
      {
        title: selectedPrompt.title,
        description: selectedPrompt.description,
        body: visibleDraft.promptBody,
        notes,
        tags: selectedPrompt.tags,
        categoryId: selectedPrompt.categoryId,
        folderId: selectedPrompt.folderId,
        generationMode
      },
      selectedPrompt.id
    );

    setStatus("Saved optimized prompt as a new version.");
    router.push(`/prompts/${updated.id}`);
    router.refresh();
  }

  function handleReject() {
    setDraft(null);
    setOptimizationError("");
    setStatus("Optimization draft rejected. Adjust the inputs and run it again.");
  }

  return (
    <section className="panel-stack">
      <div className="hero-panel">
        <div>
          <p className="eyebrow">Optimization</p>
          <h2>Refine a prompt before you reuse it.</h2>
          <p className="panel-copy">
            Choose a saved prompt, set the improvement goal, then review the proposed revision before saving it as a
            new version.
          </p>
        </div>

        <Link href="/library" className="secondary-button">
          Back to library
        </Link>
      </div>

      {status ? (
        <div className="info-banner" role="status">
          {status}
        </div>
      ) : null}

      <div className="optimization-grid">
        <form className="form-panel" onSubmit={(event) => event.preventDefault()} aria-busy={isOptimizing}>
          <div className="section-heading">
            <h3>Request</h3>
            {selectedPrompt ? (
              <Link href={`/prompts/${selectedPrompt.id}`} className="text-button">
                Open source
              </Link>
            ) : null}
          </div>

          <div className="form-grid">
            <label className="field field-wide">
              <span>Saved prompt</span>
              <select value={selectedPromptId} onChange={(event) => setSelectedPromptId(event.target.value)}>
                {data.prompts.length === 0 ? <option value="">No prompts saved yet</option> : null}
                {data.prompts.map((prompt) => (
                  <option key={prompt.id} value={prompt.id}>
                    {prompt.title}
                  </option>
                ))}
              </select>
            </label>

            <label className="field field-wide">
              <span>Optimization goal</span>
              <input
                value={goal}
                onChange={(event) => setGoal(event.target.value)}
                placeholder="Improve clarity, make reusable, add structure"
              />
            </label>

            <label className="field">
              <span>Target model</span>
              <select value={targetModel} onChange={(event) => setTargetModel(event.target.value)}>
                <option>General LLM</option>
                <option>ChatGPT</option>
                <option>Claude</option>
                <option>Gemini</option>
                <option>Image model</option>
                <option>Video model</option>
              </select>
            </label>

            <label className="field">
              <span>Tone</span>
              <select value={tone} onChange={(event) => setTone(event.target.value as OptimizationTone)}>
                {Object.entries(toneLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>

            <label className="field">
              <span>Output format</span>
              <select value={outputFormat} onChange={(event) => setOutputFormat(event.target.value as OutputFormat)}>
                {Object.entries(formatLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>

            <label className="field">
              <span>Generation Mode</span>
              <select value={generationMode} onChange={(event) => setGenerationMode(event.target.value as "landing_page" | "full_site")}>
                <option value="landing_page">Landing Page</option>
                <option value="full_site">Full Site</option>
              </select>
            </label>

            <label className="field field-wide">
              <span>Constraints</span>
              <textarea
                value={constraints}
                onChange={(event) => setConstraints(event.target.value)}
                placeholder="Preserve variables, keep under 500 words, avoid legal claims"
                rows={4}
              />
            </label>
          </div>

          <div className="form-actions">
            <button type="button" className="primary-button" onClick={handleRunOptimization} disabled={isOptimizing}>
              {isOptimizing ? "Optimizing..." : "Run optimization"}
            </button>
            <button type="button" className="secondary-button" onClick={handleReject} disabled={!visibleDraft || isOptimizing}>
              Reject draft
            </button>
          </div>

          {optimizationError ? (
            <div className="error-panel" role="alert">
              <strong>Optimization failed.</strong>
              <p>{optimizationError}</p>
              <button type="button" className="secondary-button fit-button" onClick={handleRunOptimization} disabled={isOptimizing}>
                Retry
              </button>
            </div>
          ) : null}
        </form>

        <aside className="detail-sidebar">
          <section className="detail-panel">
            <h3>Source prompt</h3>
            {selectedPrompt ? (
              <>
                <p>{selectedPrompt.description || "No description saved yet."}</p>
                <pre className="prompt-body compact-body">{selectedPrompt.body}</pre>
              </>
            ) : (
              <p>Create a prompt first, then return here to optimize it.</p>
            )}
          </section>

          <section className="detail-panel">
            <div className="section-heading">
              <div>
                <h3>Optimized draft</h3>
                {visibleDraft?.model ? <p className="mini-copy">Generated with {visibleDraft.model}</p> : null}
              </div>
              <button type="button" className="text-button" onClick={handleCopy} disabled={!visibleDraft}>
                Copy
              </button>
            </div>
            {visibleDraft ? (
              <pre className="prompt-body">{visibleDraft.promptBody}</pre>
            ) : isOptimizing ? (
              <p>Optimizing the prompt with the service...</p>
            ) : (
              <p>Run optimization to generate a reviewable draft without changing the saved prompt.</p>
            )}
          </section>

          <section className="detail-panel">
            <h3>Change summary</h3>
            {visibleDraft ? (
              <ul className="rationale-list">
                {visibleDraft.rationale.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>The summary will explain what changed before you accept it.</p>
            )}
            <div className="form-actions">
              <button type="button" className="primary-button" onClick={handleSaveAsVersion} disabled={!visibleDraft || isOptimizing}>
                Save as new version
              </button>
              <button type="button" className="ghost-button" onClick={handleReject} disabled={!visibleDraft || isOptimizing}>
                Reject
              </button>
            </div>
          </section>
        </aside>
      </div>
    </section>
  );
}
