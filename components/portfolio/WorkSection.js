import React from "react";
import Link from "next/link";
import { projects } from "data/projects";

export default function WorkSection() {
  return (
    <section id="work" className="px-6 py-10 md:px-[60px]">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-subtle">
            § 02
          </p>
          <h2 className="font-display text-4xl font-medium tracking-[-0.025em] text-primary md:text-[44px]">
            Selected <em className="italic text-cobalt">work</em>
          </h2>
        </div>
        <span className="font-mono text-xs text-subtle">2023 — 2026</span>
      </div>

      <div>
        {projects.map((project, index) => {
          const accent = project.accent;
          const primaryTag = project.tags[0];

          return (
            <Link
              key={project.slug}
              href={`/${project.slug}`}
              className="group grid grid-cols-[40px_1fr] items-center gap-x-4 gap-y-2 border-t border-primary/15 py-[26px] transition-colors duration-150 hover:bg-primary/[0.03] sm:grid-cols-[60px_1fr_auto_auto_auto] sm:gap-x-6"
            >
              <span className="font-mono text-xs text-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="col-span-1 sm:col-span-1">
                <div className="font-display text-2xl font-medium text-primary md:text-[28px]">
                  {project.title}
                </div>
                <div className="mt-1 hidden text-[13px] text-muted sm:block">
                  {project.description}
                </div>
              </div>

              <span
                className="col-start-2 row-start-2 w-fit rounded-full px-2.5 py-1 font-mono text-[11px] text-white sm:col-start-auto sm:row-start-auto"
                style={{ backgroundColor: accent }}
              >
                {primaryTag}
              </span>

              <span className="hidden font-mono text-xs text-subtle sm:block">
                {project.dateLabel}
              </span>

              <span
                className="hidden font-display text-2xl transition-transform duration-150 group-hover:translate-x-1 group-hover:-translate-y-1 sm:block"
                style={{ color: accent }}
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>
          );
        })}
        <div className="border-t border-primary/15" />
      </div>
    </section>
  );
}
