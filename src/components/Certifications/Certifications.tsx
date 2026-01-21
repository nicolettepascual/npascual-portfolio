"use client";
import { SECTIONS, certificationsSectionData } from "@/config/config";
import SectionWrapper from "../General/SectionWrapper";
import SectionTitle from "../typography/SectionTitle";
import FadeInSection from "../General/FadeInSection";

import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const { title, certifications } = certificationsSectionData;

  return (
    <SectionWrapper
      section={SECTIONS.CERTIFICATIONS}
    >
      <div className="mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Learning Never Stops
            </p>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              Certifications & Courses
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={`${cert.link ? cert.link : ""}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`polaroid-card group bg-white p-6 transition-all duration-300 hover:scale-[1.02] ${
                  index % 2 === 0 ? "rotate-1" : "-rotate-1"
                } hover:rotate-0`}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-full bg-gradient-to-br from-sky to-ocean/30 p-3">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                        {cert.title}
                      </h3>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {cert.issuer}
                    </p>
                    <p className="mb-2 text-xs tracking-wide text-muted-foreground">
                      Completed {cert.date}
                    </p>
                    <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
