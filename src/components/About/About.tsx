"use client";
import {
  SECTIONS,
  aboutSectionData,
  aboutSectionSkills,
} from "@/config/config";
import SectionTitle from "../typography/SectionTitle";
import SectionContent from "../typography/SectionContent";
import PolaroidCard from "./PolaroidCard";
import FadeInSection from "../General/FadeInSection";
import SectionWrapper from "../General/SectionWrapper";

const About = () => {
  const { content, imageText, imageUrl, title, subtitle } = aboutSectionData;

  // return (
  //   <SectionWrapper section={SECTIONS.ABOUT} rowDisplay>
  //     <FadeInSection customClass="justify-center">
  //       <PolaroidCard imageUrl={imageUrl} title={imageText} />
  //     </FadeInSection>
  //     <div className="m-8 flex max-w-lg flex-col justify-center">
  //       <SectionTitle text={title} />
  //       <SectionContent text={content} />
  //     </div>
  //   </SectionWrapper>
  // );

  return (
    <section id="about" className="bg-background py-24">
      <div className="flex min-h-full flex-grow">
        <div className="mx-auto max-w-3xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <PolaroidCard
              customDivClass="polaroid-card -rotate-2"
              imageUrl={imageUrl}
              title={imageText}
            />

            {/* About content */}
            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                {title}
              </p>
              <h2 className="font-serif text-3xl text-foreground md:text-4xl">
                {subtitle}
              </h2>
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
    </section>
  );
};
export default About;
