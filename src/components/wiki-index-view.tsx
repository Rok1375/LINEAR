"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { renderInlineText, MarkdownBlock } from "@/lib/markdown";

interface WikiIndexViewProps {
  blocks: MarkdownBlock[];
}

export function WikiIndexView({ blocks }: WikiIndexViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const pillarsGridRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set(".gsap-wiki-fade", { opacity: 1, y: 0, scale: 1 });
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 }
      });

      tl.fromTo(headerRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0 });
      
      tl.fromTo(
        ".gsap-pillar-card",
        { opacity: 0, y: 20, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.7 },
        "-=0.5"
      );

      tl.fromTo(
        ".gsap-wiki-section",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.12 },
        "-=0.4"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Smooth scroll helper to jump to a pillar heading
  const scrollToAnchor = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Extract pillars for visual grid
  const pillarsList = [
    {
      id: "pillar-i-ai-media-generation",
      num: "I",
      title: "AI Media Generation",
      desc: "Workflows and metrics for synthetic video, images, and models.",
      color: "var(--accent)"
    },
    {
      id: "pillar-ii-autonomous-ai-systems",
      num: "II",
      title: "Autonomous & AI Systems",
      desc: "Agent skills, ethical crawling policies, and browser automation.",
      color: "#2b5c8f"
    },
    {
      id: "pillar-iii-creative-frontend-engineering",
      num: "III",
      title: "Creative Frontend",
      desc: "WebGL, Three.js spatial layouts, GSAP, and premium motion system guides.",
      color: "#6b339a"
    },
    {
      id: "pillar-iv-system-architecture",
      num: "IV",
      title: "System Architecture",
      desc: "System design, metadata schemas, Linear tasks, and workspace workflows.",
      color: "var(--text-muted)"
    }
  ];

  // Helper to filter tables based on search query
  const renderFilteredTable = (block: MarkdownBlock & { type: "table" }) => {
    const query = searchQuery.trim().toLowerCase();
    
    const filteredRows = block.rows.filter(row => {
      if (!query) return true;
      // Search in all cells
      return row.some(cell => cell.toLowerCase().includes(query));
    });

    if (filteredRows.length === 0) {
      return (
        <div className="wiki-empty-table-state">
          <p>No matching wiki documents found for &ldquo;{searchQuery}&rdquo;.</p>
        </div>
      );
    }

    return (
      <div className="wiki-table-wrapper">
        <table className="wiki-table">
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
            {filteredRows.map((row, ri) => (
              <tr key={ri} className="wiki-table-row">
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
  };

  return (
    <div ref={containerRef} className="wiki-container">
      {/* Wiki Header */}
      <header ref={headerRef} className="wiki-header gsap-wiki-fade">
        <div className="wiki-header-meta">
          <span className="eyebrow">Production Reference Wiki</span>
          <span className="tag-chip">16 Mapped Documents</span>
        </div>
        <h2>AI Creative Library System Reference</h2>
        <p className="lede">
          This reference wiki serves as the single entrypoint to our creative production research, mapping all technical documentation, source maps, policies, and evaluation records to the 4 Pillars of the AI Creative Library.
        </p>

        {/* Quick Search */}
        <div className="wiki-search-box">
          <label htmlFor="wiki-search" className="sr-only">Search wiki documents</label>
          <input
            id="wiki-search"
            type="search"
            placeholder="Filter reference documents by title, description or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="wiki-search-input"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="wiki-search-clear-btn"
              title="Clear search"
            >
              &times;
            </button>
          )}
        </div>
      </header>

      {/* Pillars Dashboard Grid */}
      <section ref={pillarsGridRef} className="wiki-pillars-grid">
        {pillarsList.map((pillar) => (
          <button
            key={pillar.id}
            onClick={() => scrollToAnchor(pillar.id)}
            className="pillar-card gsap-pillar-card"
            style={{ "--pillar-color": pillar.color } as React.CSSProperties}
          >
            <div className="pillar-num">Pillar {pillar.num}</div>
            <h3 className="pillar-title">{pillar.title}</h3>
            <p className="pillar-desc">{pillar.desc}</p>
            <span className="pillar-action-hint">Scroll to section &darr;</span>
          </button>
        ))}
      </section>

      {/* Wiki Dynamic Blocks */}
      <div ref={contentRef} className="wiki-content">
        {(() => {
          let currentSectionId = "";
          let sectionPillarIndex = 0;

          return blocks.map((block, idx) => {
            // Skip the main title and introduction as we customize them in the header
            if (block.type === "heading" && block.level === 1) return null;
            if (block.type === "paragraph" && idx <= 2) return null; // welcome lede paragraph
            if (block.type === "hr" && idx < 16) return null; // skip initial dividers

            // Render table of contents block nicely or skip since we have the Pillars grid
            if (block.type === "heading" && block.text === "Table of Contents") return null;
            if (block.type === "list" && idx < 15) return null; // skip list table of contents

            if (block.type === "heading" && block.level === 2) {
              // Extract header id from heading text to align with anchors
              const anchorId = block.text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
              currentSectionId = anchorId;
              
              return (
                <section key={idx} id={anchorId} className="wiki-section gsap-wiki-section">
                  <div className="wiki-section-divider"></div>
                  <div className="wiki-section-header">
                    <span className="pillar-eyebrow">Pillar {pillarsList[sectionPillarIndex++]?.num || ""}</span>
                    <h2>{block.text}</h2>
                  </div>
                </section>
              );
            }

            if (block.type === "paragraph") {
              const textContent = block.text;
              const isItalic = textContent.startsWith("*") && textContent.endsWith("*");
              const cleanText = isItalic ? textContent.slice(1, -1) : textContent;

              return (
                <p key={idx} className={isItalic ? "wiki-paragraph-italic" : "wiki-paragraph"}>
                  {renderInlineText(cleanText)}
                </p>
              );
            }

            if (block.type === "table") {
              return (
                <div key={idx} className="wiki-table-container">
                  {renderFilteredTable(block)}
                </div>
              );
            }

            if (block.type === "alert") {
              return (
                <div key={idx} className={`wiki-alert wiki-alert-${block.alertType}`}>
                  <div className="wiki-alert-icon">
                    {block.alertType === "warning" && "⚠️"}
                    {block.alertType === "danger" && "❌"}
                    {block.alertType === "caution" && "🛑"}
                    {block.alertType === "tip" && "💡"}
                    {block.alertType === "note" && "ℹ️"}
                    {block.alertType === "important" && "✨"}
                  </div>
                  <div className="wiki-alert-content">
                    <strong>{block.alertType.toUpperCase()}</strong>: {renderInlineText(block.text)}
                  </div>
                </div>
              );
            }

            if (block.type === "hr") {
              return <hr key={idx} className="wiki-hr" />;
            }

            return null;
          });
        })()}
      </div>
    </div>
  );
}
