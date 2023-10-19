"use client";
import { SECTIONS, aboutSectionData, navbarData } from "@/config/config";
import SectionTitle from "../typography/SectionTitle";
import SectionContent from "../typography/SectionContent";
import PolaroidCard from "./PolaroidCard";

const About = () => {
  const { content, imageText, imageUrl, title } = aboutSectionData;

  return (
    <div
      id={navbarData.links[SECTIONS.ABOUT].id}
      className="mx-auto my-16 flex w-full flex-col items-center px-4 md:flex-row md:justify-center"
    >
      <PolaroidCard imageUrl={imageUrl} title={imageText} />
      <div className="mt-8 max-w-2xl md:m-16">
        <SectionTitle text={title} />
        <SectionContent text={content} />
      </div>
    </div>
  );
};
export default About;
