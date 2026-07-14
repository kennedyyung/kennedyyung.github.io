import React from "react";
import Head from "next/head";
import TopBar from "./TopBar";
import Hero from "./Hero";
import TechMarquee from "./TechMarquee";
import WorkSection from "./WorkSection";
import ExperienceEducation from "./ExperienceEducation";
import ContactSection from "./ContactSection";
import PortfolioShell from "./PortfolioShell";

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Kennedy Yung — Portfolio</title>
        <meta
          name="description"
          content="Fourth-year UBC mathematics student and software developer based in Vancouver."
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-064E3270RM" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-064E3270RM');
            `,
          }}
        />
      </Head>

      <PortfolioShell>
          <TopBar />
          <Hero />
          <TechMarquee />
          <ExperienceEducation />
          <WorkSection />
          <ContactSection />
      </PortfolioShell>
    </>
  );
}
