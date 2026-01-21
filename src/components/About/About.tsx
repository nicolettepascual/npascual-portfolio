"use client";
import {
  SECTIONS,
  aboutSectionData,
  aboutSectionSkills,
} from "@/config/config";
import SectionTitle from "../typography/SectionTitle";
import SectionContent from "../typography/SectionContent";
import PolaroidCard from "./PolaroidCard";
import SectionWrapper from "../General/SectionWrapper";

const About = () => {
  const { content, imageText, imageUrl, aboutMeText, subtitle } =
    aboutSectionData;
  return (
    <SectionWrapper section={SECTIONS.ABOUT}>
      <div className="flex min-h-full flex-grow">
        <div className="mx-auto max-w-4xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <PolaroidCard
              customDivClass="polaroid-card -rotate-2"
              imageUrl={imageUrl}
              title={imageText}
            />

            {/* About content */}
            <div className="space-y-6">
              <SectionContent text={aboutMeText} />
              <SectionTitle text={subtitle} />
              <p className="leading-relaxed text-muted-foreground">{content}</p>
              <div className="flex flex-wrap gap-3 pt-4">
                {aboutSectionSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
export default About;
