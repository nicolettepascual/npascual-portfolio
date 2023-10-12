export enum SECTIONS {
  ABOUT = "ABOUT",
  PROJECTS = "PROJECTS",
  SKILLS = "SKILLS",
  EXPERIENCE = "EXPERIENCE",
  CONTACT = "CONTACT",
}

export interface NavbarData {
  name: string;
  links: Record<SECTIONS, { name: string; id: string }>;
}

export const navbarData: NavbarData = {
  name: "NP",
  links: {
    [SECTIONS.ABOUT]: { name: "About", id: "about" },
    [SECTIONS.PROJECTS]: { name: "Projects", id: "projects" },
    [SECTIONS.SKILLS]: { name: "Skills", id: "skills" },
    [SECTIONS.EXPERIENCE]: { name: "Experience", id: "experience" },
    [SECTIONS.CONTACT]: { name: "Contact", id: "contact" },
  },
};

export const landingContentData = {
  title: "Nicolette Pascual",
  subtitle: "Front-End Developer / Web Developer from the Philippines",
};

export const aboutSectionData = {
  title: "About Me",
  content:
    "I'm Nicolette, a front-end developer with a passion for learning. My career began as a mobile app developer, and I eventually moved into web development. Learning new things that spark my interest is always on my to-do list.",
  imageUrl: "portfolio/self-01",
  imageText: "Hello :)",
};

export const projectsSectionData = {
  title: "Projects",
  imageUrl: "cld-sample-5",
  imageText: "Hello :)",
};
