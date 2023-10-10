"use client";
import { SECTIONS, aboutSectionData, navbarData } from "@/config/config";
import SectionTitle from "../typography/SectionTitle";
import SectionContent from "../typography/SectionContent";
import PolaroidCard from "../About/Polaroid";

const About = () => {
  const { content, imageText, imageUrl, title } = aboutSectionData;

  return (
    <div
      id={navbarData.links[SECTIONS.ABOUT].id}
      className="flex flex-col w-full mx-auto my-16 px-4 items-center md:flex-row md:justify-center"
    >
      <PolaroidCard imageUrl={imageUrl} text={imageText} />
      <div className="max-w-2xl mt-8 md:m-16">
        <SectionTitle text={title} />
        <SectionContent text={content} />
      </div>
    </div>
  );
};
export default About;
