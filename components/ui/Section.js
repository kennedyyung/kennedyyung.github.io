import React from "react";
import classNames from "classnames";
import Container from "./Container";

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  className,
  children,
}) {
  return (
    <section id={id} className={classNames("section-pad", className)}>
      <Container>
        {(eyebrow || title || subtitle) && (
          <header className="mb-10">
            {eyebrow && (
              <p className="text-sm font-semibold tracking-wide text-black/60 dark:text-white/60">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 max-w-2xl text-base sm:text-lg text-black/70 dark:text-white/70">
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}

