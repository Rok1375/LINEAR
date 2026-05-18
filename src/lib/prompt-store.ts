"use client";

import {
  PromptDraft,
  PromptInput,
  PromptLibraryData,
  PromptRecord,
  PromptVersion
} from "@/lib/prompt-schema";

const STORAGE_KEY = "prompt-library-data";
const DRAFT_PREFIX = "prompt-library-draft";
const DELETED_PROMPT_KEY = "prompt-library-deleted-prompt";
const STORE_EVENT = "prompt-library-updated";

const seedData: PromptLibraryData = {
  categories: [
    {
      id: "website-design",
      name: "Website Design",
      description: "Prompts for pages, dashboards, and product UI."
    },
    {
      id: "image-generation",
      name: "Image Generation",
      description: "Prompts for product photos, ads, hero backgrounds, and visual assets."
    },
    {
      id: "video-generation",
      name: "Video Generation",
      description: "Prompts for video scripts, demos, hooks, and concepts."
    },
    {
      id: "ai-agents",
      name: "AI Agents",
      description: "Prompts for agent planning, Codex skills, and workflow triage."
    }
  ],
  folders: [
    {
      id: "website-design",
      name: "Website Design",
      description: "Page, app screen, and product UI prompts."
    },
    {
      id: "image-generation",
      name: "Image Generation",
      description: "Visual generation prompts for products and campaigns."
    },
    {
      id: "video-generation",
      name: "Video Generation",
      description: "Video scripts, demos, and social concepts."
    },
    {
      id: "ai-agents",
      name: "AI Agents",
      description: "Agent workflow and Codex operating prompts."
    }
  ],
  prompts: [
    {
      id: "website-design-landing-page-v1",
      title: "Landing Page Design Brief",
      body:
        "Design a production-quality landing page for `{product_name}`, a `{product_type}` for `{target_audience}`. The page should communicate the core offer clearly, build trust quickly, and guide visitors toward `{primary_action}`.\n\nInclude a first viewport with a direct headline, supporting copy, primary and secondary actions, and a strong visual direction. Then define sections for key benefits, proof, workflow or features, pricing or plan teaser if relevant, FAQ, and final call to action. Keep the design practical, responsive, accessible, and easy for a developer to implement.\n\nAvoid generic startup language. Use concrete details from the inputs and make the page feel specific to the product.",
      description: "Creates a concrete landing page brief with structure, copy direction, proof, and accessibility notes.",
      notes: "Source: prompt-library/website-design/website-design-landing-page-v1.md\nUse case: Landing page",
      tags: ["website-design", "landing-page", "conversion", "responsive", "product-marketing"],
      categoryId: "website-design",
      folderId: "website-design",
      variables: ["product_name", "product_type", "target_audience", "primary_action", "brand_tone", "key_benefits", "proof_points"],
      isFavorite: true,
      createdAt: "2026-05-17T20:00:00.000Z",
      updatedAt: "2026-05-17T20:00:00.000Z",
      lastUsedAt: "2026-05-18T00:02:00.000Z",
      version: 1,
      versionHistory: []
    },
    {
      id: "website-design-dashboard-v1",
      title: "Dashboard UI Design Brief",
      body:
        "Design a focused dashboard for `{product_name}` that helps `{user_role}` monitor `{primary_metric}` and complete `{top_tasks}` efficiently. Prioritize scanability, hierarchy, and repeat use over decorative layout.\n\nDefine the navigation model, primary dashboard regions, data cards, tables or lists, filters, empty states, loading states, and responsive behavior. Include notes on which actions should be prominent and which should be secondary. Use restrained visual styling appropriate for an operational product.",
      description: "Plans an operational dashboard that favors scanning, task completion, and realistic UI states.",
      notes: "Source: prompt-library/website-design/website-design-dashboard-v1.md\nUse case: Dashboard",
      tags: ["website-design", "dashboard", "saas", "data-ui", "responsive"],
      categoryId: "website-design",
      folderId: "website-design",
      variables: ["product_name", "user_role", "primary_metric", "top_tasks", "data_sources", "alert_conditions"],
      isFavorite: false,
      createdAt: "2026-05-17T20:10:00.000Z",
      updatedAt: "2026-05-17T20:10:00.000Z",
      lastUsedAt: null,
      version: 1,
      versionHistory: []
    },
    {
      id: "website-design-pricing-page-v1",
      title: "Pricing Page Design Brief",
      body:
        "Create a pricing page for `{product_name}` that helps `{target_audience}` choose the right plan with confidence. The page should make differences between plans clear, reduce hesitation, and support `{primary_action}`.\n\nInclude plan structure, comparison table guidance, trust signals, FAQ topics, upgrade prompts, and responsive layout. Make the recommendation logic clear without pushing every visitor toward the highest tier.",
      description: "Builds a pricing page plan with comparison logic, trust signals, FAQs, and upgrade prompts.",
      notes: "Source: prompt-library/website-design/website-design-pricing-page-v1.md\nUse case: Pricing page",
      tags: ["website-design", "pricing", "conversion", "saas", "plans"],
      categoryId: "website-design",
      folderId: "website-design",
      variables: ["product_name", "target_audience", "plans", "primary_action", "key_limitations", "trust_points"],
      isFavorite: false,
      createdAt: "2026-05-17T20:20:00.000Z",
      updatedAt: "2026-05-17T20:20:00.000Z",
      lastUsedAt: null,
      version: 1,
      versionHistory: []
    },
    {
      id: "image-generation-product-photo-v1",
      title: "Product Photo Generation Prompt",
      body:
        "Generate a high-quality product photo of `{product_name}` for `{channel}`. Show the product clearly as the main subject with `{background_style}` and `{lighting_style}`. The image should feel `{brand_tone}` and should be suitable for `{usage_context}`.\n\nPreserve the product's defining details: `{product_details}`. Avoid clutter, distorted labels, extra objects that compete with the product, unrealistic reflections, and unreadable text.",
      description: "Creates product-first image prompts with channel, lighting, background, and fidelity constraints.",
      notes: "Source: prompt-library/image-generation/image-generation-product-photo-v1.md\nUse case: Product photo",
      tags: ["image-generation", "product-photo", "ecommerce", "studio", "advertising"],
      categoryId: "image-generation",
      folderId: "image-generation",
      variables: ["product_name", "channel", "background_style", "lighting_style", "brand_tone", "usage_context", "product_details"],
      isFavorite: true,
      createdAt: "2026-05-17T20:30:00.000Z",
      updatedAt: "2026-05-17T20:30:00.000Z",
      lastUsedAt: "2026-05-18T00:04:00.000Z",
      version: 1,
      versionHistory: []
    },
    {
      id: "image-generation-hero-background-v1",
      title: "Hero Background Image Prompt",
      body:
        "Generate a website hero background for `{brand_or_product}` that supports the message `{hero_message}`. The image should feel `{mood}` and make room for readable foreground text in `{text_area}`.\n\nUse a real or realistic scene when possible. Avoid busy patterns, dark unreadable areas behind text, generic abstract gradients, and visuals that do not connect to the product or audience.",
      description: "Defines inspectable, readable hero-background imagery tied to the product message.",
      notes: "Source: prompt-library/image-generation/image-generation-hero-background-v1.md\nUse case: Hero background",
      tags: ["image-generation", "hero-background", "website", "brand", "visual-direction"],
      categoryId: "image-generation",
      folderId: "image-generation",
      variables: ["brand_or_product", "hero_message", "target_audience", "mood", "text_area", "visual_subject", "aspect_ratio"],
      isFavorite: false,
      createdAt: "2026-05-17T20:40:00.000Z",
      updatedAt: "2026-05-17T20:40:00.000Z",
      lastUsedAt: null,
      version: 1,
      versionHistory: []
    },
    {
      id: "image-generation-social-ad-v1",
      title: "Social Ad Image Prompt",
      body:
        "Create a social ad image concept for `{brand_name}` promoting `{offer}` to `{target_audience}`. The image should stop the scroll quickly, make the benefit visible, and leave space for short overlay copy if needed.\n\nUse `{visual_style}` with `{color_direction}`. Include `{main_subject}` and supporting elements that reinforce `{core_message}`. Keep the composition simple, readable at small sizes, and appropriate for `{platform}`.",
      description: "Shapes scroll-stopping ad image concepts with platform, style, subject, and message constraints.",
      notes: "Source: prompt-library/image-generation/image-generation-social-ad-v1.md\nUse case: Social ad",
      tags: ["image-generation", "social-ad", "paid-social", "creative", "campaign"],
      categoryId: "image-generation",
      folderId: "image-generation",
      variables: ["brand_name", "offer", "target_audience", "platform", "visual_style", "color_direction", "main_subject", "core_message"],
      isFavorite: false,
      createdAt: "2026-05-17T20:50:00.000Z",
      updatedAt: "2026-05-17T20:50:00.000Z",
      lastUsedAt: null,
      version: 1,
      versionHistory: []
    },
    {
      id: "video-generation-ad-script-v1",
      title: "Video Ad Script Prompt",
      body:
        "Write a short video ad script for `{product_name}` promoting `{offer}` to `{target_audience}`. The script should fit `{duration}` and use `{tone}`. Start with a strong hook, show the problem, introduce the product, demonstrate the benefit, and end with `{call_to_action}`.\n\nInclude scene-by-scene direction, voiceover, on-screen text, and visual notes. Keep the language specific, concrete, and easy to film or generate.",
      description: "Produces a short video ad structure with hook, scenes, voiceover, text, and CTA.",
      notes: "Source: prompt-library/video-generation/video-generation-ad-script-v1.md\nUse case: Ad script",
      tags: ["video-generation", "ad-script", "marketing", "short-video", "conversion"],
      categoryId: "video-generation",
      folderId: "video-generation",
      variables: ["product_name", "offer", "target_audience", "duration", "tone", "call_to_action", "platform"],
      isFavorite: true,
      createdAt: "2026-05-17T21:00:00.000Z",
      updatedAt: "2026-05-17T21:00:00.000Z",
      lastUsedAt: "2026-05-18T00:06:00.000Z",
      version: 1,
      versionHistory: []
    },
    {
      id: "video-generation-product-demo-v1",
      title: "Product Demo Video Prompt",
      body:
        "Create a product demo video plan for `{product_name}` showing how `{target_user}` completes `{workflow}`. The demo should be `{duration}` and focus on the value of the workflow rather than every feature.\n\nBreak the demo into scenes with narration, screen actions, callouts, and transitions. Include what to show, what to say, and what outcome the viewer should understand by the end.",
      description: "Plans a value-focused demo video with scenes, narration, callouts, and transitions.",
      notes: "Source: prompt-library/video-generation/video-generation-product-demo-v1.md\nUse case: Product demo",
      tags: ["video-generation", "product-demo", "walkthrough", "onboarding", "saas"],
      categoryId: "video-generation",
      folderId: "video-generation",
      variables: ["product_name", "target_user", "workflow", "duration", "key_features", "desired_takeaway"],
      isFavorite: false,
      createdAt: "2026-05-17T21:10:00.000Z",
      updatedAt: "2026-05-17T21:10:00.000Z",
      lastUsedAt: null,
      version: 1,
      versionHistory: []
    },
    {
      id: "video-generation-short-form-hook-v1",
      title: "Short-Form Hook Prompt",
      body:
        "Generate `{count}` short-form video hooks for `{topic}` aimed at `{audience}`. Each hook should fit the first `{seconds}` seconds of a video and create curiosity without clickbait.\n\nVary the hook types: contrarian insight, mistake to avoid, quick transformation, surprising stat, direct question, and before/after. Keep each hook easy to say out loud and suitable for `{platform}`.",
      description: "Creates varied short-form hooks that are specific, spoken-friendly, and platform-aware.",
      notes: "Source: prompt-library/video-generation/video-generation-short-form-hook-v1.md\nUse case: Short-form hook",
      tags: ["video-generation", "short-form", "hook", "social-video", "creator"],
      categoryId: "video-generation",
      folderId: "video-generation",
      variables: ["topic", "audience", "count", "seconds", "platform", "tone"],
      isFavorite: false,
      createdAt: "2026-05-17T21:20:00.000Z",
      updatedAt: "2026-05-17T21:20:00.000Z",
      lastUsedAt: null,
      version: 1,
      versionHistory: []
    },
    {
      id: "ai-agents-linear-triage-v1",
      title: "Linear Triage Prompt",
      body:
        "Triage Linear work for `{project_name}` in the `{team_name}` team. Review the goal `{project_goal}` and create or update issues so the project has clear phases, ownership-ready tasks, acceptance criteria, and next actions.\n\nAvoid duplicate issues. Group work by milestone or phase. Each issue should have a clear title, concise goal, acceptance criteria, suggested priority, estimate, and next action. If existing issues already cover part of the work, update or relate them instead of creating overlapping tasks.",
      description: "Turns a product goal into Linear-ready phases, issue updates, acceptance criteria, and next actions.",
      notes: "Source: prompt-library/ai-agents/ai-agents-linear-triage-v1.md\nUse case: Linear triage",
      tags: ["ai-agents", "linear", "triage", "project-management", "backlog"],
      categoryId: "ai-agents",
      folderId: "ai-agents",
      variables: ["project_name", "team_name", "project_goal", "known_scope", "existing_issues", "preferred_phases"],
      isFavorite: true,
      createdAt: "2026-05-17T21:30:00.000Z",
      updatedAt: "2026-05-17T21:30:00.000Z",
      lastUsedAt: "2026-05-18T00:08:00.000Z",
      version: 1,
      versionHistory: []
    },
    {
      id: "ai-agents-skill-md-v1",
      title: "Codex Skill Markdown Prompt",
      body:
        "Create a concise `SKILL.md` for a Codex skill named `{skill_name}`. The skill should help with `{skill_purpose}` and should be used when `{trigger_context}`.\n\nInclude frontmatter with name and description, then write practical instructions for when to use the skill, the workflow to follow, what files or references to load, and how to verify the result. Keep the main skill easy to scan and move long reference material into separate files if needed.",
      description: "Drafts concise Codex skill instructions with frontmatter, workflow, references, and verification.",
      notes: "Source: prompt-library/ai-agents/ai-agents-skill-md-v1.md\nUse case: Skill.md authoring",
      tags: ["ai-agents", "codex", "skill-md", "documentation", "workflow"],
      categoryId: "ai-agents",
      folderId: "ai-agents",
      variables: ["skill_name", "skill_purpose", "trigger_context", "required_workflow", "verification_steps", "references"],
      isFavorite: false,
      createdAt: "2026-05-17T21:40:00.000Z",
      updatedAt: "2026-05-17T21:40:00.000Z",
      lastUsedAt: null,
      version: 1,
      versionHistory: []
    },
    {
      id: "ai-agents-workflow-planner-v1",
      title: "Agent Workflow Planner Prompt",
      body:
        "Create an implementation-ready workflow plan for `{task}`. The plan should be useful for an AI coding agent or engineer who needs to execute without making major product decisions.\n\nInclude goal, assumptions, phased approach, data or interface changes, edge cases, test plan, and acceptance criteria. Keep the plan concise but decision-complete. Flag any unresolved question that would materially change implementation.",
      description: "Creates a decision-complete implementation plan for an AI coding agent or engineer.",
      notes: "Source: prompt-library/ai-agents/ai-agents-workflow-planner-v1.md\nUse case: Workflow planner",
      tags: ["ai-agents", "planning", "workflow", "implementation", "handoff"],
      categoryId: "ai-agents",
      folderId: "ai-agents",
      variables: ["task", "current_context", "constraints", "success_criteria", "out_of_scope"],
      isFavorite: false,
      createdAt: "2026-05-17T21:50:00.000Z",
      updatedAt: "2026-05-17T21:50:00.000Z",
      lastUsedAt: null,
      version: 1,
      versionHistory: []
    }
  ]
};

const emptyDraft = (data: PromptLibraryData): PromptDraft => ({
  title: "",
  body: "",
  description: "",
  notes: "",
  tags: [],
  categoryId: data.categories[0]?.id ?? "",
  folderId: data.folders[0]?.id ?? ""
});

function cloneSeedData(): PromptLibraryData {
  return JSON.parse(JSON.stringify(seedData)) as PromptLibraryData;
}

function canUseBrowserStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function emitStoreUpdate() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(STORE_EVENT));
  }
}

function parsePromptVariables(body: string) {
  const matches = body.match(/\{\{(.*?)\}\}/g) ?? [];
  return Array.from(new Set(matches.map((item) => item.replace(/[{}]/g, "").trim()).filter(Boolean)));
}

function normalizeTags(tags: string[]) {
  const seen = new Set<string>();

  return tags
    .map((tag) => tag.trim().replace(/\s+/g, " "))
    .filter(Boolean)
    .filter((tag) => {
      const normalized = tag.toLowerCase();
      if (seen.has(normalized)) {
        return false;
      }
      seen.add(normalized);
      return true;
    });
}

function readStore(): PromptLibraryData {
  if (!canUseBrowserStorage()) {
    return cloneSeedData();
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const seeded = cloneSeedData();
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
    return seeded;
  }

  try {
    return JSON.parse(raw) as PromptLibraryData;
  } catch {
    const seeded = cloneSeedData();
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
    return seeded;
  }
}

function writeStore(data: PromptLibraryData) {
  if (!canUseBrowserStorage()) {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  emitStoreUpdate();
}

function createVersionSnapshot(prompt: PromptRecord): PromptVersion {
  return {
    id: crypto.randomUUID(),
    savedAt: prompt.updatedAt,
    title: prompt.title,
    body: prompt.body,
    notes: prompt.notes,
    tags: prompt.tags,
    categoryId: prompt.categoryId,
    folderId: prompt.folderId
  };
}

export function subscribeToPromptStore(callback: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const handler = () => callback();
  window.addEventListener(STORE_EVENT, handler);
  window.addEventListener("storage", handler);

  return () => {
    window.removeEventListener(STORE_EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}

export function getPromptLibraryData() {
  return readStore();
}

export function resetPromptLibraryData() {
  const seeded = cloneSeedData();
  if (canUseBrowserStorage()) {
    window.localStorage.removeItem(DELETED_PROMPT_KEY);
  }
  writeStore(seeded);
  return seeded;
}

export function getPromptById(id: string) {
  return readStore().prompts.find((prompt) => prompt.id === id) ?? null;
}

export function savePrompt(input: PromptInput, existingId?: string) {
  const data = readStore();
  const now = new Date().toISOString();

  if (existingId) {
    const current = data.prompts.find((prompt) => prompt.id === existingId);

    if (!current) {
      throw new Error("Prompt not found.");
    }

    const updatedPrompt: PromptRecord = {
      ...current,
      ...input,
      tags: normalizeTags(input.tags),
      variables: parsePromptVariables(input.body),
      updatedAt: now,
      version: current.version + 1,
      versionHistory: [createVersionSnapshot(current), ...current.versionHistory].slice(0, 10)
    };

    const prompts = data.prompts.map((prompt) => (prompt.id === existingId ? updatedPrompt : prompt));
    writeStore({ ...data, prompts });
    return updatedPrompt;
  }

  const nextPrompt: PromptRecord = {
    id: crypto.randomUUID(),
    ...input,
    tags: normalizeTags(input.tags),
    variables: parsePromptVariables(input.body),
    isFavorite: false,
    createdAt: now,
    updatedAt: now,
    lastUsedAt: null,
    version: 1,
    versionHistory: []
  };

  writeStore({ ...data, prompts: [nextPrompt, ...data.prompts] });
  return nextPrompt;
}

export function touchPrompt(id: string) {
  const data = readStore();
  const prompts = data.prompts.map((prompt) =>
    prompt.id === id
      ? {
          ...prompt,
          lastUsedAt: new Date().toISOString()
        }
      : prompt
  );

  writeStore({ ...data, prompts });
}

export function togglePromptFavorite(id: string) {
  const data = readStore();
  const prompts = data.prompts.map((prompt) =>
    prompt.id === id
      ? {
          ...prompt,
          isFavorite: !prompt.isFavorite,
          updatedAt: new Date().toISOString()
        }
      : prompt
  );

  writeStore({ ...data, prompts });
}

export function deletePrompt(id: string) {
  const data = readStore();
  const prompt = data.prompts.find((item) => item.id === id);

  if (!prompt) {
    throw new Error("Prompt not found.");
  }

  const prompts = data.prompts.filter((item) => item.id !== id);

  if (canUseBrowserStorage()) {
    window.localStorage.setItem(DELETED_PROMPT_KEY, JSON.stringify(prompt));
  }

  writeStore({ ...data, prompts });
  return prompt;
}

export function restoreLastDeletedPrompt() {
  if (!canUseBrowserStorage()) {
    return null;
  }

  const raw = window.localStorage.getItem(DELETED_PROMPT_KEY);
  if (!raw) {
    return null;
  }

  try {
    const deletedPrompt = JSON.parse(raw) as PromptRecord;
    const data = readStore();
    const exists = data.prompts.some((prompt) => prompt.id === deletedPrompt.id);

    if (!exists) {
      writeStore({ ...data, prompts: [deletedPrompt, ...data.prompts] });
    }

    window.localStorage.removeItem(DELETED_PROMPT_KEY);
    return deletedPrompt;
  } catch {
    window.localStorage.removeItem(DELETED_PROMPT_KEY);
    return null;
  }
}

export function getLastDeletedPrompt() {
  if (!canUseBrowserStorage()) {
    return null;
  }

  const raw = window.localStorage.getItem(DELETED_PROMPT_KEY);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as PromptRecord;
  } catch {
    return null;
  }
}

export function createFolder(name: string, description: string) {
  const data = readStore();
  const nextFolder = {
    id: crypto.randomUUID(),
    name,
    description
  };

  writeStore({ ...data, folders: [...data.folders, nextFolder] });
  return nextFolder;
}

export function renameFolder(id: string, name: string, description: string) {
  const data = readStore();
  const folders = data.folders.map((folder) => (folder.id === id ? { ...folder, name, description } : folder));
  writeStore({ ...data, folders });
}

export function deleteFolder(id: string) {
  const data = readStore();
  const folderToDelete = data.folders.find((folder) => folder.id === id);

  if (!folderToDelete) {
    throw new Error("Folder not found.");
  }

  let remainingFolders = data.folders.filter((folder) => folder.id !== id);
  let fallbackFolder = remainingFolders[0];

  if (!fallbackFolder) {
    fallbackFolder = {
      id: crypto.randomUUID(),
      name: "Unfiled",
      description: "Fallback folder for prompts that still need a home."
    };
    remainingFolders = [fallbackFolder];
  }

  const prompts = data.prompts.map((prompt) =>
    prompt.folderId === id
      ? {
          ...prompt,
          folderId: fallbackFolder.id,
          updatedAt: new Date().toISOString()
        }
      : prompt
  );

  writeStore({
    ...data,
    folders: remainingFolders,
    prompts
  });

  return fallbackFolder;
}

export function loadPromptDraft(id: string) {
  if (!canUseBrowserStorage()) {
    return null;
  }

  const raw = window.localStorage.getItem(`${DRAFT_PREFIX}:${id}`);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as PromptDraft;
  } catch {
    return null;
  }
}

export function savePromptDraft(id: string, draft: PromptDraft) {
  if (!canUseBrowserStorage()) {
    return;
  }

  window.localStorage.setItem(`${DRAFT_PREFIX}:${id}`, JSON.stringify(draft));
}

export function clearPromptDraft(id: string) {
  if (!canUseBrowserStorage()) {
    return;
  }

  window.localStorage.removeItem(`${DRAFT_PREFIX}:${id}`);
}

export function createEmptyDraft() {
  return emptyDraft(readStore());
}
