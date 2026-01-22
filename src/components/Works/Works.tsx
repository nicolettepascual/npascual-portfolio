"use client";
import { useState } from "react";
import { SECTIONS, projectsSectionData } from "@/config/config";
import { LINK_TYPE, Project } from "@/types/types";
import Modal from "../General/Modal";
import MaterialCarousel from "../General/MaterialCarousel";
import { IconButton } from "@material-tailwind/react";
import { Button, Typography } from "@material-tailwind/react";
import SectionWrapper from "../General/SectionWrapper";
import { CldImage } from "next-cloudinary";
import SectionHeader from "../typography/SectionHeader";

const Works = () => {
  const { title, content, projects } = projectsSectionData;
  const [selectedProject, setSelectedProjected] = useState<Project>();
  const [showModal, setShowModal] = useState<boolean>(false);

  const viewProject = (project: Project) => {
    setSelectedProjected(project);
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <SectionWrapper section={SECTIONS.WORKS}>
        <div className="container mx-auto px-6">
          <SectionHeader title={title} content={content} />

          <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, index) => (
              <div
                key={`${project}_${index}`}
                onClick={() => viewProject(project as unknown as Project)}
                className="polaroid-card group cursor-pointer bg-white"
              >
                <div
                  className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-sm bg-gradient-to-br`}
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/10">
                    <CldImage
                      className="h-full w-full object-cover object-center"
                      alt="image"
                      height={600}
                      loading="lazy"
                      priority={false}
                      src={project.thumbnail}
                      width={600}
                    />
                  </div>
                </div>
                <div className="space-y-2 pt-4">
                  <h3 className="font-serif text-lg font-medium text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <Modal
        footerContent={
          <>
            <div className="sm:flex-no-wrap mt-0 flex flex-wrap gap-1">
              {selectedProject?.modalContent}
            </div>
            <div className="mt-3 flex gap-1">
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
