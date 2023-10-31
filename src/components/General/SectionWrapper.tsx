"use client";
import cx from "classnames";
import { SECTIONS, navbarData } from "@/config/config";

interface SectionWrapperProps {
  section: SECTIONS;
  children: React.ReactNode;
  rowDisplay?: boolean;
}

const SectionWrapper = (props: SectionWrapperProps) => {
  const { section, children, rowDisplay = false } = props;

  const sectionList = Object.values(SECTIONS);
  const bgColor =
    sectionList.indexOf(section) % 2 === 0 ? "white" : "main-blue";

  return (
    <div
      id={navbarData.links[section].id}
      className={`mx-auto flex w-full items-center px-4 py-8 bg-${bgColor} flex-col md:justify-center md:p-16`}
    >
      <div className={cx("md:m-8", rowDisplay && "flex flex-col md:flex-row")}>
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;
