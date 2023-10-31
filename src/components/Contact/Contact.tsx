"use client";
import { SECTIONS, navbarData, contactSection } from "@/config/config";
import SectionTitle from "../typography/SectionTitle";
import SectionContent from "../typography/SectionContent";
import { Button } from "@material-tailwind/react";
import { colors } from "@material-tailwind/react/types/generic";
import SectionWrapper from "../General/SectionWrapper";

const Contact = () => {
  const { title, subtitle, links } = contactSection;

  return (
    <SectionWrapper section={SECTIONS.CONTACT}>
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
    </SectionWrapper>
  );
};

export default Contact;
