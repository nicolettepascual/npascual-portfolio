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
      <div className="my-8 max-w-2xl md:m-16">
        <SectionTitle text={title} />
        <SectionContent text={content} />
      </div>
    </SectionWrapper>
  );
};
export default About;
