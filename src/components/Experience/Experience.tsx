"use client";
import { SECTIONS, experienceSectionData } from "@/config/config";
import { Briefcase, GraduationCap } from "lucide-react";
import SectionTitle from "../typography/SectionTitle";
import TimelineComponent from "./Timeline";
import TimelineTitle from "./TimelineTitle";
import SectionWrapper from "../General/SectionWrapper";

const Experience = () => {
  // const { title, workExperience, education } = experienceSectionData;

  return (
    <SectionWrapper section={SECTIONS.EXPERIENCE}>
      <div className="mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              My Journey
            </p>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              Experience & Education
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-gradient-to-b from-primary via-ocean to-sky md:left-1/2 md:-translate-x-px" />

            <div className="space-y-12">
              {experienceSectionData.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col gap-4 md:flex-row md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-primary shadow-md md:left-1/2" />

                  {/* Content card */}
                  <div
                    className={`polaroid-card ml-12 bg-white p-6 md:ml-0 md:w-[calc(50%-2rem)] ${
                      index % 2 === 0
                        ? "rotate-1 md:mr-auto"
                        : "-rotate-1 md:ml-auto"
                    }`}
                  >
                    <div className="mb-3 flex items-start gap-3">
                      <div
                        className={`rounded-full p-2 ${
                          item.type === "education"
                            ? "bg-ocean/30"
                            : "bg-sky/50"
                        }`}
                      >
                        {item.type === "education" ? (
                          <GraduationCap className="h-4 w-4 text-primary" />
                        ) : (
                          <Briefcase className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="whitespace-pre-line text-sm font-medium text-primary">
                          {item.organization}
                        </p>
                      </div>
                    </div>
                    <p className="mb-2 text-xs tracking-wide text-muted-foreground">
                      {item.period}
                    </p>
                    <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
export default Experience;
