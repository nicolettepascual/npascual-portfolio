import { SECTIONS, aboutSectionData, navbarData } from "@/config/config";

const About = () => {
  return (
    <div
      id={navbarData.links[SECTIONS.ABOUT].id}
      className="max-w-4xl mx-auto my-16 px-4"
    >
      <p className="text-2xl md:text-4xl font-bold text-center">
        {aboutSectionData.title}
      </p>
      <p className="text-base text-left md:text-center text-gray-600 leading-relaxed mt-4 px-4">
        {aboutSectionData.content}
      </p>
    </div>
  );
};

export default About;
