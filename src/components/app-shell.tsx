"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

const navigation = [
  { href: "/library", label: "Library" },
  { href: "/prompts/new", label: "New Prompt" },
  { href: "/optimize", label: "Optimize" },
  { href: "/settings", label: "Settings" }
];

export function AppShell({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <p className="eyebrow">Prompt Library</p>
          <h1>Keep strong prompts close.</h1>
          <p className="lede">
            A local-first workspace for saving, refining, and reopening prompts without losing momentum.
          </p>
        </div>

        <nav className="nav-list" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link key={item.href} href={item.href} className={active ? "nav-link nav-link-active" : "nav-link"}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-card">
          <p className="sidebar-label">Quick find</p>
          <p>Use the library search to reopen prompts by title, tag, or phrase.</p>
        </div>
      </aside>

      <div className="main-column">
        <header className="topbar">
          <div>
            <p className="eyebrow">Workspace</p>
            <p className="topbar-title">Local-first prompt management MVP</p>
          </div>

          <Link href="/library" className="search-chip">
            Search saved prompts
          </Link>
        </header>

        <main className="content-frame">{children}</main>
      </div>
    </div>
  );
}

