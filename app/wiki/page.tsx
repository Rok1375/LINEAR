import fs from "fs";
import path from "path";
import { parseMarkdown } from "@/lib/markdown";
import { WikiIndexView } from "@/components/wiki-index-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wiki Index | AI Creative Library",
  description: "A centralized reference index mapping creative production research to the 4 Library Pillars."
};

export default async function WikiPage() {
  const filePath = path.join(process.cwd(), "docs/wiki-index.md");
  
  let content = "";
  try {
    content = fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    console.error("Error reading wiki-index.md:", error);
    return (
      <div className="empty-panel" style={{ padding: "40px" }}>
        <h2>Wiki Index Not Found</h2>
        <p>The wiki index file could not be read. Please run <code>pnpm wiki:generate</code> first to create the index.</p>
      </div>
    );
  }

  const blocks = parseMarkdown(content);

  return <WikiIndexView blocks={blocks} />;
}
