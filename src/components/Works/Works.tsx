"use client";
import { useState } from "react";
import cx from "classnames";
import { SECTIONS, projectsSectionData } from "@/config/config";
import { LINK_TYPE, Project } from "@/types/types";
import SectionTitle from "../typography/SectionTitle";
import PolaroidCard from "../About/PolaroidCard";
import Modal from "../General/Modal";
import MaterialCarousel from "../General/MaterialCarousel";
import { Chip, IconButton } from "@material-tailwind/react";
import { Button, Typography } from "@material-tailwind/react";
import FadeInSection from "../General/FadeInSection";
import SectionWrapper from "../General/SectionWrapper";

const Works = () => {
  const { title, projects } = projectsSectionData;
  const [selectedProject, setSelectedProjected] = useState<Project>();
  const [showModal, setShowModal] = useState<boolean>(false);

  const viewProject = (project: Project) => {
    setSelectedProjected(project);
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <SectionWrapper section={SECTIONS.WORKS}>
        <SectionTitle text={title} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <FadeInSection
              key={`${project}_${index}`}
              delay={(index + 1) * 200}
            >
              <PolaroidCard
                customDivClass="my-2 md:my-0 duration-500 hover:scale-105 hover:shadow-xl"
                customCardClass="w-80"
                imageUrl={project.thumbnail}
                onClick={() => viewProject(project as unknown as Project)}
                title={project.title}
                subtitle={project.subtitle}
              />
            </FadeInSection>
          ))}
        </div>
      </SectionWrapper>
      <Modal
        footerContent={
          <>
            <div className="sm:flex-no-wrap flex flex-wrap gap-1">
              {selectedProject?.tags.map((tagName, index) => (
                <Chip
                  key={`${tagName}_${index}`}
                  className={cx(
                    "font-montserrat text-xl font-thin capitalize leading-none",
                    index % 2 === 0 ? "bg-main-blue" : "bg-powder-blue",
                  )}
                  size="sm"
                  value={tagName}
                />
              ))}
            </div>
            <div className="mt-1 flex gap-1 md:mt-0">
              {selectedProject?.links.map((link, index) => {
                let iconType = "solid";
                if (
                  link.type === LINK_TYPE.GITHUB ||
                  link.type === LINK_TYPE.YOUTUBE ||
                  link.type === LINK_TYPE.FACEBOOK
                )
                  iconType = "brands";
                return (
                  <a
                    key={`${link}_${index}`}
                    href={`${link.url}`}
                    target="_blank"
                  >
                    <IconButton
                      className="rounded bg-main-blue hover:bg-powder-blue focus:outline-none"
                      size="sm"
                    >
                      <i className={`fa-${iconType} fa-${link.type} text-lg`} />
                    </IconButton>
                  </a>
                );
              })}
            </div>
          </>
        }
        setShow={setShowModal}
        show={showModal}
        title={selectedProject?.title}
      >
        {selectedProject?.carouselImgList &&
        selectedProject?.carouselImgList.length > 0 ? (
          <MaterialCarousel
            images={selectedProject?.carouselImgList}
            overlayContent={
              selectedProject?.overlay ? (
                <div className="w-4/5 text-center md:w-2/4">
                  {selectedProject?.overlay.title && (
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-2 text-lg md:mb-4 md:text-2xl lg:text-5xl"
                    >
                      {selectedProject?.overlay.title}
                    </Typography>
                  )}
                  {selectedProject?.overlay.content && (
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-2 text-sm opacity-80 md:mb-12 md:text-lg"
                    >
                      {selectedProject?.overlay.content.includes("\\n") &&
                        selectedProject.overlay.content
                          .split("\\n")
                          .map((text) => (
                            <div key={text} className="mt-2">
                              {text}
                            </div>
                          ))}
                    </Typography>
                  )}
                  {selectedProject?.overlay.btnLink && (
                    <div className="flex justify-center gap-2">
                      <a
                        href={selectedProject?.overlay.btnLink}
                        target="_blank"
                      >
                        <Button
                          className="outline-none"
                          size="sm"
                          color="white"
                        >
                          {selectedProject?.overlay.btnTitle}
                        </Button>
                      </a>
                    </div>
                  )}
                </div>
              ) : null
            }
          />
        ) : (
          <p>No images available</p>
        )}
      </Modal>
    </>
  );
};
export default Works;
