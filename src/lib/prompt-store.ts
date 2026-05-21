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
      id: "website-design-landing-page-v2",
      title: "Landing Page Design Brief v2",
      body:
        "Create a production-quality landing page brief for `{product_name}`, a `{product_type}` serving `{target_audience}`. Optimize the page for `{primary_action}` while making the offer, audience fit, proof, and next step obvious within the first viewport.\n\nUse `{brand_tone}`, `{key_benefits}`, `{proof_points}`, `{differentiators}`, and `{conversion_risks}` to shape the narrative. Produce a goal-oriented page plan with hero copy, section sequence, visual direction, interaction notes, accessibility requirements, responsive behavior, measurement recommendations, edge cases, and fallback behavior. Do not invent fake proof, pricing, security claims, or customer logos.",
      description: "Creates a future-ready landing page brief with conversion risks, proof handling, accessibility notes, and measurement guidance.",
      notes: "Source: prompt-library/website-design/website-design-landing-page-v2.md\nUse case: Landing page\nVersion notes: Expanded context, future data requirements, precision constraints, edge cases, and fallback behavior.",
      tags: ["website-design", "landing-page", "conversion", "responsive", "product-marketing", "future-ready"],
      categoryId: "website-design",
      folderId: "website-design",
      variables: ["product_name", "product_type", "target_audience", "primary_action", "brand_tone", "key_benefits", "proof_points", "differentiators", "conversion_risks", "analytics_goal"],
      isFavorite: true,
      createdAt: "2026-05-17T20:00:00.000Z",
      updatedAt: "2026-05-19T11:00:00.000Z",
      lastUsedAt: "2026-05-18T00:02:00.000Z",
      version: 2,
      versionHistory: []
    },
    {
      id: "website-design-dashboard-v2",
      title: "Dashboard UI Design Brief v2",
      body:
        "Design a focused operational dashboard for `{product_name}` that helps `{user_role}` monitor `{primary_metric}` and complete `{top_tasks}` efficiently. Prioritize repeat use, scanability, decision support, and trustworthy data interpretation over decorative layout.\n\nUse `{data_sources}`, `{alert_conditions}`, `{refresh_frequency}`, `{permission_levels}`, and `{decision_context}` to define navigation, dashboard regions, cards, tables, filters, empty/loading/error states, responsive behavior, accessibility notes, data-quality cues, edge cases, and fallback behavior. Include freshness labels, permission-aware actions, and non-color-only alert indicators.",
      description: "Plans an operational dashboard with data freshness, permissions, alerts, realistic states, and future usage signals.",
      notes: "Source: prompt-library/website-design/website-design-dashboard-v2.md\nUse case: Dashboard\nVersion notes: Expanded data-quality, permission, edge-case, and fallback requirements.",
      tags: ["website-design", "dashboard", "saas", "data-ui", "responsive", "future-ready"],
      categoryId: "website-design",
      folderId: "website-design",
      variables: ["product_name", "user_role", "primary_metric", "top_tasks", "data_sources", "alert_conditions", "refresh_frequency", "permission_levels", "decision_context"],
      isFavorite: false,
      createdAt: "2026-05-17T20:10:00.000Z",
      updatedAt: "2026-05-19T11:10:00.000Z",
      lastUsedAt: null,
      version: 2,
      versionHistory: []
    },
    {
      id: "website-design-pricing-page-v2",
      title: "Pricing Page Design Brief v2",
      body:
        "Create a pricing page brief for `{product_name}` that helps `{target_audience}` choose the right plan with confidence and complete `{primary_action}`. Make plan differences, value thresholds, limitations, and trust signals clear without pushing every visitor toward the most expensive option.\n\nUse `{plans}`, `{key_limitations}`, `{trust_points}`, `{buyer_questions}`, `{upgrade_triggers}`, and `{pricing_model}` to define plan positioning, comparison logic, recommendation treatment, FAQ topics, responsive behavior, accessibility notes, analytics events, edge cases, and fallback behavior. Do not invent prices, guarantees, compliance claims, or discount rules.",
      description: "Builds a pricing page plan with buyer objections, upgrade triggers, pricing-model context, and safer fallback logic.",
      notes: "Source: prompt-library/website-design/website-design-pricing-page-v2.md\nUse case: Pricing page\nVersion notes: Expanded buyer-question, pricing-model, analytics, and fallback guidance.",
      tags: ["website-design", "pricing", "conversion", "saas", "plans", "future-ready"],
      categoryId: "website-design",
      folderId: "website-design",
      variables: ["product_name", "target_audience", "plans", "primary_action", "key_limitations", "trust_points", "buyer_questions", "upgrade_triggers", "pricing_model"],
      isFavorite: false,
      createdAt: "2026-05-17T20:20:00.000Z",
      updatedAt: "2026-05-19T11:20:00.000Z",
      lastUsedAt: null,
      version: 2,
      versionHistory: []
    },
    {
      id: "website-design-3d-product-hero-v2",
      title: "3D Product Hero Page Brief v2",
      body:
        "Create a production-quality 3D product hero brief for `{product_name}` using React Three Fiber, Three.js, and small Drei helpers. The hero should introduce `{product_type}` to `{target_audience}`, make `{primary_action}` obvious, and use `{product_visual}` as the inspectable visual focus without turning the page into a heavy demo.\n\nUse `{brand_tone}`, `{interaction_goal}`, `{asset_status}`, `{performance_budget}`, and `{fallback_visual}` to define the scene, camera, lighting, interaction model, copy hierarchy, responsive behavior, loading state, reduced-motion fallback, and implementation constraints. Prefer lightweight procedural geometry until licensed GLB/GLTF assets are approved.",
      description: "Plans a performant R3F/Three/Drei product hero with asset, fallback, accessibility, and reduced-motion safeguards.",
      notes: "Source: prompt-library/website-design/website-design-3d-product-hero-v2.md\nUse case: 3D product hero\nVersion notes: Added 3D implementation guidance, asset approval constraints, performance budget, and fallback behavior.",
      tags: ["website-design", "3d", "react-three-fiber", "three-js", "product-hero", "future-ready"],
      categoryId: "website-design",
      folderId: "website-design",
      variables: ["product_name", "product_type", "target_audience", "primary_action", "product_visual", "brand_tone", "interaction_goal", "asset_status", "performance_budget", "fallback_visual"],
      isFavorite: true,
      createdAt: "2026-05-20T13:00:00.000Z",
      updatedAt: "2026-05-20T13:00:00.000Z",
      lastUsedAt: null,
      version: 2,
      versionHistory: []
    },
    {
      id: "website-design-motion-landing-page-v2",
      title: "Motion-Rich Landing Page Brief v2",
      body:
        "Create a motion-rich landing page brief for `{product_name}` that uses GSAP for controlled reveal or scroll sequences and Motion for component-level interactions. The page should serve `{target_audience}`, explain `{offer}`, and guide visitors toward `{primary_action}` without letting animation compete with comprehension.\n\nUse `{brand_tone}`, `{motion_style}`, `{proof_points}`, `{conversion_risks}`, `{content_sections}`, and `{reduced_motion_policy}` to define page narrative, animation system, section timing, interaction rules, accessibility requirements, responsive behavior, validation gates, and fallback behavior.",
      description: "Creates a landing-page brief with practical GSAP/Motion responsibilities, reduced-motion rules, and scroll/mobile safeguards.",
      notes: "Source: prompt-library/website-design/website-design-motion-landing-page-v2.md\nUse case: Motion-rich landing page\nVersion notes: Added GSAP and Motion division of responsibility, reduced-motion policy, and validation gates.",
      tags: ["website-design", "motion", "gsap", "responsive", "landing-page", "future-ready"],
      categoryId: "website-design",
      folderId: "website-design",
      variables: ["product_name", "target_audience", "offer", "primary_action", "brand_tone", "motion_style", "proof_points", "conversion_risks", "content_sections", "reduced_motion_policy"],
      isFavorite: false,
      createdAt: "2026-05-20T13:10:00.000Z",
      updatedAt: "2026-05-20T13:10:00.000Z",
      lastUsedAt: null,
      version: 2,
      versionHistory: []
    },
    {
      id: "website-design-full-site-system-v2",
      title: "Full Website App System Brief v2",
      body:
        "Create a full website or app system brief for `{project_name}` serving `{target_audience}`. The output should define information architecture, shared layout, reusable components, content responsibilities, interaction states, responsive behavior, and accessibility requirements before any individual page is implemented.\n\nUse `{site_goal}`, `{primary_action}`, `{page_list}`, `{brand_tone}`, `{content_sources}`, `{user_tasks}`, `{technical_constraints}`, and `{success_metrics}` to produce a decision-ready system plan with page-by-page roles, navigation behavior, component inventory, state coverage, visual direction, implementation order, edge cases, and fallback behavior.",
      description: "Builds a full-site/app system brief with IA, reusable components, state coverage, accessibility, and implementation order.",
      notes: "Source: prompt-library/website-design/website-design-full-site-system-v2.md\nUse case: Full website or app system\nVersion notes: Added full-site scope control, route responsibilities, state coverage, and technical-constraint safeguards.",
      tags: ["website-design", "full-site", "design-system", "information-architecture", "accessibility", "future-ready"],
      categoryId: "website-design",
      folderId: "website-design",
      variables: ["project_name", "target_audience", "site_goal", "primary_action", "page_list", "brand_tone", "content_sources", "user_tasks", "technical_constraints", "success_metrics"],
      isFavorite: false,
      createdAt: "2026-05-20T13:20:00.000Z",
      updatedAt: "2026-05-20T13:20:00.000Z",
      lastUsedAt: null,
      version: 2,
      versionHistory: []
    },
    {
      id: "website-design-interactive-portfolio-editorial-v2",
      title: "Interactive Portfolio Editorial Brief v2",
      body:
        "Create an interactive portfolio or editorial page brief for `{subject_name}` that tells `{story_arc}` for `{audience}`. The page should use visual assets, motion, and scroll rhythm to make the work inspectable and memorable while preserving readable content and fast fallback behavior.\n\nUse `{featured_work}`, `{visual_assets}`, `{interaction_style}`, `{brand_tone}`, `{primary_action}`, `{performance_budget}`, and `{accessibility_constraints}` to define the narrative sequence, asset treatment, motion rules, responsive layout, fallback states, proof handling, and measurement recommendations.",
      description: "Plans work-led portfolio/editorial pages with scroll narrative, inspectable assets, accessibility, and performance fallbacks.",
      notes: "Source: prompt-library/website-design/website-design-interactive-portfolio-editorial-v2.md\nUse case: Interactive portfolio or editorial page\nVersion notes: Added editorial structure, asset inspection requirements, interaction fallback rules, and performance guidance.",
      tags: ["website-design", "portfolio", "editorial", "scroll-narrative", "interactive", "future-ready"],
      categoryId: "website-design",
      folderId: "website-design",
      variables: ["subject_name", "story_arc", "audience", "featured_work", "visual_assets", "interaction_style", "brand_tone", "primary_action", "performance_budget", "accessibility_constraints"],
      isFavorite: false,
      createdAt: "2026-05-20T13:30:00.000Z",
      updatedAt: "2026-05-20T13:30:00.000Z",
      lastUsedAt: null,
      version: 2,
      versionHistory: []
    },
    {
      id: "image-generation-product-photo-v2",
      title: "Product Photo Generation Prompt v2",
      body:
        "Create a high-quality product image prompt for `{product_name}` for `{channel}` and `{usage_context}`. The image must make the product the unmistakable subject, preserve `{product_details}`, and use `{background_style}`, `{lighting_style}`, `{camera_angle}`, and `{brand_tone}` to support the buying context.\n\nSpecify composition, materials, shadows, scale cues, negative space, aspect ratio, compliance notes, exclusions, edge cases, and fallback behavior. Prioritize accurate product representation over stylized novelty, and avoid distorted labels, invented claims, extra variants, or props that compete with the product.",
      description: "Creates commerce-aware product image prompts with camera, aspect ratio, compliance, and artifact-prevention constraints.",
      notes: "Source: prompt-library/image-generation/image-generation-product-photo-v2.md\nUse case: Product photo\nVersion notes: Expanded camera, compliance, artifact, future data, and fallback guidance.",
      tags: ["image-generation", "product-photo", "ecommerce", "studio", "advertising", "future-ready"],
      categoryId: "image-generation",
      folderId: "image-generation",
      variables: ["product_name", "channel", "background_style", "lighting_style", "brand_tone", "usage_context", "product_details", "camera_angle", "aspect_ratio", "compliance_notes"],
      isFavorite: true,
      createdAt: "2026-05-17T20:30:00.000Z",
      updatedAt: "2026-05-19T11:30:00.000Z",
      lastUsedAt: "2026-05-18T00:04:00.000Z",
      version: 2,
      versionHistory: []
    },
    {
      id: "image-generation-hero-background-v2",
      title: "Hero Background Image Prompt v2",
      body:
        "Create a website hero background prompt for `{brand_or_product}` that supports `{hero_message}` for `{target_audience}`. The image should feel `{mood}`, feature `{visual_subject}`, fit `{aspect_ratio}`, and preserve a readable safe area at `{text_area}` for `{foreground_content}`.\n\nDefine composition, depth, contrast, color palette, safe area, responsive crop behavior, exclusions, edge cases, and fallback behavior. Prefer specific scenes or product-relevant metaphors over generic gradients or decorative abstraction.",
      description: "Defines readable hero-background imagery with safe-area metadata, responsive crops, and contrast constraints.",
      notes: "Source: prompt-library/image-generation/image-generation-hero-background-v2.md\nUse case: Hero background\nVersion notes: Expanded safe-area, crop, contrast, data, and fallback guidance.",
      tags: ["image-generation", "hero-background", "website", "brand", "visual-direction", "future-ready"],
      categoryId: "image-generation",
      folderId: "image-generation",
      variables: ["brand_or_product", "hero_message", "target_audience", "mood", "text_area", "visual_subject", "aspect_ratio", "brand_colors", "foreground_content", "crop_variants"],
      isFavorite: false,
      createdAt: "2026-05-17T20:40:00.000Z",
      updatedAt: "2026-05-19T11:40:00.000Z",
      lastUsedAt: null,
      version: 2,
      versionHistory: []
    },
    {
      id: "image-generation-social-ad-v2",
      title: "Social Ad Image Prompt v2",
      body:
        "Create a platform-aware social ad image prompt for `{brand_name}` promoting `{offer}` to `{target_audience}` on `{platform}`. The image should make `{core_message}` visible quickly, feature `{main_subject}`, use `{visual_style}` and `{color_direction}`, and leave space for `{overlay_copy}` when needed.\n\nDefine the creative angle, composition, subject treatment, visual hierarchy, crop, compliance notes, edge cases, and fallback behavior. Prioritize clarity at small sizes and avoid unsupported claims, misleading scarcity, invented badges, or unreadable generated text.",
      description: "Shapes paid-social image prompts with platform, overlay, creative-angle, compliance, and performance-data constraints.",
      notes: "Source: prompt-library/image-generation/image-generation-social-ad-v2.md\nUse case: Social ad\nVersion notes: Expanded platform, compliance, overlay, creative-angle, and fallback guidance.",
      tags: ["image-generation", "social-ad", "paid-social", "creative", "campaign", "future-ready"],
      categoryId: "image-generation",
      folderId: "image-generation",
      variables: ["brand_name", "offer", "target_audience", "platform", "visual_style", "color_direction", "main_subject", "core_message", "overlay_copy", "creative_angle", "compliance_notes"],
      isFavorite: false,
      createdAt: "2026-05-17T20:50:00.000Z",
      updatedAt: "2026-05-19T11:50:00.000Z",
      lastUsedAt: null,
      version: 2,
      versionHistory: []
    },
    {
      id: "video-generation-ad-script-v2",
      title: "Video Ad Script Prompt v2",
      body:
        "Write a platform-aware video ad script for `{product_name}` promoting `{offer}` to `{target_audience}` on `{platform}`. The script must fit `{duration}`, use `{tone}`, open with a strong hook, show the problem, introduce the product, demonstrate the benefit, handle `{primary_objection}`, and end with `{call_to_action}`.\n\nInclude timed scenes, voiceover, on-screen text, shot direction, visual assets, transitions, pacing notes, production constraints, edge cases, fallback behavior, and a compact test variant. Do not invent proof points, customer quotes, statistics, or guarantees.",
      description: "Produces a short video ad script with objection handling, production constraints, substantiation safeguards, and test variants.",
      notes: "Source: prompt-library/video-generation/video-generation-ad-script-v2.md\nUse case: Ad script\nVersion notes: Expanded objection, production, proof, performance-data, and fallback guidance.",
      tags: ["video-generation", "ad-script", "marketing", "short-video", "conversion", "future-ready"],
      categoryId: "video-generation",
      folderId: "video-generation",
      variables: ["product_name", "offer", "target_audience", "duration", "tone", "call_to_action", "platform", "primary_objection", "proof_point", "production_constraints"],
      isFavorite: true,
      createdAt: "2026-05-17T21:00:00.000Z",
      updatedAt: "2026-05-19T12:00:00.000Z",
      lastUsedAt: "2026-05-18T00:06:00.000Z",
      version: 2,
      versionHistory: []
    },
    {
      id: "video-generation-product-demo-v2",
      title: "Product Demo Video Prompt v2",
      body:
        "Create a product demo video plan for `{product_name}` showing how `{target_user}` completes `{workflow}` and reaches `{desired_takeaway}`. The demo should fit `{duration}` and focus on workflow value, not a full feature tour.\n\nUse `{key_features}`, `{starting_state}`, `{success_state}`, `{viewer_context}`, and `{production_constraints}` to define scenes with narration, screen actions, callouts, transitions, pacing, required assets, accessibility notes, edge cases, fallback behavior, and a cutdown version.",
      description: "Plans value-focused demo videos with starting state, success state, viewer context, accessibility, and cutdown guidance.",
      notes: "Source: prompt-library/video-generation/video-generation-product-demo-v2.md\nUse case: Product demo\nVersion notes: Expanded workflow-state, viewer-context, accessibility, adoption-data, and fallback guidance.",
      tags: ["video-generation", "product-demo", "walkthrough", "onboarding", "saas", "future-ready"],
      categoryId: "video-generation",
      folderId: "video-generation",
      variables: ["product_name", "target_user", "workflow", "duration", "key_features", "desired_takeaway", "starting_state", "success_state", "viewer_context", "production_constraints"],
      isFavorite: false,
      createdAt: "2026-05-17T21:10:00.000Z",
      updatedAt: "2026-05-19T12:10:00.000Z",
      lastUsedAt: null,
      version: 2,
      versionHistory: []
    },
    {
      id: "video-generation-short-form-hook-v2",
      title: "Short-Form Hook Prompt v2",
      body:
        "Generate `{count}` short-form video hooks for `{topic}` aimed at `{audience}` on `{platform}`. Each hook must fit the first `{seconds}` seconds, match `{tone}`, create curiosity without clickbait, and lead naturally into `{content_promise}`.\n\nVary hook types across contrarian insight, mistake to avoid, quick transformation, surprising stat, direct question, before/after, pattern interrupt, and proof-led hook. Include exact spoken line, visual opening idea, why it works, risk level, safer fallback, edge cases, and constraints from `{avoid_claims}` and `{proof_available}`.",
      description: "Creates varied short-form hooks with content-promise alignment, proof constraints, risk notes, and safer fallbacks.",
      notes: "Source: prompt-library/video-generation/video-generation-short-form-hook-v2.md\nUse case: Short-form hook\nVersion notes: Expanded proof, risk, retention-data, platform, and fallback guidance.",
      tags: ["video-generation", "short-form", "hook", "social-video", "creator", "future-ready"],
      categoryId: "video-generation",
      folderId: "video-generation",
      variables: ["topic", "audience", "count", "seconds", "platform", "tone", "content_promise", "avoid_claims", "proof_available"],
      isFavorite: false,
      createdAt: "2026-05-17T21:20:00.000Z",
      updatedAt: "2026-05-19T12:20:00.000Z",
      lastUsedAt: null,
      version: 2,
      versionHistory: []
    },
    {
      id: "video-generation-image-to-video-brief-v2",
      title: "Image-To-Video Production Brief v2",
      body:
        "Create an AI image-to-video production brief for `{project_name}` using `{source_image_description}` as the visual starting point. The video should communicate `{message}` to `{target_audience}` in `{duration}` for `{platform}` while preserving source-image identity, composition, and rights constraints.\n\nUse `{motion_direction}`, `{camera_direction}`, `{aspect_ratio}`, `{brand_tone}`, `{do_not_change}`, `{rights_status}`, and `{production_constraints}` to define the shot plan, prompt, negative prompt guidance, provider notes, review checklist, accessibility requirements, edge cases, and fallback behavior.",
      description: "Creates a provider-neutral image-to-video brief with source-image, rights, motion, identity, and review constraints.",
      notes: "Source: prompt-library/video-generation/video-generation-image-to-video-brief-v2.md\nUse case: Image-to-video production brief\nVersion notes: Added source-image rights checks, identity preservation, provider-neutral fields, and publication fallback behavior.",
      tags: ["video-generation", "image-to-video", "ai-video", "production-brief", "rights-review", "future-ready"],
      categoryId: "video-generation",
      folderId: "video-generation",
      variables: ["project_name", "source_image_description", "message", "target_audience", "duration", "platform", "motion_direction", "camera_direction", "aspect_ratio", "brand_tone", "do_not_change", "rights_status", "production_constraints"],
      isFavorite: true,
      createdAt: "2026-05-20T13:40:00.000Z",
      updatedAt: "2026-05-20T13:40:00.000Z",
      lastUsedAt: null,
      version: 2,
      versionHistory: []
    },
    {
      id: "video-generation-product-launch-storyboard-v2",
      title: "Product Launch Video Storyboard v2",
      body:
        "Create a product launch video storyboard for `{product_name}` announcing `{launch_message}` to `{target_audience}`. The video should fit `{duration}`, match `{platform}`, and move from hook to problem, product reveal, proof, CTA, and cutdown variants without inventing unsupported claims.\n\nUse `{key_features}`, `{proof_points}`, `{visual_assets}`, `{tone}`, `{call_to_action}`, `{production_constraints}`, and `{compliance_notes}` to define timed scenes, voiceover, on-screen text, shot direction, captions, transitions, accessibility notes, edge cases, and fallback behavior.",
      description: "Builds a launch video storyboard with proof safeguards, asset needs, captions, platform variants, and cutdown guidance.",
      notes: "Source: prompt-library/video-generation/video-generation-product-launch-storyboard-v2.md\nUse case: Product launch storyboard\nVersion notes: Added launch story structure, proof safeguards, asset needs, captions, platform variants, and compliance fallbacks.",
      tags: ["video-generation", "product-launch", "storyboard", "launch-campaign", "captions", "future-ready"],
      categoryId: "video-generation",
      folderId: "video-generation",
      variables: ["product_name", "launch_message", "target_audience", "duration", "platform", "key_features", "proof_points", "visual_assets", "tone", "call_to_action", "production_constraints", "compliance_notes"],
      isFavorite: false,
      createdAt: "2026-05-20T13:50:00.000Z",
      updatedAt: "2026-05-20T13:50:00.000Z",
      lastUsedAt: null,
      version: 2,
      versionHistory: []
    },
    {
      id: "video-generation-ugc-ad-v2",
      title: "UGC-Style Ad Video Prompt v2",
      body:
        "Create a UGC-style video ad concept for `{product_name}` promoting `{offer}` to `{target_audience}` on `{platform}`. The concept should feel like a credible creator recommendation while clearly disclosing the offer, respecting `{compliance_notes}`, and avoiding fabricated personal experience.\n\nUse `{creator_persona}`, `{hook_angle}`, `{primary_objection}`, `{proof_available}`, `{desired_action}`, `{duration}`, `{production_constraints}`, and `{avoid_claims}` to produce a creator brief, hook variants, script, shot list, on-screen text, caption notes, compliance checks, edge cases, and fallback behavior.",
      description: "Creates UGC-style ad packages with creator persona, disclosure guidance, proof limits, platform notes, and hook variants.",
      notes: "Source: prompt-library/video-generation/video-generation-ugc-ad-v2.md\nUse case: UGC-style ad\nVersion notes: Added creator-persona structure, proof and disclosure safeguards, platform-specific tone, and fallback hook families.",
      tags: ["video-generation", "ugc", "social-ad", "creator-brief", "compliance", "future-ready"],
      categoryId: "video-generation",
      folderId: "video-generation",
      variables: ["product_name", "offer", "target_audience", "platform", "creator_persona", "hook_angle", "primary_objection", "proof_available", "desired_action", "duration", "production_constraints", "compliance_notes", "avoid_claims"],
      isFavorite: false,
      createdAt: "2026-05-20T14:00:00.000Z",
      updatedAt: "2026-05-20T14:00:00.000Z",
      lastUsedAt: null,
      version: 2,
      versionHistory: []
    },
    {
      id: "video-generation-provider-comparison-v2",
      title: "Generative Video Provider Comparison Prompt v2",
      body:
        "Compare generative video provider options for `{project_name}` and recommend the safest test path for `{video_goal}`. Evaluate Runway, Luma, Veo or Vertex, Replicate, fal, and local ComfyUI only where access, rights, inputs, cost, and workflow readiness can be verified.\n\nUse `{input_assets}`, `{desired_output}`, `{duration}`, `{aspect_ratio}`, `{quality_bar}`, `{privacy_constraints}`, `{budget_limit}`, `{timeline}`, and `{local_setup_status}` to produce a comparison table, blocked/test-later notes, recommended prototype path, metadata to capture, edge cases, and fallback behavior.",
      description: "Compares Runway, Luma, Veo/Vertex, Replicate, fal, and ComfyUI with readiness, rights, cost, and blocker gates.",
      notes: "Source: prompt-library/video-generation/video-generation-provider-comparison-v2.md\nUse case: Generative video provider comparison\nVersion notes: Added provider-readiness gates, blocked/test-later handling, privacy constraints, cost metadata, and fallback steps.",
      tags: ["video-generation", "provider-comparison", "runway", "luma", "comfyui", "future-ready"],
      categoryId: "video-generation",
      folderId: "video-generation",
      variables: ["project_name", "video_goal", "input_assets", "desired_output", "duration", "aspect_ratio", "quality_bar", "privacy_constraints", "budget_limit", "timeline", "local_setup_status"],
      isFavorite: false,
      createdAt: "2026-05-20T14:10:00.000Z",
      updatedAt: "2026-05-20T14:10:00.000Z",
      lastUsedAt: null,
      version: 2,
      versionHistory: []
    },
    {
      id: "ai-agents-linear-triage-v2",
      title: "Linear Triage Prompt v2",
      body:
        "Triage Linear work for `{project_name}` in the `{team_name}` team. Use `{project_goal}`, `{known_scope}`, `{existing_issues}`, `{preferred_phases}`, `{stakeholders}`, and `{delivery_risks}` to create or update a clear execution plan without duplicating work.\n\nProduce Linear-ready milestones, issue recommendations, update recommendations for existing issues, dependencies, acceptance criteria, priority, estimate or size guidance, owner readiness, next actions, edge cases, fallback behavior, and unresolved questions. Treat existing issue data as the source of truth.",
      description: "Turns a product goal into Linear-ready issue plans with deduplication, risk handling, owner readiness, and acceptance criteria.",
      notes: "Source: prompt-library/ai-agents/ai-agents-linear-triage-v2.md\nUse case: Linear triage\nVersion notes: Expanded stakeholder, risk, definition-of-done, issue-health, and fallback guidance.",
      tags: ["ai-agents", "linear", "triage", "project-management", "backlog", "future-ready"],
      categoryId: "ai-agents",
      folderId: "ai-agents",
      variables: ["project_name", "team_name", "project_goal", "known_scope", "existing_issues", "preferred_phases", "stakeholders", "delivery_risks", "definition_of_done"],
      isFavorite: true,
      createdAt: "2026-05-17T21:30:00.000Z",
      updatedAt: "2026-05-19T12:30:00.000Z",
      lastUsedAt: "2026-05-18T00:08:00.000Z",
      version: 2,
      versionHistory: []
    },
    {
      id: "ai-agents-skill-md-v2",
      title: "Codex Skill Markdown Prompt v2",
      body:
        "Create a concise `SKILL.md` for a Codex skill named `{skill_name}`. The skill should help with `{skill_purpose}` and should be used when `{trigger_context}`. Make the skill practical for future agents by defining when to use it, what to inspect, what workflow to follow, what references to load, how to verify results, and what not to do.\n\nUse `{required_workflow}`, `{verification_steps}`, `{references}`, `{tooling_context}`, `{failure_modes}`, and `{output_expectations}` to produce a skill that is easy to scan and hard to misuse. Include edge cases and fallback behavior for missing references, unavailable tools, overlap with other skills, and missing verification steps.",
      description: "Drafts concise Codex skill instructions with trigger boundaries, tooling context, failure modes, and verification defaults.",
      notes: "Source: prompt-library/ai-agents/ai-agents-skill-md-v2.md\nUse case: Skill.md authoring\nVersion notes: Expanded tooling, failure-mode, output, quality-data, and fallback guidance.",
      tags: ["ai-agents", "codex", "skill-md", "documentation", "workflow", "future-ready"],
      categoryId: "ai-agents",
      folderId: "ai-agents",
      variables: ["skill_name", "skill_purpose", "trigger_context", "required_workflow", "verification_steps", "references", "tooling_context", "failure_modes", "output_expectations"],
      isFavorite: false,
      createdAt: "2026-05-17T21:40:00.000Z",
      updatedAt: "2026-05-19T12:40:00.000Z",
      lastUsedAt: null,
      version: 2,
      versionHistory: []
    },
    {
      id: "ai-agents-workflow-planner-v2",
      title: "Agent Workflow Planner Prompt v2",
      body:
        "Create an implementation-ready workflow plan for `{task}` using `{current_context}`, `{constraints}`, `{success_criteria}`, and `{out_of_scope}`. The plan must be decision-complete enough for an AI coding agent or engineer to execute without making major product decisions.\n\nUse `{interfaces_affected}`, `{data_requirements}`, `{risk_tolerance}`, `{testing_context}`, and `{rollout_context}` to define the approach. Include goal, assumptions, key implementation changes, interface or data changes, edge cases, fallback behavior, tests, acceptance criteria, and unresolved blockers.",
      description: "Creates a decision-complete implementation plan with interface, data, rollout, risk, test, and fallback guidance.",
      notes: "Source: prompt-library/ai-agents/ai-agents-workflow-planner-v2.md\nUse case: Workflow planner\nVersion notes: Expanded interface, data, rollout, risk, learning-signal, and fallback guidance.",
      tags: ["ai-agents", "planning", "workflow", "implementation", "handoff", "future-ready"],
      categoryId: "ai-agents",
      folderId: "ai-agents",
      variables: ["task", "current_context", "constraints", "success_criteria", "out_of_scope", "interfaces_affected", "data_requirements", "risk_tolerance", "testing_context", "rollout_context"],
      isFavorite: false,
      createdAt: "2026-05-17T21:50:00.000Z",
      updatedAt: "2026-05-19T12:50:00.000Z",
      lastUsedAt: null,
      version: 2,
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
  folderId: data.folders[0]?.id ?? "",
  generationMode: "landing_page"
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
  const matches = body.matchAll(/\{\{\s*([^{}\n]+?)\s*\}\}|\{\s*([^{}\n]+?)\s*\}/g);
  return Array.from(new Set(Array.from(matches, (match) => (match[1] ?? match[2]).trim()).filter(Boolean)));
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
    folderId: prompt.folderId,
    generationMode: prompt.generationMode
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
