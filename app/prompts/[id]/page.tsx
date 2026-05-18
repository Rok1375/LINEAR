import { PromptDetail } from "@/components/prompt-detail";

export default async function PromptDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <PromptDetail key={id} promptId={id} />;
}
