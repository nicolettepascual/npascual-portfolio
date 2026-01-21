"use client";
import cx from "classnames";
import { SECTIONS, navbarData } from "@/config/config";

interface SectionWrapperProps {
  section: SECTIONS;
  children: React.ReactNode;
  sectionClass?: string;
}

const SectionWrapper = (props: SectionWrapperProps) => {
  const { section, children, sectionClass } = props;

  return (
    <section
      id={navbarData.links[section].id}
      className={cx("bg-background py-16", sectionClass && sectionClass)}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
