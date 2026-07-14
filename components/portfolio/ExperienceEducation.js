import React from "react";
import { experience } from "data/experience";
import { site } from "data/site";

export default function ExperienceEducation() {
  return (
    <section
      id="experience"
      className="grid gap-12 px-6 pb-10 pt-[72px] md:px-[60px] lg:grid-cols-[1.3fr_1fr] lg:gap-12"
    >
      <div>
        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-subtle">
          § 01
        </p>
        <h2 className="mb-8 font-display text-[40px] font-medium tracking-[-0.025em] text-primary">
          Where I&apos;ve <em className="italic text-cobalt">been</em>
        </h2>

        <div>
          {experience.map((item, index) => (
            <div
              key={`${item.title}-${item.org}`}
              className={`grid grid-cols-[100px_1fr] gap-5 py-[18px] sm:grid-cols-[140px_1fr] ${
                index === 0 ? "border-t border-primary/10" : "border-t border-primary/10"
              } ${index === experience.length - 1 ? "border-b border-primary/10" : ""}`}
            >
              <div
                className={`pt-1 font-mono text-xs ${
                  item.isCurrent
                    ? "font-semibold text-cobalt"
                    : "text-subtle"
                }`}
              >
                {item.shortDateLabel}
              </div>
              <div>
                <div className="font-display text-[22px] font-medium text-primary">
                  {item.title}
                </div>
                <div className="mt-0.5 text-[13px] text-muted">{item.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="relative overflow-hidden rounded-[20px] bg-cobalt p-8 text-soft-blue">
          <div
            className="pointer-events-none absolute -right-[30px] -top-[30px] h-[120px] w-[120px] rounded-full bg-white/[0.08]"
            aria-hidden="true"
          />
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] opacity-70">
            § 03 — Education
          </p>
          <div className="mb-2 font-display text-[28px] font-medium leading-[1.15]">
            {site.education.degree}
          </div>
          <div className="text-sm opacity-85">{site.education.school}</div>
          <div className="mt-5 flex justify-between border-t border-white/15 pt-4 font-mono text-xs">
            <span>{site.education.classYear}</span>
            <span>{site.education.location}</span>
          </div>
        </div>

        <div
          id="about"
          className="rounded-[20px] border border-primary/10 bg-soft-blue p-7"
        >
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.15em] text-subtle">
            Off-screen
          </p>
          <p className="font-display text-[19px] leading-[1.45] text-[#1a2f4a]">
            {site.offScreen}
          </p>
        </div>
      </div>
    </section>
  );
}
