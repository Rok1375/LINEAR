import { PromptPackGenerator } from "@/components/prompt-pack-generator";

export const metadata = {
  title: "Generate Prompt Pack | Prompt Library",
  description: "Choose landing-page or full-site mode before generating implementation prompts."
};

export default function GeneratePage() {
  return <PromptPackGenerator />;
}
