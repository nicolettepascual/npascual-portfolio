import { SECTIONS, aboutSectionData, navbarData } from "@/config/config";
import SectionTitle from "../typography/SectionTitle";
import SectionContent from "../typography/SectionContent";

const About = () => {
  return (
    <div
      id={navbarData.links[SECTIONS.ABOUT].id}
      className="max-w-4xl mx-auto my-16 px-4"
    >
      <SectionTitle text={aboutSectionData.title} />
      <SectionContent text={aboutSectionData.content} />
    </div>
  );
};

export default About;
