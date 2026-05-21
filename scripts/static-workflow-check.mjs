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
  ["src/lib/prompt-pack-generator.ts", "export const DEFAULT_GENERATION_MODE", "generation mode default"],
  ["src/lib/prompt-pack-generator.ts", "landing_page", "landing-page generation mode"],
  ["src/lib/prompt-pack-generator.ts", "full_site", "full-site generation mode"],
  ["src/lib/prompt-pack-generator.ts", "buildStitchBrief", "mode-aware Stitch brief"],
  ["src/lib/prompt-pack-generator.ts", "buildImagePrompts", "mode-aware image prompts"],
  ["src/lib/prompt-pack-generator.ts", "buildFinalAgentPrompt", "mode-aware final agent prompt"],
  ["src/lib/prompt-pack-generator.ts", "reportFilename", "generated report filename"],
  ["src/components/prompt-pack-generator.tsx", "Project generation mode", "generation mode selector"],
  ["src/components/prompt-pack-generator.tsx", "Generated prompt pack", "generated report output"],
  ["app/generate/page.tsx", "PromptPackGenerator", "generator route"],
  ["src/lib/prompt-store.ts", "website-design-3d-product-hero-v2", "3D product hero seed prompt"],
  ["src/lib/prompt-store.ts", "website-design-motion-landing-page-v2", "motion landing page seed prompt"],
  ["src/lib/prompt-store.ts", "website-design-full-site-system-v2", "full-site system seed prompt"],
  ["src/lib/prompt-store.ts", "website-design-interactive-portfolio-editorial-v2", "interactive portfolio seed prompt"],
  ["src/lib/prompt-store.ts", "video-generation-image-to-video-brief-v2", "image-to-video seed prompt"],
  ["src/lib/prompt-store.ts", "video-generation-product-launch-storyboard-v2", "product launch video seed prompt"],
  ["src/lib/prompt-store.ts", "video-generation-ugc-ad-v2", "UGC ad seed prompt"],
  ["src/lib/prompt-store.ts", "video-generation-provider-comparison-v2", "video provider comparison seed prompt"],
  ["docs/creative-production-research/web-video-stack-guidance.md", "ComfyUI and Replicate stay test-later", "web/video stack practical guidance"],
  ["docs/creative-production-research/3d-asset-pipeline.md", "Do not move imported GLB assets into production", "3D asset pipeline guidance"],
  ["docs/creative-production-research/video-generation-playbook.md", "blocked or test-later", "video generation playbook blocker guidance"],
  ["README.md", "Windows Shim Fallback", "Windows command fallback documentation"],
  ["README.md", "/prototype/3d", "creative prototype route documentation"],
  ["app/prototype/3d/page.tsx", "Prototype3DHero", "3D prototype route"],
  ["src/components/prototypes/prototype-3d-hero.tsx", "@react-three/fiber", "React Three Fiber usage"],
  ["src/components/prototypes/prototype-3d-hero.tsx", "@react-three/drei", "Drei helper usage"],
  ["src/components/prototypes/prototype-3d-hero.tsx", "useReducedMotion", "3D reduced motion fallback"],
  ["prototype-results/3d-baseline/report.md", "Recommendation", "3D prototype report"],
  ["prompts/tested/ai-media-baseline.md", "Shared Creative Brief", "AI media shared brief"],
  ["prototype-results/ai-media-baseline/report.md", "OpenAI Images API | Completed", "AI media hosted path result"],
  ["prototype-results/ai-media-baseline/report.md", "ComfyUI local workflow | Blocked", "AI media local workflow blocker"],
  ["prototype-results/ai-media-baseline/report.md", "Recommendation", "AI media recommendation"],
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

const promptFiles = readdirSync(join(root, "prompt-library"), { recursive: true })
  .filter((item) => String(item).endsWith(".md"))
  .filter((item) => !String(item).endsWith("README.md"))
  .filter((item) => !String(item).endsWith("testing-notes.md"));
const activePromptFiles = promptFiles.filter((item) => String(item).endsWith("-v2.md"));
assertCount("seed prompt source records", seedSourceCount, activePromptFiles.length);

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

const requiredActivePromptSections = [
  "## Future data requirements",
  "## Precision constraints",
  "## Edge cases",
  "## Fallback behavior",
  "## Version notes"
];

for (const file of activePromptFiles) {
  const path = join("prompt-library", String(file));
  const content = read(path);
  if (!content.includes("Version: v2")) {
    throw new Error(`${path} must be labeled Version: v2`);
  }

  for (const section of requiredActivePromptSections) {
    if (!content.includes(section)) {
      throw new Error(`${path} is missing active v2 section ${section}`);
    }
  }
}

const activeSeedSourceCount = (promptStore.match(/Source: prompt-library\/.*-v2\.md/g) ?? []).length;
assertCount("active v2 seed prompt source records", activeSeedSourceCount, activePromptFiles.length);

console.log(`Static workflow checks passed: ${checks.length + 3 + promptFiles.length + activePromptFiles.length} checks.`);
