import React from "react";
import Image from "next/image";
import { site } from "data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-hero-top to-hero-bottom px-6 pb-16 pt-20 md:px-[60px] md:pb-16 md:pt-20">
      <div
        className="pointer-events-none absolute right-[60px] top-10 hidden h-[180px] w-[180px] rounded-full bg-cobalt opacity-95 md:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-[260px] w-[260px] rounded-full bg-dark opacity-[0.12]"
        aria-hidden="true"
      />

      <div className="relative grid items-end gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
        <div>
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.15em] text-[#2a4670]">
            {site.heroEyebrow}
          </p>
          <h1 className="font-display text-[56px] font-medium leading-[0.95] tracking-[-0.035em] text-primary md:text-[96px]">
            Hi, I&apos;m{" "}
            <em className="font-display italic text-cobalt">Kennedy</em>.
          </h1>
          <p className="mt-7 max-w-[520px] font-display text-xl leading-[1.45] text-body md:text-2xl">
            {site.heroSubcopy}
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5 font-mono text-xs">
            <a
              href="#experience"
              className="rounded-full bg-dark px-3.5 py-2 text-on-dark-muted transition duration-150 hover:scale-[1.02] hover:shadow-md"
            >
              ↗ See my experience
            </a>
            <a
              href={site.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-primary/15 bg-white/55 px-3.5 py-2 text-primary transition duration-150 hover:scale-[1.02] hover:shadow-md"
            >
              Download resume
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-primary/10">
          <Image
            src={site.portrait.src}
            alt={site.portrait.alt}
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
