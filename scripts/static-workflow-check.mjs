import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

function read(path) {
  return readFileSync(join(root, path), "utf8");
}

function assertIncludes(file, pattern, label) {
  const content = read(file);
  const found = typeof pattern === "string" ? content.includes(pattern) : pattern.test(content);

  if (!found) {
    throw new Error(`${label} missing in ${file}`);
  }
}

function assertCount(label, actual, expected) {
  if (actual !== expected) {
    throw new Error(`${label}: expected ${expected}, found ${actual}`);
  }
}

const checks = [
  ["src/lib/prompt-store.ts", "export function savePrompt", "prompt create/edit persistence"],
  ["src/lib/prompt-store.ts", "versionHistory: [createVersionSnapshot(current)", "version snapshots on edit"],
  ["src/lib/prompt-store.ts", "export function deletePrompt", "prompt deletion"],
  ["src/lib/prompt-store.ts", "export function restoreLastDeletedPrompt", "delete undo"],
  ["src/lib/prompt-store.ts", "export function createFolder", "folder creation"],
  ["src/lib/prompt-store.ts", "export function deleteFolder", "folder deletion and reassignment"],
  ["src/components/prompt-form.tsx", "Title is required.", "title validation"],
  ["src/components/prompt-form.tsx", "Prompt body is required.", "body validation"],
  ["src/components/library-view.tsx", "type=\"search\"", "library search input"],
  ["src/components/library-view.tsx", "matchesFolder && matchesCategory && matchesTag && matchesQuery", "combined filtering"],
  ["src/components/library-view.tsx", "Clear filters", "empty filter recovery"],
  ["src/components/optimization-workspace.tsx", "fetch(\"/api/optimize\"", "optimization happy path call"],
  ["src/components/optimization-workspace.tsx", "Optimization failed.", "optimization error state"],
  ["app/api/optimize/route.ts", "process.env.OPENAI_API_KEY", "server-only OpenAI key access"],
  ["app/api/optimize/route.ts", "json_schema", "structured optimization output"],
  ["src/components/prompt-detail.tsx", "Version history", "version history UI"],
  ["src/components/prompt-detail.tsx", "restoreVersion", "version restore action"],
  ["src/components/prompt-detail.tsx", "duplicateVersion", "version duplicate action"],
  ["src/components/prompt-form.tsx", "generationMode", "generation mode option"],
  ["src/components/optimization-workspace.tsx", "generationMode", "generation mode optimization option"]
];

for (const [file, pattern, label] of checks) {
  assertIncludes(file, pattern, label);
}

const promptStore = read("src/lib/prompt-store.ts");
const seedSourceCount = (promptStore.match(/Source: prompt-library/g) ?? []).length;
assertCount("seed prompt source records", seedSourceCount, 12);

const promptFiles = readdirSync(join(root, "prompt-library"), { recursive: true })
  .filter((item) => String(item).endsWith(".md"))
  .filter((item) => !String(item).endsWith("README.md"))
  .filter((item) => !String(item).endsWith("testing-notes.md"));
assertCount("prompt-library markdown seeds", promptFiles.length, 12);

const requiredPromptSections = [
  "Title:",
  "Category:",
  "Use case:",
  "Version:",
  "Tags:",
  "## Prompt",
  "## Input variables",
  "## Expected output",
  "## Example input",
  "## Example output"
];

for (const file of promptFiles) {
  const path = join("prompt-library", String(file));
  const content = read(path);
  for (const section of requiredPromptSections) {
    if (!content.includes(section)) {
      throw new Error(`${path} is missing ${section}`);
    }
  }

  if (!/Tags: .+, .+/.test(content)) {
    throw new Error(`${path} needs multiple tags for search/filter QA`);
  }
}

console.log(`Static workflow checks passed: ${checks.length + 2 + promptFiles.length} checks.`);
