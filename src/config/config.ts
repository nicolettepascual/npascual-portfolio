export enum SECTIONS {
  ABOUT = "ABOUT",
  WORKS = "WORKS",
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
    [SECTIONS.WORKS]: { name: "Works", id: "works" },
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
  title: "Works",
  projects: [
    {
      thumbnail: "portfolio/proj/sh",
      title: "Silent Hill: Ascension",
      carouselImgList: ["portfolio/proj/sh"],
    },
    {
      thumbnail: "portfolio/proj/twd",
      title: "The Walking Dead: Last Mile",
      carouselImgList: ["portfolio/proj/twd-1", "portfolio/proj/twd-2"],
    },
    {
      thumbnail: "portfolio/proj/dyn",
      title: "Projects for Dynameyes, Inc.",
      carouselImgList: ["portfolio/proj/dyn"],
    },
    {
      thumbnail: "portfolio/proj/lfsa",
      title: "Lasallian Food Square App",
      carouselImgList: [
        "portfolio/proj/lfsa-1",
        "portfolio/proj/lfsa-2",
        "portfolio/proj/lfsa-3",
      ],
    },
  ],
};
