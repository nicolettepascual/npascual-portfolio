"use client";
import { SECTIONS, skillsSectionData, navbarData } from "@/config/config";
import SectionTitle from "../typography/SectionTitle";
import { Icon } from "@iconify/react";
import { Tooltip } from "@material-tailwind/react";
import SectionWrapper from "../General/SectionWrapper";

const Skills = () => {
  const { title, skills } = skillsSectionData;

  return (
    <SectionWrapper
      section={SECTIONS.SKILLS}
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-ocean">
            What I Work With
          </span>
          <h2 className="font-display mt-2 text-4xl font-bold text-foreground md:text-5xl">
            Skills & Tools
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-ocean to-sky" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:grid-cols-5">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="group relative rounded-xl border border-sky/20 bg-polaroid p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {/* Decorative corner */}
                <div className="absolute right-2 top-2 h-6 w-6 rounded-tr-lg border-r-2 border-t-2 border-ocean/30 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="flex flex-col items-center space-y-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-ocean/20 to-sky/20 transition-all group-hover:from-ocean/30 group-hover:to-sky/30">
                    <Icon
                      className="h-6 w-6 text-5xl transition-transform duration-500 hover:scale-150"
                      icon={skill.iconId}
                    />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {skill.name}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground/70">
                    {skill.category}
                  </span>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-ocean/5 to-sky/5 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
export default Skills;
