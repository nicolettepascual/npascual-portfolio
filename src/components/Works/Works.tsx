"use client";
import { useState } from "react";
import { SECTIONS, projectsSectionData, navbarData } from "@/config/config";
import { Project } from "@/types/types";
import SectionTitle from "../typography/SectionTitle";
import PolaroidCard from "../About/PolaroidCard";
import Modal from "../General/Modal";
import MaterialCarousel from "../General/MaterialCarousel";

const Works = () => {
  const { title, projects } = projectsSectionData;
  const [selectedProject, setSelectedProjected] = useState<Project>();
  const [showModal, setShowModal] = useState<boolean>(false);

  const viewProject = (project: Project) => {
    setSelectedProjected(project);
    setShowModal((prev) => !prev);
  };

  return (
    <div
      id={navbarData.links[SECTIONS.WORKS].id}
      className="bg-main-blue flex flex-col w-full mx-auto my-16 px-4 pb-8 items-center md:pb-0 md:flex-row md:justify-center"
    >
      <div className="mt-8 md:m-16">
        <SectionTitle text={title} />
        <div className="flex flex-col w-full md:flex-row md:justify-center">
          {projects.map((project, index) => (
            <PolaroidCard
              key={`${project}_${index}`}
              customDivClass="mx-2 my-2 md:my-0"
              customCardClass="w-80"
              imageUrl={project.thumbnail}
              onClick={() => viewProject(project as unknown as Project)}
              text={project.title}
            />
          ))}
        </div>
      </div>
      <Modal
        setShow={setShowModal}
        show={showModal}
        title={selectedProject?.title}
      >
        {selectedProject?.carouselImgList &&
        selectedProject?.carouselImgList.length > 0 ? (
          <MaterialCarousel images={selectedProject?.carouselImgList} />
        ) : (
          <p>No images available</p>
        )}
      </Modal>
    </div>
  );
};
export default Works;
