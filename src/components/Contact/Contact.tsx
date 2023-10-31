"use client";
import { SECTIONS, navbarData, contactSection } from "@/config/config";
import SectionTitle from "../typography/SectionTitle";
import SectionContent from "../typography/SectionContent";
import { Button } from "@material-tailwind/react";
import { colors } from "@material-tailwind/react/types/generic";

const Contact = () => {
  const { title, subtitle, links } = contactSection;

  return (
    <div
      id={navbarData.links[SECTIONS.CONTACT].id}
      className="mx-auto flex w-full flex-col items-center bg-white px-4 py-16 md:flex-row md:justify-center"
    >
      <div className="mt-8 max-w-2xl md:m-16">
        <SectionTitle text={title} />
        <SectionContent text={subtitle} />
        <div className="mt-4 flex flex-col items-center gap-4 md:flex-row md:justify-center">
          {links.map((link, index) => (
            <a key={`${link.text}_${index}`} href={link.url} target="_blank">
              <Button
                className="flex items-center gap-3"
                size="lg"
                color={link.color as colors}
              >
                <i className={link.icon} />
                {link.text}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
