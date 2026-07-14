import React from "react";
import { site } from "data/site";

export default function TechMarquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-dark px-6 py-[22px] font-mono text-[13px] text-on-dark-muted md:px-[60px]">
      <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
        {site.techStack.map((tech, index) => (
          <React.Fragment key={tech}>
            {index > 0 && (
              <span className="hidden text-sky sm:inline" aria-hidden="true">
                ✦
              </span>
            )}
            <span>{tech}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
