# Creative AI & Engineering Source Library System

This document outlines the complete architecture for your AI research, prompt library, creative systems, and technical documentation base. It is designed to be the ultimate single source of truth for your creative and technical workflows.

---

## 1. Master Research Map

This map categorizes the entire scope of the research domain into four primary pillars, which feed into your Linear project management system and final knowledge base.

*   **Pillar I: AI Media Generation**
    *   Image Generation & Workflows
    *   Video Generation & Motion
*   **Pillar II: Autonomous & AI Systems**
    *   Agent Skills & Orchestration
    *   Web Scraping & Browser Automation
    *   RAG & Chatbot Architectures
*   **Pillar III: Creative Frontend Engineering**
    *   Premium Websites & UI Components
    *   React / Next.js Development
    *   WebGL, Three.js & Spatial Web
*   **Pillar IV: System Architecture**
    *   Prompt Engineering Library
    *   Linear Project Documentation

---

## 2. Source Categories

### A. Image Generation Sources
*   **Tools:** Midjourney (v6+), OpenAI DALL·E 3, Google Imagen 3, Leonardo AI, Ideogram (v2), Flux.1, Stable Diffusion (SDXL/SD3), ComfyUI, Krea AI, Freepik AI, Magnific (upscaling).
*   **Content:** Official docs, Prompting guides, Style reference libraries, Model weights (Civitai/HuggingFace), Image editing/inpainting workflows, Product mockup templates, Character consistency guides.

### B. Video Generation Sources
*   **Tools:** Runway (Gen-3 Alpha), Google Veo, Kling AI, Hailuo / Minimax, Pika Labs, Luma Dream Machine, Higgsfield, CapCut AI, Adobe Firefly Video.
*   **Content:** Cinematic prompt structures, Camera movement dictionaries, Video editing automation scripts, Text-to-video / Image-to-video workflows, Scene-by-scene consistency techniques.

### C. Agent Skills Sources
*   **Tools & Frameworks:** Playwright, Puppeteer, Crawlee, Model Context Protocol (MCP) servers, LangChain/LangGraph, AutoGPT/BabyAGI concepts.
*   **Content:** Tool calling patterns, Agent memory structures, Browser automation scripts, Self-improving agent workflows, RAG chatbot implementations, Antigravity/Hermes system architectures, Error handling patterns.

### D. Website and Web App Sources
*   **Inspiration:** Awwwards, Godly.website, Land-book, Lapa Ninja, Mobbin, Dribbble, Behance, UI8, Curated Webflow/Framer showcases.
*   **Content:** Motion-first landing pages, 3D web experiences, Scroll-triggered animations, SaaS dashboards, Responsive layout systems.

### E. Components and UI Libraries
*   **Libraries:** shadcn/ui, Aceternity UI, Magic UI, Origin UI, React Bits, Tailwind UI, Radix UI, Headless UI.
*   **Content:** Copy-paste animated components, Hero sections, Interactive cards, Complex forms, Framer Motion snippets, React Three Fiber component examples.

### F. React / TypeScript / Front-End Documentation
*   **Stack:** React 18/19, TypeScript, Next.js (App Router), Vite, Tailwind CSS v4, Framer Motion, GSAP, Zustand, TanStack Query, Storybook.
*   **Content:** Official docs, Best beginner/advanced guides, Common use cases, Boilerplates, Deployment guides (Vercel/Cloudflare).

### G. WebGL / Three.js / 3D Web Sources
*   **Stack:** Three.js, React Three Fiber (R3F), Drei, WebGL.
*   **Content:** Three.js official examples, The Book of Shaders, WebGL Fundamentals, ShaderToy examples, Bruno Simon's Three.js Journey, GLTF/GLB optimization workflows, 3D scroll-based cinematic scenes.

---

## 3. Recommended Linear Project Structure

### Projects & Initiatives
Group your knowledge base building into structured Linear Projects:
1.  `LIB: Image Generation`
2.  `LIB: Video Generation`
3.  `LIB: Agent Skills`
4.  `LIB: Website Inspiration`
5.  `LIB: UI Components`
6.  `LIB: React / Front-End Docs`
7.  `LIB: Three.js / WebGL`
8.  `SYS: Prompt Library`
9.  `SYS: Automation & Scraping`
10. `SYS: RAG / Chatbots`

### Labels
*   `Type: Documentation`, `Type: Tool`, `Type: Prompt`, `Type: Workflow`, `Type: Inspiration`, `Type: GitHub`
*   `Status: To Review`, `Status: Approved`, `Status: Archived`
*   `Priority: Critical`, `Priority: High`, `Priority: Normal`

### Issue Templates
Create a default Linear Issue Template for adding new sources:
```markdown
**Description:**
[What is this resource and why is it valuable?]

**Resource Type:**
[Documentation / GitHub repo / Tutorial / Tool / Prompt / Template / Inspiration / Workflow]

**Link:**
[URL]

**Acceptance Criteria:**
- [ ] Read and review the resource.
- [ ] Complete Source Evaluation (1-50 score).
- [ ] Extract useful prompts, components, or snippets.
- [ ] Save to the central Knowledge Base.

**Output Location:**
[Notion Page / Markdown File Path]
```

---

## 4. Prompt Library Structure

Every prompt in your library must follow a strict taxonomy to ensure reusability.

**Categories:**
1. Image prompts | 2. Video prompts | 3. Website design prompts | 4. React coding prompts | 5. Three.js prompts | 6. WebGL shader prompts | 7. Component generation prompts | 8. Browser automation prompts | 9. Scraping prompts | 10. Agent skill prompts | 11. RAG / chatbot prompts | 12. UX audit prompts | 13. Motion design prompts | 14. Portfolio section prompts | 15. Landing page prompts | 16. Brand identity prompts | 17. Content generation prompts | 18. Debugging prompts | 19. Documentation prompts | 20. Linear project planning prompts

**Prompt Entry Taxonomy (Template):**
*   **Title:** (e.g., *Cinematic Drone FPV Video*)
*   **Category:** (e.g., *Video Prompts*)
*   **Purpose:** What does this prompt achieve?
*   **Best Use Cases:** When to use it (e.g., Hero video background).
*   **Prompt Template:** The exact text, with variables in `[BRACKETS]`.
*   **Required Inputs:** Variables that must be provided.
*   **Optional Inputs:** Variables that can be omitted or left to default.
*   **Expected Output Format:** What the AI/Tool should return.
*   **Quality Checklist:** Criteria to verify the output is good.
*   **Common Mistakes to Avoid:** Known failure states (e.g., "Don't use camera pan and zoom together in Runway").
*   **Example Prompt:** A filled-out version of the template.
*   **Example Output Summary:** Description of the result.

---

## 5. Research Workflow

How to process the endless stream of AI and dev resources:

1.  **Capture (Inbox):** Drop links into a "To Review" Linear backlog or a quick-capture Notion inbox. Don't evaluate yet.
2.  **Triage (Weekly):** Group captured links by Project (Image, React, WebGL, etc.). Assign priority based on current project needs.
3.  **Evaluate:** Open the resource. Apply the **Source Scoring Template** (see section 6). If it scores <30, archive it. If >30, proceed.
4.  **Extraction:**
    *   *If it's a Tool:* Add to the tech stack registry.
    *   *If it's a Component/Code:* Copy the snippet into the component library.
    *   *If it's a Workflow/Prompt:* Transcribe it into the Prompt Library Structure.
5.  **Distillation:** Summarize the absolute "Need to Know" points.
6.  **Filing:** Move the distilled knowledge into the permanent Database/Folder structure. Close the Linear issue.

---

## 6. Source Scoring Template

Evaluate every source using this rubric. Score each from 1 to 5 (Max 50 points).
*   **40-50:** Approved (Gold Standard)
*   **30-39:** Approved (Niche or specialized use)
*   **<30:** Archive / Reject

| Criteria | 1 (Poor) | 3 (Average) | 5 (Excellent) | Score |
| :--- | :--- | :--- | :--- | :--- |
| **1. Popularity/Trending** | Obscure / dead | Growing user base | Industry standard / viral | /5 |
| **2. Current Relevance** | Outdated approach | Standard approach | Cutting-edge / next-gen | /5 |
| **3. Documentation Quality** | Non-existent / messy | Usable but sparse | Exceptional, clear, examples | /5 |
| **4. Practical Usefulness** | Theoretical only | Good for specific cases | Daily driver utility | /5 |
| **5. Project Fit** | Barely relevant | Fits a future need | Solves an immediate problem | /5 |
| **6. Beginner Friendliness** | Steep learning curve | Requires some context | Copy-paste easy | /5 |
| **7. Advanced Potential** | Limited scope | Extensible | Highly customizable/scalable| /5 |
| **8. Community Activity** | Dead repo / no discord| Active maintainers | Massive, helpful community | /5 |
| **9. Visual/Design Quality** | Ugly / generic | Clean, modern | Premium, Awwwards-level | /5 |
| **10. Implementation Value** | Takes days to setup | Takes hours | Works in minutes | /5 |
| **TOTAL** | | | | **/50** |

---

## 7. Example Linear Issues

1.  **[LIB: Image Gen]** Review Flux.1 Schnell vs Dev model capabilities for UI mockup generation. *(Type: Workflow)*
2.  **[LIB: Video Gen]** Extract camera movement prompt glossary from official Runway Gen-3 documentation. *(Type: Prompt)*
3.  **[SYS: Automation]** Evaluate Crawlee vs Playwright for scraping Awwwards metadata. *(Type: Tool)*
4.  **[LIB: Components]** Import and document all "Hero Sections" from Aceternity UI. *(Type: GitHub)*
5.  **[LIB: React Docs]** Summarize Next.js App Router best practices for server-side state. *(Type: Documentation)*
6.  **[LIB: WebGL]** Complete Bruno Simon's portal scene tutorial and extract reusable shader code. *(Type: Tutorial)*
7.  **[LIB: Website Insp.]** Curate top 10 Godly.website motion-heavy portfolios and tag animation patterns. *(Type: Inspiration)*
8.  **[SYS: Prompt Lib]** Create master prompt template for "React Component Generation with Tailwind". *(Type: Prompt)*
9.  **[SYS: RAG / Chatbots]** Test Model Context Protocol (MCP) filesystem server integration for local codebase RAG. *(Type: Tool)*
10. **[LIB: WebGL]** Review React Three Drei `Float` and `PresentationControls` for product showcases. *(Type: Documentation)*

---

## 8. Example Prompt Library Entries

### 1. Image Prompt (Midjourney v6)
*   **Purpose:** Generate premium web design hero background images.
*   **Template:** `Cinematic 3D render of [SUBJECT], [COLOR_PALETTE], glassmorphism, soft studio lighting, dynamic composition, 8k, highly detailed, empty space on the [LEFT/RIGHT] for UI text --ar 16:9 --style raw --v 6.0`

### 2. Video Prompt (Kling / Runway Gen-3)
*   **Purpose:** Smooth b-roll for SaaS landing pages.
*   **Template:** `FPV drone shot flying smoothly through a [ENVIRONMENT], glowing holographic [UI_ELEMENTS] floating in the air, soft cinematic lighting, depth of field, 4k, photorealistic, slow motion.`

### 3. Website Design Prompt (AI Chatbot)
*   **Purpose:** Generate UX/UI structural ideas.
*   **Template:** `Act as an award-winning Art Director. Outline a scroll-based landing page for a [PRODUCT_TYPE]. Describe the hero section, 3 interactive scroll features using GSAP, and a unique WebGL footer. Specify color hex codes and modern typography pairings.`

### 4. React Coding Prompt (Coding Agent)
*   **Purpose:** Generate highly-animated components.
*   **Template:** `Create a React component named [COMPONENT_NAME] using TypeScript, Tailwind CSS, and Framer Motion. It should feature [ANIMATION_TYPE] on hover. Ensure it is fully responsive and uses modern hooks.`

### 5. Three.js / R3F Prompt
*   **Purpose:** Create a base 3D scene.
*   **Template:** `Write a React Three Fiber component that renders a [SHAPE/MODEL] with a custom ShaderMaterial. Include basic environment lighting from Drei, and make the object rotate slowly on the Y axis using useFrame.`

### 6. Component Generation Prompt
*   **Purpose:** Build complex UI elements like Magic UI.
*   **Template:** `Recreate a 'Glassmorphic Pricing Card' component. Use Tailwind backdrop-blur, subtle gradients, and a shiny border effect. Ensure the code is easily pasteable into a Next.js App router project.`

### 7. Browser Automation Prompt
*   **Purpose:** Write Playwright scripts for scraping.
*   **Template:** `Write a Playwright script in TypeScript to navigate to [URL], wait for the network to idle, extract all elements matching the selector [SELECTOR], and save the href and text content to a JSON file.`

### 8. Scraping Prompt (Data Extraction)
*   **Purpose:** Organize scraped raw HTML into structured data.
*   **Template:** `Take the following raw HTML snippet and extract the [DATA_POINTS]. Format the output strictly as a JSON array of objects. Do not include markdown formatting or explanations. \n\n[HTML_INPUT]`

### 9. Agent Skill Prompt
*   **Purpose:** Define a tool for an AI agent.
*   **Template:** `Create a Python tool for an AI agent that takes [INPUT_PARAMS] and executes [ACTION]. Include comprehensive docstrings, error handling for [SPECIFIC_ERRORS], and return the result as a structured dictionary.`

### 10. WebGL Shader Prompt
*   **Purpose:** Generate boilerplate GLSL.
*   **Template:** `Write a GLSL fragment shader that creates a [VISUAL_EFFECT] using a combination of Simplex Noise and time (u_time). Map the output to a color gradient between [COLOR_1] and [COLOR_2]. Keep the code optimized and well-commented.`

---

## 9. Folder / Database Structure

I highly recommend using **Obsidian (Markdown)** or **Notion** for this, mapped to your local file system, plus **GitHub** for the actual code components.

**Root Directory (`/Creative-Library`)**
*   `📁 01_Media_Generation/`
    *   `📄 Image_Prompts.md`
    *   `📄 Video_Workflows.md`
    *   `📁 Model_References/`
*   `📁 02_Agent_Systems/`
    *   `📄 Automation_Scripts.md`
    *   `📄 MCP_Server_Configs.md`
*   `📁 03_Frontend_Engineering/`
    *   `📁 UI_Components/` (Contains actual `.tsx` files or gists)
    *   `📄 React_NextJS_Docs.md`
    *   `📄 Motion_GSAP_Patterns.md`
*   `📁 04_Spatial_Web/`
    *   `📄 R3F_Snippets.md`
    *   `📄 Shader_Library.glsl`
*   `📁 05_Inspiration_Swipe_File/`
    *   `📄 Premium_Websites.md` (Links & screenshots)
*   `📁 06_Prompt_Library/`
    *   *(Structured according to Section 4)*
*   `📁 07_Templates_and_Systems/`
    *   `📄 Source_Evaluation_Rubric.md`
    *   `📄 Linear_Issue_Templates.md`

---

## 10. Next Actions

**Step 1: Set up the Linear Workspace**
*   Create the 10 Projects listed in Section 3.
*   Add the Labels and Milestones.
*   Create the "Source Review" Issue Template.

**Step 2: Initialize the Knowledge Base**
*   Create the folder structure outlined in Section 9 in your preferred tool (Notion/Obsidian).
*   Copy the Source Scoring Template (Section 6) into the root for easy access.

**Step 3: Begin the Great Ingestion (First Sprint)**
*   Open your browser bookmarks and open tabs.
*   For every tool or site, create a quick Linear Issue and drop the link in it. Do not review them yet; just dump them into the backlog.

**Step 4: Execute a Review Batch**
*   Pick 5 issues from the backlog.
*   Run them through the scoring rubric.
*   If they pass, extract the value into the Prompts or Components folders.

**Step 5: System Testing**
*   Take one of your extracted prompts (e.g., an Image Gen prompt) and use it in a real tool. Refine the prompt template based on the results.

*You now have a professional, scalable architect-level system for your creative and technical intelligence.*
