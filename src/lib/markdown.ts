import React from "react";
import Link from "next/link";

export type MarkdownBlock =
  | { type: "heading"; level: number; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "code"; language: string; code: string }
  | { type: "table"; headers: string[]; alignments: string[]; rows: string[][] }
  | { type: "alert"; alertType: "note" | "warning" | "tip" | "important" | "caution" | "danger"; text: string }
  | { type: "hr" };

// Tokenizer for bold, italic, code, and links
export function renderInlineText(text: string): React.ReactNode {
  if (!text) return "";
  
  // Match: **bold**, *italic*, `code`, [label](url)
  const tokenRegex = /(\*\*.*?\*\*|\*.*?\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(tokenRegex);
  
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return React.createElement("strong", { key: index }, part.slice(2, -2));
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return React.createElement("em", { key: index }, part.slice(1, -1));
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return React.createElement("code", { key: index, className: "inline-code" }, part.slice(1, -1));
    }
    if (part.startsWith("[") && part.includes("](")) {
      const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (match) {
        const label = match[1];
        let url = match[2];
        
        // Rewrite links for internal wiki pages
        if (url.includes("creative-production-research/")) {
          const fileMatch = url.match(/creative-production-research\/([^#\s]+)\.md/);
          if (fileMatch) {
            url = `/wiki/${fileMatch[1]}`;
            return React.createElement(Link, { key: index, href: url, className: "wiki-link" }, label);
          }
        }
        if (url.includes("ai_creative_library_system.md")) {
          url = "/wiki/ai-creative-library-system";
          return React.createElement(Link, { key: index, href: url, className: "wiki-link" }, label);
        }
        if (url.startsWith("file://") && url.endsWith(".md")) {
          const fileBasename = url.split("/").pop()?.replace(".md", "");
          if (fileBasename) {
            url = `/wiki/${fileBasename.replace(/_/g, "-")}`;
            return React.createElement(Link, { key: index, href: url, className: "wiki-link" }, label);
          }
        }
        
        // External links
        const isExternal = url.startsWith("http://") || url.startsWith("https://");
        if (isExternal) {
          return React.createElement("a", {
            key: index,
            href: url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "external-link"
          }, label);
        }
        
        // Relative hash links or standard links
        return React.createElement(Link, { key: index, href: url, className: "wiki-link" }, label);
      }
    }
    return part;
  });
}

export function parseMarkdown(content: string): MarkdownBlock[] {
  const blocks: MarkdownBlock[] = [];
  const lines = content.split(/\r?\n/);
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // 1. Fenced Code Blocks
    if (trimmed.startsWith("```")) {
      const language = trimmed.slice(3).trim();
      let code = "";
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        code += lines[i] + "\n";
        i++;
      }
      blocks.push({ type: "code", language, code: code.trim() });
      i++;
      continue;
    }

    // 2. Headings
    if (trimmed.startsWith("#")) {
      const match = trimmed.match(/^(#{1,6})\s+(.+)$/);
      if (match) {
        blocks.push({
          type: "heading",
          level: match[1].length,
          text: match[2].trim()
        });
        i++;
        continue;
      }
    }

    // 3. Horizontal Rules
    if (trimmed === "---" || trimmed === "***" || trimmed === "___") {
      blocks.push({ type: "hr" });
      i++;
      continue;
    }

    // 4. Alert Callouts and Blockquotes
    if (trimmed.startsWith(">")) {
      let alertType: "note" | "warning" | "tip" | "important" | "caution" | "danger" = "note";
      let linesList: string[] = [];

      // Check if it starts with an alert marker
      const firstLineContent = trimmed.slice(1).trim();
      const markerMatch = firstLineContent.match(/^\[!(NOTE|WARNING|TIP|IMPORTANT|CAUTION|DANGER)\]/i);
      if (markerMatch) {
        alertType = markerMatch[1].toLowerCase() as any;
        const textAfterMarker = firstLineContent.slice(markerMatch[0].length).trim();
        if (textAfterMarker) {
          linesList.push(textAfterMarker);
        }
      } else {
        linesList.push(firstLineContent);
      }

      i++;
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        const nextLineTrimmed = lines[i].trim();
        // Stop if a new alert marker begins
        if (nextLineTrimmed.match(/^>\s*\[!(NOTE|WARNING|TIP|IMPORTANT|CAUTION|DANGER)\]/i)) {
          break;
        }
        linesList.push(nextLineTrimmed.slice(1).trim());
        i++;
      }

      blocks.push({
        type: "alert",
        alertType,
        text: linesList.join(" ")
      });
      continue;
    }

    // 5. Tables
    if (trimmed.startsWith("|")) {
      // Look ahead to check for alignment separator row
      if (i + 1 < lines.length && lines[i + 1].trim().startsWith("|") && lines[i + 1].includes("---")) {
        const headers = trimmed.split("|").map(s => s.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
        const separatorRow = lines[i + 1].trim();
        const alignments = separatorRow.split("|")
          .map(s => s.trim())
          .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
          .map(s => {
            if (s.startsWith(":") && s.endsWith(":")) return "center";
            if (s.endsWith(":")) return "right";
            return "left";
          });

        const rows: string[][] = [];
        i += 2; // skip header and separator

        while (i < lines.length && lines[i].trim().startsWith("|")) {
          const rowCells = lines[i].trim().split("|")
            .map(s => s.trim())
            .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
          rows.push(rowCells);
          i++;
        }

        blocks.push({
          type: "table",
          headers,
          alignments,
          rows
        });
        continue;
      }
    }

    // 6. Unordered Lists
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ") || trimmed.startsWith("+ ")) {
      const items: string[] = [];
      while (i < lines.length) {
        const currentTrimmed = lines[i].trim();
        if (currentTrimmed.startsWith("- ") || currentTrimmed.startsWith("* ") || currentTrimmed.startsWith("+ ")) {
          items.push(currentTrimmed.slice(2).trim());
          i++;
        } else if (lines[i].trim() === "") {
          // Allow single empty line within list if next line continues the list
          if (i + 1 < lines.length && (lines[i + 1].trim().startsWith("- ") || lines[i + 1].trim().startsWith("* ") || lines[i + 1].trim().startsWith("+ "))) {
            i++;
          } else {
            break;
          }
        } else {
          break;
        }
      }
      blocks.push({ type: "list", ordered: false, items });
      continue;
    }

    // 7. Ordered Lists
    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length) {
        const currentTrimmed = lines[i].trim();
        const listMatch = currentTrimmed.match(/^\d+\.\s+(.+)$/);
        if (listMatch) {
          items.push(listMatch[1].trim());
          i++;
        } else if (lines[i].trim() === "") {
          if (i + 1 < lines.length && /^\d+\.\s+/.test(lines[i + 1].trim())) {
            i++;
          } else {
            break;
          }
        } else {
          break;
        }
      }
      blocks.push({ type: "list", ordered: true, items });
      continue;
    }

    // 8. Paragraphs
    if (trimmed !== "") {
      const paragraphLines: string[] = [];
      while (i < lines.length) {
        const nextLine = lines[i];
        const nextTrimmed = nextLine.trim();

        // Break if we hit any other block type or empty line
        if (
          nextTrimmed === "" ||
          nextTrimmed.startsWith("#") ||
          nextTrimmed.startsWith("```") ||
          nextTrimmed.startsWith(">") ||
          nextTrimmed.startsWith("|") ||
          nextTrimmed.startsWith("- ") ||
          nextTrimmed.startsWith("* ") ||
          nextTrimmed.startsWith("+ ") ||
          /^\d+\.\s+/.test(nextTrimmed) ||
          nextTrimmed === "---" ||
          nextTrimmed === "***"
        ) {
          break;
        }

        paragraphLines.push(nextTrimmed);
        i++;
      }
      blocks.push({ type: "paragraph", text: paragraphLines.join(" ") });
      continue;
    }

    // Default skip empty line
    i++;
  }

  return blocks;
}
