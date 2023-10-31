"use client";
import { useState } from "react";
import { SECTIONS, experienceSectionData, navbarData } from "@/config/config";
import { Project } from "@/types/types";
import SectionTitle from "../typography/SectionTitle";
import {
  Chip,
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
} from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import TimelineComponent from "./Timeline";
import TimelineTitle from "./TimelineTitle";

const Experience = () => {
  const { title, workExperience, education } = experienceSectionData;

  return (
    <div
      id={navbarData.links[SECTIONS.EXPERIENCE].id}
      className="mx-auto py-16 flex w-full flex-col items-center bg-main-blue px-4 pb-8 md:flex-row md:justify-center md:pb-0"
    >
      <div className="mt-8 md:m-16">
        <SectionTitle text={title} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <TimelineTitle icon="briefcase" title="Work Experience" />
            <TimelineComponent timelineData={workExperience} />
          </div>
          <div>
            <TimelineTitle icon="graduation-cap" title="Education" />
            <TimelineComponent timelineData={education} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
