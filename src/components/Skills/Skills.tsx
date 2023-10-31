"use client";
import { SECTIONS, skillsSectionData, navbarData } from "@/config/config";
import SectionTitle from "../typography/SectionTitle";
import { Icon } from "@iconify/react";
import { Tooltip } from "@material-tailwind/react";

const Skills = () => {
  const { title, skills } = skillsSectionData;

  return (
    <div
      id={navbarData.links[SECTIONS.SKILLS].id}
      className="mx-auto flex w-full flex-col items-center bg-white px-4 py-16 md:flex-row md:justify-center"
    >
      <div className="mt-8 max-w-2xl md:m-16">
        <SectionTitle text={title} />
        <div className="gap- mt-3 grid grid-cols-4 gap-8 md:grid-cols-6 md:gap-20">
          {skills.map((skill, index) => (
            <Tooltip
              key={`${skill.text}_${index}`}
              content={skill.text}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <Icon
                className="text-5xl duration-500 hover:scale-150"
                icon={skill.iconId}
              />
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Skills;
