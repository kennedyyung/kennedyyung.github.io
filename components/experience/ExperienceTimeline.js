import React from "react";
import classNames from "classnames";

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 7.5V6.75A2.25 2.25 0 0 1 10.5 4.5h3A2.25 2.25 0 0 1 15.75 6.75V7.5m-10.5 0h13.5m-13.5 0A2.25 2.25 0 0 0 3 9.75v8.25A2.25 2.25 0 0 0 5.25 20.25h13.5A2.25 2.25 0 0 0 21 18V9.75A2.25 2.25 0 0 0 18.75 7.5m-10.5 0V20.25"
      />
    </svg>
  );
}

export default function ExperienceTimeline({ items }) {
  return (
    <div className="relative">
      {/* Center line (desktop) / left line (mobile) */}
      <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-black/10 dark:bg-white/10 md:left-1/2 md:-ml-px" />

      <div className="space-y-6">
        {items.map((item, idx) => {
          const isRight = item.side === "right";
          return (
            <div
              key={`${item.title}-${idx}`}
              className={classNames(
                "relative grid items-start gap-4",
                "md:grid-cols-2 md:gap-10"
              )}
            >
              {/* Dot */}
              <div className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2">
                <div className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-dark-base">
                  <BriefcaseIcon className="h-4 w-4 text-black/70 dark:text-white/70" />
                </div>
              </div>

              {/* Left column */}
              <div
                className={classNames(
                  "pl-14 md:pl-0",
                  isRight ? "md:col-start-1 md:text-right" : "md:col-start-1"
                )}
              >
                {!isRight && (
                  <details className="card-surface group overflow-hidden">
                    <summary className="cursor-pointer list-none px-5 py-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold tracking-wide text-black/60 dark:text-white/60">
                            {item.dateLabel}
                          </p>
                          <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                          <p className="mt-1 text-sm font-semibold text-black/70 dark:text-white/70">
                            {item.org}
                          </p>
                        </div>
                        <span className="mt-1 text-black/40 transition-transform duration-200 group-open:rotate-180 dark:text-white/40">
                          ▾
                        </span>
                      </div>
                    </summary>
                    <div className="px-5 pb-5">
                      <ul className="mt-1 list-disc space-y-2 pl-5 text-sm text-black/80 dark:text-white/80">
                        {item.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  </details>
                )}
              </div>

              {/* Right column */}
              <div className={classNames("pl-14 md:pl-0", isRight ? "" : "")}>
                {isRight && (
                  <details className="card-surface group overflow-hidden">
                    <summary className="cursor-pointer list-none px-5 py-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold tracking-wide text-black/60 dark:text-white/60">
                            {item.dateLabel}
                          </p>
                          <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                          <p className="mt-1 text-sm font-semibold text-black/70 dark:text-white/70">
                            {item.org}
                          </p>
                        </div>
                        <span className="mt-1 text-black/40 transition-transform duration-200 group-open:rotate-180 dark:text-white/40">
                          ▾
                        </span>
                      </div>
                    </summary>
                    <div className="px-5 pb-5">
                      <ul className="mt-1 list-disc space-y-2 pl-5 text-sm text-black/80 dark:text-white/80">
                        {item.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  </details>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

