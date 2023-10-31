"use client";
import { SECTIONS, skillsSectionData, navbarData } from "@/config/config";
import SectionTitle from "../typography/SectionTitle";
import { Icon } from "@iconify/react";
import { Tooltip } from "@material-tailwind/react";
import SectionWrapper from "../General/SectionWrapper";

const Skills = () => {
  const { title, skills } = skillsSectionData;

  return (
    <SectionWrapper section={SECTIONS.SKILLS}>
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
    </SectionWrapper>
  );
};
export default Skills;
