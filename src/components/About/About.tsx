"use client";
import { SECTIONS, aboutSectionData, navbarData } from "@/config/config";
import SectionTitle from "../typography/SectionTitle";
import SectionContent from "../typography/SectionContent";
import PolaroidCard from "./PolaroidCard";
import FadeInSection from "../General/FadeInSection";

const About = () => {
  const { content, imageText, imageUrl, title } = aboutSectionData;

  return (
    <div
      id={navbarData.links[SECTIONS.ABOUT].id}
      className="mx-auto flex w-full flex-col items-center bg-white px-4 py-16 pb-8 md:flex-row md:justify-center md:pb-0"
    >
      <FadeInSection customClass="justify-center">
        <PolaroidCard imageUrl={imageUrl} title={imageText} />
      </FadeInSection>
      <div className="mt-8 max-w-2xl md:m-16">
        <SectionTitle text={title} />
        <SectionContent text={content} />
      </div>
    </div>
  );
};
export default About;
