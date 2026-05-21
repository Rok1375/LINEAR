"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { renderInlineText, MarkdownBlock } from "@/lib/markdown";

interface WikiDocumentViewProps {
  title: string;
  slug: string;
  blocks: MarkdownBlock[];
}

export function WikiDocumentView({ title, slug, blocks }: WikiDocumentViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLDivElement>(null);
  const tocRef = useRef<HTMLDivElement>(null);
  
  const [copyStates, setCopyStates] = useState<Record<number, string>>({});

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set(".gsap-wiki-doc-fade", { opacity: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 }
      });

      tl.fromTo(".gsap-wiki-doc-header", { opacity: 0, y: -20 }, { opacity: 1, y: 0 });
      
      tl.fromTo(
        articleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 },
        "-=0.5"
      );

      if (tocRef.current) {
        tl.fromTo(
          tocRef.current,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0 },
          "-=0.6"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [slug]);

  // Extract headings for Table of Contents
  const tocItems = blocks
    .filter(b => b.type === "heading" && (b.level === 2 || b.level === 3))
    .map(b => {
      const text = b.type === "heading" ? b.text : "";
      const level = b.type === "heading" ? b.level : 2;
      return {
        text,
        level,
        id: text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-")
      };
    });

  const scrollToAnchor = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const copyToClipboard = async (code: string, blockIdx: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopyStates(prev => ({ ...prev, [blockIdx]: "Copied!" }));
      setTimeout(() => {
        setCopyStates(prev => ({ ...prev, [blockIdx]: "" }));
      }, 2000);
    } catch {
      setCopyStates(prev => ({ ...prev, [blockIdx]: "Failed" }));
    }
  };

  return (
    <div ref={containerRef} className="wiki-doc-container">
      {/* Breadcrumb Header */}
      <header className="wiki-doc-header gsap-wiki-doc-header">
        <div className="wiki-doc-breadcrumbs">
          <Link href="/wiki" className="wiki-back-link">
            &larr; Reference Wiki
          </Link>
          <span className="wiki-breadcrumb-sep">/</span>
          <span className="wiki-breadcrumb-current">{title}</span>
        </div>
        <h1 className="wiki-doc-title">{title}</h1>
      </header>

      {/* Two-column Content Area */}
      <div className="wiki-doc-body-grid">
        {/* Main Article column */}
        <article ref={articleRef} className="wiki-doc-article">
          {blocks.map((block, idx) => {
            // Skip the main H1 heading since we render it in the header
            if (block.type === "heading" && block.level === 1) return null;

            if (block.type === "heading") {
              const anchorId = block.text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
              const className = `wiki-doc-h${block.level}`;
              switch (block.level) {
                case 1:
                  return (
                    <h1 key={idx} id={anchorId} className={className}>
                      {block.text}
                    </h1>
                  );
                case 2:
                  return (
                    <h2 key={idx} id={anchorId} className={className}>
                      {block.text}
                    </h2>
                  );
                case 3:
                  return (
                    <h3 key={idx} id={anchorId} className={className}>
                      {block.text}
                    </h3>
                  );
                case 4:
                  return (
                    <h4 key={idx} id={anchorId} className={className}>
                      {block.text}
                    </h4>
                  );
                case 5:
                  return (
                    <h5 key={idx} id={anchorId} className={className}>
                      {block.text}
                    </h5>
                  );
                case 6:
                default:
                  return (
                    <h6 key={idx} id={anchorId} className={className}>
                      {block.text}
                    </h6>
                  );
              }
            }

            if (block.type === "paragraph") {
              return (
                <p key={idx} className="wiki-doc-paragraph">
                  {renderInlineText(block.text)}
                </p>
              );
            }

            if (block.type === "list") {
              const ListTag = block.ordered ? "ol" : "ul";
              return (
                <ListTag key={idx} className={block.ordered ? "wiki-doc-ol" : "wiki-doc-ul"}>
                  {block.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="wiki-doc-li">
                      {renderInlineText(item)}
                    </li>
                  ))}
                </ListTag>
              );
            }

            if (block.type === "code") {
              const showCopied = copyStates[idx] || "Copy";
              return (
                <div key={idx} className="wiki-doc-code-block-wrapper">
                  <div className="wiki-doc-code-header">
                    <span className="wiki-doc-code-lang">{block.language || "code"}</span>
                    <button
                      onClick={() => copyToClipboard(block.code, idx)}
                      className="wiki-doc-code-copy-btn"
                    >
                      {showCopied}
                    </button>
                  </div>
                  <pre className="wiki-doc-code-pre">
                    <code>{block.code}</code>
                  </pre>
                </div>
              );
            }

            if (block.type === "table") {
              return (
                <div key={idx} className="wiki-doc-table-wrapper">
                  <table className="wiki-doc-table">
                    <thead>
                      <tr>
                        {block.headers.map((h, i) => (
                          <th key={i} style={{ textAlign: block.alignments[i] as any }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, ri) => (
                        <tr key={ri} className="wiki-doc-table-row">
                          {row.map((cell, ci) => (
                            <td key={ci} style={{ textAlign: block.alignments[ci] as any }}>
                              {renderInlineText(cell)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }

            if (block.type === "alert") {
              return (
                <div key={idx} className={`wiki-doc-alert wiki-doc-alert-${block.alertType}`}>
                  <div className="wiki-doc-alert-icon">
                    {block.alertType === "warning" && "⚠️"}
                    {block.alertType === "danger" && "❌"}
                    {block.alertType === "caution" && "🛑"}
                    {block.alertType === "tip" && "💡"}
                    {block.alertType === "note" && "ℹ️"}
                    {block.alertType === "important" && "✨"}
                  </div>
                  <div className="wiki-doc-alert-content">
                    <strong>{block.alertType.toUpperCase()}</strong>: {renderInlineText(block.text)}
                  </div>
                </div>
              );
            }

            if (block.type === "hr") {
              return <hr key={idx} className="wiki-doc-hr" />;
            }

            return null;
          })}
        </article>

        {/* Sticky Table of Contents sidebar */}
        {tocItems.length > 0 && (
          <aside ref={tocRef} className="wiki-doc-toc-sidebar">
            <div className="wiki-doc-toc-wrapper">
              <h4 className="wiki-doc-toc-title">Table of Contents</h4>
              <nav className="wiki-doc-toc-nav">
                {tocItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToAnchor(item.id)}
                    className={`wiki-doc-toc-item wiki-doc-toc-level-${item.level}`}
                  >
                    {item.text}
                  </button>
                ))}
              </nav>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
