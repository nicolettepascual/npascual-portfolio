"use client";
import { SECTIONS, certificationsSectionData } from "@/config/config";
import SectionWrapper from "../General/SectionWrapper";
import SectionTitle from "../typography/SectionTitle";
import FadeInSection from "../General/FadeInSection";

const Certifications = () => {

    const { title, certifications } = certificationsSectionData;

    return (
        <SectionWrapper section={SECTIONS.CERTIFICATIONS}>
            <SectionTitle text={title} />
            <ul className="mx-auto mt-6 max-w-2xl list-disc space-y-6 px-6 text-lg text-main-blue">
                {certifications.map((cert, idx) => (
                    <FadeInSection key={`${cert.title}_${idx}`} delay={(idx + 1) * 200}>
                        <li className="mb-2">
                            <div className="font-handwriting text-3xl font-normal">
                                {cert.title}
                            </div>
                            <div className="text-base italic text-black">{cert.subtitle} <span className="text-base font-normal">({cert.date})</span></div>
                            <div className="text-sm text-black/80 mt-1">{cert.description}</div>
                        </li>
                    </FadeInSection>
                ))}
            </ul>
        </SectionWrapper>
    );
};

export default Certifications;
