"use client";
import { SECTIONS, experienceSectionData } from "@/config/config";
import SectionTitle from "../typography/SectionTitle";
import TimelineComponent from "./Timeline";
import TimelineTitle from "./TimelineTitle";
import SectionWrapper from "../General/SectionWrapper";

const Experience = () => {
  const { title, workExperience, education } = experienceSectionData;

  return (
    <SectionWrapper section={SECTIONS.EXPERIENCE}>
      <SectionTitle text={title} />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="mx-6 md:mx-2 lg:mx-12">
          <TimelineTitle icon="briefcase" title="Work Experience" />
          <TimelineComponent timelineData={workExperience} />
        </div>
        <div className="mx-6 md:mx-2 lg:mx-12">
          <TimelineTitle icon="graduation-cap" title="Education" />
          <TimelineComponent timelineData={education} />
        </div>
      </div>
    </SectionWrapper>
  );
};
export default Experience;
