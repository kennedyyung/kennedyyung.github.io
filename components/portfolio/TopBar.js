import React, { useState } from "react";
import Link from "next/link";
import { site } from "data/site";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact", arrow: true },
];

export default function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-primary/10 px-6 py-5 md:px-10">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 font-mono text-xs uppercase tracking-wide">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-cobalt" aria-hidden="true" />
          <span className="font-semibold text-primary">{site.name}</span>
          <span className="hidden truncate text-subtle sm:inline">{site.tagline}</span>
        </Link>

        <nav className="hidden items-center gap-6 font-mono text-xs uppercase tracking-wide text-muted md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors duration-150 hover:text-primary"
            >
              {item.label}
              {item.arrow ? " ↗" : ""}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary/10 font-mono text-sm text-muted md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="mt-4 flex flex-col gap-3 border-t border-primary/10 pt-4 font-mono text-xs uppercase tracking-wide text-muted md:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="py-1 transition-colors duration-150 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {item.label}
              {item.arrow ? " ↗" : ""}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
