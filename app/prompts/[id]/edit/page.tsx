import { PromptForm } from "@/components/prompt-form";

export default async function EditPromptPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <PromptForm key={id} promptId={id} />;
}
