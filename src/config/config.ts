import { LINK_TYPE, TAGS } from "@/types/types";

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
  modalLinks: "",
  projects: [
    {
      thumbnail: "portfolio/proj/sh",
      title: "Silent Hill: Ascension",
      subtitle:
        "A massively interactive live event (MILE) in which the worldwide audience determines the course of the story",
      carouselImgList: ["portfolio/proj/sh"],
      tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.GENVID, TAGS.VS_CODE],
      links: [
        {
          type: LINK_TYPE.MAIN_WEBSITE,
          url: "https://ascension.com/",
        },
        {
          type: LINK_TYPE.SECONDARY_WEBSITE,
          url: "https://www.genvid.com/titles/silent-hill-ascension",
        },
        {
          type: LINK_TYPE.YOUTUBE,
          url: "https://www.youtube.com/watch?v=ZPbbwOqvniA",
        },
      ],
    },
    {
      thumbnail: "portfolio/proj/twd",
      title: "The Walking Dead: Last Mile",
      subtitle:
        "Massively interactive live event (MILE) launching as a Facebook Gaming and Facebook Watch exclusive",
      carouselImgList: ["portfolio/proj/twd-1", "portfolio/proj/twd-2"],
      tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.GENVID, TAGS.VS_CODE],
      links: [
        {
          type: LINK_TYPE.SECONDARY_WEBSITE,
          url: "https://www.genvid.com/titles/the-walking-dead-last-mile",
        },
        {
          type: LINK_TYPE.YOUTUBE,
          url: "https://www.youtube.com/watch?v=zhF2Sm4GUFI",
        },
      ],
    },
    {
      thumbnail: "portfolio/proj/dyn",
      title: "Projects for Dynameyes, Inc.",
      subtitle:
        "Developed and published several apps/sites while working for this Fintech company",
      carouselImgList: ["portfolio/proj/dyn"],
      tags: [
        TAGS.VUE,
        TAGS.TYPESCRIPT,
        TAGS.VS_CODE,
        TAGS.ANDROID_STUDIO,
        TAGS.FIREBASE,
        TAGS.FLUTTER,
        TAGS.DART,
      ],
      links: [
        {
          type: LINK_TYPE.MAIN_WEBSITE,
          url: "https://dynameyes.com/portfolio/",
        },
      ],
    },
    {
      thumbnail: "portfolio/proj/lfsa",
      title: "Lasallian Food Square App",
      subtitle: "An online food reservation app for DLSU-D Food Square",
      carouselImgList: [
        "portfolio/proj/lfsa-1",
        "portfolio/proj/lfsa-2",
        "portfolio/proj/lfsa-3",
      ],
      tags: [TAGS.ANDROID, TAGS.ANDROID_STUDIO, TAGS.FIREBASE],
      links: [
        {
          type: LINK_TYPE.GITHUB,
          url: "https://github.com/nicolettepascual/lfsa-source-code",
        },
      ],
    },
  ],
};
