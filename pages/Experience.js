import React from "react";
import Section from "components/ui/Section";
import ExperienceTimeline from "components/experience/ExperienceTimeline";
import { experience } from "data/experience";

const Experience = () => {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="A timeline of roles and teams I’ve contributed to. Click an item to expand details."
      className="bg-base dark:bg-dark-base"
    >
      <ExperienceTimeline items={experience} />
    </Section>
  );
};

export default Experience;

