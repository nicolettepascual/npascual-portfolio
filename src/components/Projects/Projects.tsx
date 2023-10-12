"use client";
import { SECTIONS, projectsSectionData, navbarData } from "@/config/config";
import SectionTitle from "../typography/SectionTitle";
import PolaroidCard from "../About/PolaroidCard";
import Modal from "../General/Modal";
import { useState } from "react";

const Projects = () => {
  const { imageText, imageUrl, title } = projectsSectionData;
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div
      id={navbarData.links[SECTIONS.PROJECTS].id}
      className="bg-main-blue flex flex-col w-full mx-auto my-16 px-4 pb-8 items-center md:pb-0 md:flex-row md:justify-center"
    >
      <div className="max-w-2xl mt-8 md:m-16">
        <SectionTitle text={title} />
        <div className="flex flex-col w-full md:flex-row md:justify-center">
          <PolaroidCard
            imageUrl={imageUrl}
            onClick={() => setShowModal((prev) => !prev)}
            text={imageText}
          />
          <PolaroidCard
            imageUrl={imageUrl}
            onClick={() => setShowModal((prev) => !prev)}
            text={imageText}
          />
        </div>
      </div>
      <Modal setShow={setShowModal} show={showModal} />
    </div>
  );
};
export default Projects;
