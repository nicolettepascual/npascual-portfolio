"use client";
import { SECTIONS, aboutSectionData } from "@/config/config";
import SectionTitle from "../typography/SectionTitle";
import SectionContent from "../typography/SectionContent";
import PolaroidCard from "./PolaroidCard";
import FadeInSection from "../General/FadeInSection";
import SectionWrapper from "../General/SectionWrapper";

const About = () => {
  const { content, imageText, imageUrl, title } = aboutSectionData;

  return (
    <SectionWrapper section={SECTIONS.ABOUT} rowDisplay>
      <FadeInSection customClass="justify-center">
        <PolaroidCard imageUrl={imageUrl} title={imageText} />
      </FadeInSection>
      <div className="m-8 flex max-w-lg flex-col justify-center">
        <SectionTitle text={title} />
        <SectionContent text={content} />
      </div>
    </SectionWrapper>
  );
};
export default About;
