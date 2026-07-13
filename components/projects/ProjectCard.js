import React from "react";
import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <Link href={`/${project.slug}`} className="group block">
      <article
        className={classNames(
          "card-surface overflow-hidden transition-transform duration-300 will-change-transform",
          "hover:-translate-y-1 hover:shadow-lg"
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-black/5 dark:bg-white/5">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            priority={false}
          />
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-bold tracking-tight">{project.title}</h3>
            <span className="shrink-0 rounded-full bg-black/5 px-2.5 py-1 text-xs font-semibold text-black/70 dark:bg-white/10 dark:text-white/70">
              {project.dateLabel}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-xs font-semibold text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}

