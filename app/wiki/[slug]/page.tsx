import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { parseMarkdown } from "@/lib/markdown";
import { WikiDocumentView } from "@/components/wiki-document-view";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

function getFilePathAndTitle(slug: string): { filePath: string; defaultTitle: string } | null {
  const cleanSlug = slug.toLowerCase();
  
  // Mapping for known root system design document
  if (cleanSlug === "ai-creative-library-system" || cleanSlug === "ai_creative_library_system") {
    return {
      filePath: path.join(process.cwd(), "ai_creative_library_system.md"),
      defaultTitle: "Creative AI & Engineering Source Library System"
    };
  }

  // Otherwise check the creative production research directory
  const researchDir = path.join(process.cwd(), "docs", "creative-production-research");
  const expectedFile = `${slug}.md`;
  const fullPath = path.join(researchDir, expectedFile);

  // Validate the file path to prevent directory traversal
  const relativePath = path.relative(researchDir, fullPath);
  if (relativePath.includes("..") || path.isAbsolute(relativePath)) {
    return null;
  }

  if (fs.existsSync(fullPath)) {
    return {
      filePath: fullPath,
      defaultTitle: slug.replace(/-/g, " ")
    };
  }

  return null;
}

function extractTitle(filePath: string, defaultTitle: string): string {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const h1Match = content.match(/^#\s+(.+)$/m);
    if (h1Match) {
      return h1Match[1].trim();
    }
  } catch (error) {
    console.error("Error reading title from file:", error);
  }
  return defaultTitle;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fileInfo = getFilePathAndTitle(slug);
  
  if (!fileInfo) {
    return { title: "Document Not Found | Wiki" };
  }

  const title = extractTitle(fileInfo.filePath, fileInfo.defaultTitle);
  return {
    title: `${title} | Wiki Reference`,
    description: `Technical reference document for ${title} from the AI Creative Library.`
  };
}

export default async function WikiDetailPage({ params }: Props) {
  const { slug } = await params;
  const fileInfo = getFilePathAndTitle(slug);

  if (!fileInfo) {
    notFound();
  }

  let content = "";
  try {
    content = fs.readFileSync(fileInfo.filePath, "utf-8");
  } catch (error) {
    console.error(`Error reading wiki doc for slug ${slug}:`, error);
    notFound();
  }

  const blocks = parseMarkdown(content);
  const title = extractTitle(fileInfo.filePath, fileInfo.defaultTitle);

  return <WikiDocumentView title={title} slug={slug} blocks={blocks} />;
}
