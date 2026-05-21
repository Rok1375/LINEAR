export type ProjectMode = "landing_page" | "full_site";

export type PromptPackInput = {
  mode: ProjectMode;
  projectName: string;
  audience: string;
  offer: string;
  tone: string;
  primaryAction: string;
};

export type GeneratedPromptPack = {
  mode: ProjectMode;
  modeLabel: string;
  fileStem: string;
  reportFilename: string;
  structureTitle: string;
  structureItems: string[];
  stitchBrief: string;
  imagePrompts: string[];
  finalAgentPrompt: string;
  validationGates: string[];
  reportMarkdown: string;
};

export const DEFAULT_GENERATION_MODE: ProjectMode = "landing_page";

const modeConfig: Record<ProjectMode, { label: string; fileSlug: string; structureTitle: string }> = {
  landing_page: {
    label: "Landing page",
    fileSlug: "landing-page",
    structureTitle: "Section plan"
  },
  full_site: {
    label: "Full site",
    fileSlug: "full-site",
    structureTitle: "Sitemap and page roles"
  }
};

const landingSections = [
  "Hero: direct offer, proof hint, primary CTA, secondary CTA, and real visual direction.",
  "Proof: testimonials, logos, metrics, awards, or before/after evidence.",
  "Features/services: 3 to 5 scannable value blocks with concrete outcomes.",
  "Process: short sequence that explains how the offer works.",
  "Pricing or CTA band: plan teaser, consultation CTA, or purchase path.",
  "FAQ: objections, logistics, fit, timeline, support, and risk reversal.",
  "Footer: concise navigation, contact, legal, and final trust signal."
];

const fullSitePages = [
  "Home: orient the visitor and route them to the most important next page.",
  "Product/services: explain the offer, feature set, outcomes, and proof.",
  "Pricing: compare options, explain fit, answer objections, and drive conversion.",
  "Resources/case studies: support trust, SEO, education, and sales enablement.",
  "About/contact: clarify credibility, team, location or support path, and next steps."
];

function normalizeSlug(value: string) {
  const slug = value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return slug || "project";
}

function valueOrFallback(value: string, fallback: string) {
  return value.trim() || fallback;
}

function getModeItems(mode: ProjectMode) {
  return mode === "landing_page" ? landingSections : fullSitePages;
}

function buildStitchBrief(input: PromptPackInput, items: string[]) {
  const projectName = valueOrFallback(input.projectName, "the project");
  const audience = valueOrFallback(input.audience, "the target audience");
  const offer = valueOrFallback(input.offer, "the core offer");
  const tone = valueOrFallback(input.tone, "clear, polished, and practical");
  const primaryAction = valueOrFallback(input.primaryAction, "take the primary action");

  if (input.mode === "landing_page") {
    return [
      `Create a single polished landing page for ${projectName}.`,
      `Audience: ${audience}. Offer: ${offer}. Tone: ${tone}. Primary action: ${primaryAction}.`,
      "Design one cohesive page, not a multi-page app. The first viewport must make the offer obvious, show a relevant visual, and leave a hint of the next section visible.",
      "Required sections:",
      ...items.map((item) => `- ${item}`),
      "Keep the layout responsive, accessible, production-ready, and specific to the offer. Avoid generic SaaS filler, decorative card overload, and vague placeholder copy."
    ].join("\n");
  }

  return [
    `Create a full website/app prompt pack for ${projectName}.`,
    `Audience: ${audience}. Offer: ${offer}. Tone: ${tone}. Primary action: ${primaryAction}.`,
    "Design a multi-page structure with shared navigation, shared layout, reusable components, page-level goals, and clear implementation order.",
    "Required sitemap:",
    ...items.map((item) => `- ${item}`),
    "Include global IA, navigation behavior, responsive breakpoints, reusable components, page-by-page content requirements, loading/empty/error states where relevant, and accessibility expectations."
  ].join("\n");
}

function buildImagePrompts(input: PromptPackInput, items: string[]) {
  const projectName = valueOrFallback(input.projectName, "the project");
  const audience = valueOrFallback(input.audience, "the target audience");
  const tone = valueOrFallback(input.tone, "polished and credible");

  if (input.mode === "landing_page") {
    return [
      `Hero image for ${projectName}: realistic, inspectable subject matter connected to ${audience}, ${tone} mood, clean left-side or center safe area for headline text, no generic abstract gradients.`,
      `Proof or process visual for ${projectName}: show the transformation, workflow, product/service context, or customer outcome in a way that supports one landing page section.`,
      `CTA/footer supporting image for ${projectName}: quiet, credible visual that reinforces trust without competing with the final call to action.`
    ];
  }

  return [
    `Home page hero image for ${projectName}: brand-defining visual with room for navigation and headline text, relevant to ${audience}.`,
    `Product/services page image set for ${projectName}: 3 reusable visuals that show features, use cases, or service outcomes consistently.`,
    `Pricing or case-study visual for ${projectName}: trust-building image that can support plan comparison, proof, or conversion content.`,
    `Shared asset direction for ${projectName}: consistent photography/illustration rules, crop ratios, background treatment, and accessibility-safe contrast guidance.`
  ];
}

function buildFinalAgentPrompt(input: PromptPackInput, items: string[]) {
  const projectName = valueOrFallback(input.projectName, "the project");
  const audience = valueOrFallback(input.audience, "the target audience");
  const offer = valueOrFallback(input.offer, "the core offer");
  const primaryAction = valueOrFallback(input.primaryAction, "the primary action");

  if (input.mode === "landing_page") {
    return [
      `Build a production-quality single landing page for ${projectName}.`,
      `The page is for ${audience}, explains ${offer}, and should guide visitors toward ${primaryAction}.`,
      "Do not create a multi-page app, auth flow, dashboard, or database unless explicitly requested.",
      "Implement these sections in order:",
      ...items.map((item) => `- ${item}`),
      "Use responsive layout, semantic headings, accessible controls, clear CTA hierarchy, realistic copy, and a relevant hero visual. Verify mobile, tablet, and desktop layouts before finishing."
    ].join("\n");
  }

  return [
    `Build a production-quality multi-page website/app for ${projectName}.`,
    `The site is for ${audience}, explains ${offer}, and should guide visitors toward ${primaryAction}.`,
    "Create shared navigation, reusable layout components, and page-level implementation prompts before coding individual pages.",
    "Sitemap and page roles:",
    ...items.map((item) => `- ${item}`),
    "Implement pages with consistent visual language, responsive navigation, reusable components, accessibility checks, and page-specific validation. Do not collapse the work into a single landing page."
  ].join("\n");
}

function buildValidationGates(mode: ProjectMode) {
  if (mode === "landing_page") {
    return [
      "One-page scope is explicit; no accidental sitemap, auth, dashboard, or database assumptions.",
      "Hero, proof, features/services, process, CTA/pricing, FAQ, and footer are represented.",
      "Image prompts are tied to landing-page sections and preserve readable text areas.",
      "Final agent prompt asks for one polished responsive page.",
      "Mobile, tablet, desktop, focus states, and reduced-motion expectations are listed."
    ];
  }

  return [
    "Full-site scope is explicit with sitemap, shared layout, navigation, and reusable components.",
    "Each page has a clear role, target user need, CTA, and content responsibilities.",
    "Image prompts are scoped across pages and define shared visual asset rules.",
    "Final agent prompt asks for page-by-page implementation rather than one long page.",
    "Responsive navigation, accessibility, loading/empty/error states, and cross-page consistency are listed."
  ];
}

export function generatePromptPack(input: PromptPackInput): GeneratedPromptPack {
  const config = modeConfig[input.mode];
  const structureItems = getModeItems(input.mode);
  const fileStem = `${normalizeSlug(input.projectName)}-${config.fileSlug}-prompt-pack`;
  const stitchBrief = buildStitchBrief(input, structureItems);
  const imagePrompts = buildImagePrompts(input, structureItems);
  const finalAgentPrompt = buildFinalAgentPrompt(input, structureItems);
  const validationGates = buildValidationGates(input.mode);
  const reportFilename = `${fileStem}-report.md`;
  const reportMarkdown = [
    `# ${config.label} Prompt Pack Report`,
    "",
    `Mode: ${input.mode}`,
    `Project: ${valueOrFallback(input.projectName, "Untitled project")}`,
    `Audience: ${valueOrFallback(input.audience, "Not specified")}`,
    `Output filename: ${reportFilename}`,
    "",
    `## ${config.structureTitle}`,
    "",
    ...structureItems.map((item) => `- ${item}`),
    "",
    "## Stitch Brief",
    "",
    stitchBrief,
    "",
    "## Image Prompts",
    "",
    ...imagePrompts.map((prompt) => `- ${prompt}`),
    "",
    "## Final Agent Prompt",
    "",
    finalAgentPrompt,
    "",
    "## Validation Gates",
    "",
    ...validationGates.map((gate) => `- ${gate}`)
  ].join("\n");

  return {
    mode: input.mode,
    modeLabel: config.label,
    fileStem,
    reportFilename,
    structureTitle: config.structureTitle,
    structureItems,
    stitchBrief,
    imagePrompts,
    finalAgentPrompt,
    validationGates,
    reportMarkdown
  };
}
