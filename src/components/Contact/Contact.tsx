"use client";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { SECTIONS, navbarData, contactSection } from "@/config/config";
import SectionTitle from "../typography/SectionTitle";
import SectionContent from "../typography/SectionContent";
import { Button } from "@material-tailwind/react";
import { colors } from "@material-tailwind/react/types/generic";
import SectionWrapper from "../General/SectionWrapper";
import { Icon } from "@iconify/react/dist/iconify.js";

const Contact = () => {
  const { title, subtitle, links } = contactSection;

  return (
    // <SectionWrapper section={SECTIONS.CONTACT}>
    //   <SectionTitle text={title} />
    //   <SectionContent text={subtitle} />
    //   <div className="mt-4 flex flex-col items-center gap-4 md:flex-row md:justify-center">
    //     {links.map((link, index) => (
    //       <a key={`${link.text}_${index}`} href={link.url} target="_blank">
    //         <Button
    //           className="flex items-center gap-3"
    //           size="lg"
    //           color={link.color as colors}
    //         >
    //           <i className={link.icon} />
    //           {link.text}
    //         </Button>
    //       </a>
    //     ))}
    //   </div>
    // </SectionWrapper>
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-24"
    >
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-ocean/5 blur-3xl" />
        <div className="bg-sunset/5 absolute right-0 top-0 h-64 w-64 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 font-serif text-3xl text-foreground md:text-5xl">
            {title}
          </h2>
          <p className="mb-10 text-lg text-muted-foreground">{subtitle}</p>

          <a
            key={"email"}
            href="mailto:pascual.nicolettemikhaela@gmail.com"
            target="_blank"
          >
            <Button
              size="lg"
              className="flex items-center justify-self-center rounded-full bg-primary text-base font-medium text-primary-foreground transition-all duration-300 hover:bg-ocean-deep hover:shadow-lg hover:shadow-primary/20"
            >
              <Mail className="mr-2 h-5 w-5" />
              <p>Say Hello</p>
            </Button>
          </a>

          {/* Social links */}
          <div className="mt-12 flex items-center justify-center gap-6">
            {[
              {
                icon: "fa7-brands:linkedin",
                label: "LinkedIn",
                link: "https://www.linkedin.com/in/nicolettepascual",
              },
              {
                icon: "fa6-brands:github",
                label: "GitHub",
                link: "https://github.com/nicolettepascual",
              },
            ].map(({ icon, label, link }) => (
              <a
                key={label}
                href={link}
                className="rounded-full bg-secondary p-3 text-muted-foreground transition-all duration-300 hover:bg-secondary/80 hover:text-primary"
                aria-label={label}
              >
                <Icon className="h-6 w-6" icon={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
