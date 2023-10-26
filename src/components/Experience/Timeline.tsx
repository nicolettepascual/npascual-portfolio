"use client";
import { TimelineData } from "@/types/types";
import { useState } from "react";
import { SECTIONS, experienceSectionData, navbarData } from "@/config/config";
import { Project } from "@/types/types";
import SectionTitle from "../typography/SectionTitle";
import {
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
} from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import style from "./TimelineComponent.module.css";
import cx from "classnames";
import FadeInSection from "../General/FadeInSection";

interface TimelineProps {
  timelineData: TimelineData[];
}

const TimelineComponent = (props: TimelineProps) => {
  const { timelineData } = props;

  return (
    <Timeline className="mt-6 text-white md:mt-4">
      {timelineData.map((data, index) => (
        <FadeInSection
          key={`${data.title}_${index}`}
          delay={(index + 1) * 200}
        >
          <TimelineItem>
            <TimelineConnector className={style.timelineConnector} />
            <TimelineHeader className={cx("h-3", style.timelineConnector)}>
              <TimelineIcon />
              <div className="font-handwriting text-3xl leading-[0.8] md:text-4xl">
                {data.title}
              </div>
              <div className="bg-tran ml-[-0.5rem] text-xs">{`(${data.year})`}</div>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="h6" className="my-2 leading-none">
                {data.subtitle}
              </Typography>
              {data.description && (
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal text-white"
                >
                  {data.description}
                </Typography>
              )}
              {data.listContent &&
                data.listContent.map((content, index) => (
                  <ul
                    key={`${content}_${index}`}
                    className="ml-5 mt-2 list-disc text-white"
                  >
                    <li>{content}</li>
                  </ul>
                ))}
            </TimelineBody>
          </TimelineItem>
        </FadeInSection>
      ))}
    </Timeline>
  );
};

export default TimelineComponent;
