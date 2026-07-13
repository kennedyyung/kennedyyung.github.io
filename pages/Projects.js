import React, { useMemo, useState } from "react";
import Link from "next/link";
import Section from "components/ui/Section";
import ProjectCard from "components/projects/ProjectCard";
import { projects } from "data/projects";

const Projects = () => {
  const [activeTag, setActiveTag] = useState("All");

  const allTags = useMemo(() => {
    const tags = new Set();
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return ["All", ...Array.from(tags).sort((a, b) => a.localeCompare(b))];
  }, []);

  const filtered = useMemo(() => {
    if (activeTag === "All") return projects;
    return projects.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A few things I’ve built recently. Filter by tech to explore."
      className="bg-base dark:bg-dark-base"
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {allTags.map((tag) => {
          const active = tag === activeTag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={[
                "rounded-full px-3 py-1 text-sm font-semibold transition-colors",
                active
                  ? "bg-txt text-white"
                  : "bg-black/5 text-black/70 hover:bg-black/10 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/15",
              ].join(" ")}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-10">
        <Link href="/Archived" className="inline-flex items-center gap-2 font-semibold underline underline-offset-4">
          School Projects
        </Link>
      </div>
    </Section>
  );
};

export default Projects;