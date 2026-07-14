import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import TopBar from "./TopBar";
import PortfolioShell from "./PortfolioShell";
import { getProjectBySlug, getNextProject } from "data/projects";

function OverviewParagraph({ paragraph, accent }) {
  if (typeof paragraph === "string") {
    return (
      <p className="font-display text-lg leading-[1.55] text-body md:text-[22px]">
        {paragraph}
      </p>
    );
  }

  return (
    <p className="font-display text-lg leading-[1.55] text-body md:text-[22px]">
      {paragraph.before}
      <em className="font-display italic" style={{ color: accent }}>
        {paragraph.emphasis}
      </em>
      {paragraph.after}
    </p>
  );
}

export default function ProjectDetailPage({ slug }) {
  const project = getProjectBySlug(slug);
  const nextProject = getNextProject(slug);

  if (!project) {
    return (
      <PortfolioShell>
        <div className="p-12 text-center">
          <h1 className="font-display text-3xl text-primary">Project not found</h1>
          <Link href="/#work" className="mt-4 inline-block font-mono text-xs uppercase text-cobalt">
            ← All work
          </Link>
        </div>
      </PortfolioShell>
    );
  }

  const eyebrow = [project.dateLabel, ...project.tags].join(" · ");
  const primaryLink = project.links[0];
  const accent = project.accent;

  return (
    <>
      <Head>
        <title>{project.title} — Kennedy Yung</title>
        <meta name="description" content={project.description} />
      </Head>

      <PortfolioShell>
          <TopBar />

          {/* Header */}
          <div className="px-6 pb-8 pt-10 md:px-[60px] md:pb-8 md:pt-10">
            <Link
              href="/#work"
              className="inline-block font-mono text-xs text-cobalt transition-colors hover:text-primary"
            >
              ← All work
            </Link>

            <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
              <div>
                <p className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.15em] text-subtle md:mb-3.5">
                  {eyebrow}
                </p>
                {project.award && (
                  <p className="mb-3 font-mono text-xs text-muted">{project.award}</p>
                )}
                <h1 className="font-display text-[48px] font-medium leading-[0.95] tracking-[-0.035em] text-primary md:text-[84px]">
                  {project.titleBefore}
                  <em className="font-display italic" style={{ color: accent }}>
                    {project.titleEmphasis}
                  </em>
                  .
                </h1>
              </div>

              <div className="flex shrink-0 flex-wrap gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`whitespace-nowrap rounded-full px-4 py-3 font-mono text-xs transition duration-150 hover:scale-[1.02] hover:shadow-md ${
                      link === primaryLink
                        ? "bg-dark text-on-dark"
                        : "border border-primary/15 bg-white/55 text-primary"
                    }`}
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="px-6 pb-10 md:px-[60px] md:pb-12">
            <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-gradient-to-b from-hero-top to-hero-bottom">
              <div
                className="pointer-events-none absolute right-10 top-10 hidden h-[140px] w-[140px] rounded-full bg-cobalt opacity-95 md:block"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-16 -left-16 h-[220px] w-[220px] rounded-full bg-dark opacity-[0.12]"
                aria-hidden="true"
              />
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes="(min-width: 768px) 1200px, 100vw"
                className={
                  project.image.fit === "contain"
                    ? "relative object-contain object-center p-4 md:p-8"
                    : "relative object-cover object-center"
                }
                priority
              />
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-5 px-6 pb-16 md:max-w-[780px] md:px-[60px] md:pb-16">
            {project.paragraphs.map((paragraph, index) => (
              <OverviewParagraph
                key={index}
                paragraph={paragraph}
                accent={accent}
              />
            ))}
          </div>

          {/* Next project footer */}
          {nextProject && (
            <div className="flex flex-col gap-4 bg-dark px-6 py-8 text-on-dark sm:flex-row sm:items-center sm:justify-between md:px-[60px]">
              <Link
                href={`/${nextProject.slug}`}
                className="font-display text-xl font-medium text-on-dark transition-opacity hover:opacity-80 md:text-2xl"
              >
                Next: {nextProject.titleBefore}
                <em className="font-display italic text-sky">
                  {nextProject.titleEmphasis}
                </em>{" "}
                →
              </Link>
              <Link
                href="/#work"
                className="w-fit rounded-full bg-white/[0.08] px-4 py-2.5 font-mono text-xs transition-colors hover:bg-white/[0.12]"
              >
                All work ↗
              </Link>
            </div>
          )}
      </PortfolioShell>
    </>
  );
}
