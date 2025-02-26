import { LINK_TYPE, TAGS } from "@/types/types";

export const info = {
  initials: "NP",
  name: "Nicolette Pascual",
  title: "Software Developer",
  metaContent:
    "Software Developer with experience in front-end development with React, HTML, CSS, and TypeScript.",
  footerLink: "https://www.linkedin.com/in/nicolettepascual/",
};

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
  name: info.initials,
  links: {
    [SECTIONS.ABOUT]: { name: "About", id: "about" },
    [SECTIONS.WORKS]: { name: "Works", id: "works" },
    [SECTIONS.SKILLS]: { name: "Skills", id: "skills" },
    [SECTIONS.EXPERIENCE]: { name: "Experience", id: "experience" },
    [SECTIONS.CONTACT]: { name: "Contact", id: "contact" },
  },
};

export const landingContentData = {
  title: info.name,
  subtitles: [
    "Software Developer",
    '"Occasional" Mobile App Developer',
    "Video Game Enthusiast",
    "Lifelong learner",
  ],
};

export const aboutSectionData = {
  title: "About Me",
  content:
    "I'm Nicolette, a software developer with a passion for learning. My career began as a mobile app developer, and I eventually moved into web development. Learning new things that spark my interest is always on my to-do list.",
  imageUrl: "portfolio/self-01",
  imageText: "Hello :)",
};

export const projectsSectionData = {
  title: "Works",
  modalLinks: "",
  projects: [
    {
      thumbnail: "portfolio/proj/dchu",
      title: "DC Heroes United",
      subtitle:
        "An interactive streaming series that presents an original storyline featuring iconic DC superheroes",
      carouselImgList: [
        "portfolio/proj/dchu-1",
        "portfolio/proj/dchu-2",
        "portfolio/proj/dchu-3",
      ],
      tags: [
        TAGS.TYPESCRIPT,
        TAGS.CONSTRUCT3,
        TAGS.PLAYFAB,
        TAGS.GENVID,
        TAGS.VS_CODE,
      ],
      links: [
        {
          type: LINK_TYPE.MAIN_WEBSITE,
          url: "https://dcheroesunited.com/",
        },
        {
          type: LINK_TYPE.SECONDARY_WEBSITE,
          url: "https://genvid.com/titles/dc-heroes-united/",
        },
        {
          type: LINK_TYPE.YOUTUBE,
          url: "https://www.youtube.com/watch?v=bwcA1lhRK84",
        },
      ],
    },
    {
      thumbnail: "portfolio/proj/sh",
      title: "Silent Hill: Ascension",
      subtitle:
        "An innovative MILE that invites a global audience to shape an all-new Silent Hill story",
      carouselImgList: ["portfolio/proj/sh-1", "portfolio/proj/sh-2"],
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
      carouselImgList: [
        "portfolio/proj/twd-1",
        "portfolio/proj/twd-2",
        "portfolio/proj/twd-3",
        "portfolio/proj/twd-4",
      ],
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
        {
          type: LINK_TYPE.FACEBOOK,
          url: "https://www.facebook.com/TheWalkingDeadLastMile/",
        },
      ],
    },
    {
      thumbnail: "portfolio/proj/dyn",
      title: "Projects for Dynameyes, Inc.",
      subtitle:
        "Developed and published several apps/sites while working for this Fintech company",
      overlay: {
        title: "Confidential Projects with Dynameyes, Inc.",
        content:
          "I've worked on a number of projects with Dynameyes, Inc. but as I have signed a non-disclosure contract with them, further details about these projects are confidential.\\n You could check out the company's portfolio to see some of my projects there!",
        btnTitle: "Learn More",
        btnLink: "https://dynameyes.dev/portfolio.html",
      },
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
      subtitle:
        "An online food reservation app for DLSU-D Food Square, developed as a college thesis project",
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

export const skillsSectionData = {
  title: "Skills",
  skills: [
    { iconId: "devicon:typescript", text: "TypeScript" },
    { iconId: "logos:javascript", text: "JavaScript" },
    { iconId: "logos:dart", text: "Dart" },
    { iconId: "skill-icons:react-dark", text: "React" },
    { iconId: "logos:vue", text: "Vue" },
    { iconId: "vscode-icons:file-type-html", text: "HTML" },
    { iconId: "vscode-icons:file-type-css", text: "CSS" },
    { iconId: "skill-icons:sass", text: "Sass (Scss)" },
    { iconId: "logos:graphql", text: "GraphQL" },
    { iconId: "logos:flutter", text: "Flutter" },
    { iconId: "devicon:react", text: "React Native" },
    { iconId: "logos:firebase", text: "Firebase" },
    { iconId: "devicon:git", text: "Git" },
    { iconId: "logos:bitbucket", text: "BitBucket" },
    { iconId: "bi:github", text: "GitHub" },
    { iconId: "logos:visual-studio-code", text: "Visual Studio Code" },
    { iconId: "devicon:androidstudio", text: "Android Studio" },
    { iconId: "logos:jira", text: "Jira" },
    { iconId: "simple-icons:clickup", text: "ClickUp" },
    { iconId: "logos:microsoft-teams", text: "Microsoft Teams" },
    { iconId: "logos:notion-icon", text: "Notion" },
    { iconId: "logos:slack-icon", text: "Slack" },
    { iconId: "logos:figma", text: "Figma" },
    { iconId: "logos:payload", text: "Payload CMS" },
  ],
};

export const experienceSectionData = {
  title: "Education and Experience",
  workExperience: [
    {
      title: "Junior Web Application Developer",
      year: "Aug 2022 - Jan 2025",
      subtitle: "Streamline Studios",
      description:
        "Worked on multiple web game projects using React, Typescript, and Genvid Technology",
    },
    {
      title: "Software Engineer",
      year: "Jan 2020 - Jul 2022",
      subtitle: "Dynameyes, Inc.",
      description:
        "Worked on several fintech projects using Vue.js framework with TypeScript for web apps and Fluter framework for mobile apps",
    },
    {
      title: "Web Developer Intern",
      year: "Jun 2018 - Aug 2018",
      subtitle: "Senate of the Phillpines",
      description:
        "Developed a service record web application for the Human Resources Department using HTML and PHP with basic implementation of CSS and AJAX",
    },
  ],
  education: [
    {
      title: "Bachelor of Science in Computer Science",
      year: "2015-2019",
      subtitle: "De La Salle University - Dasmariñas",
      listContent: [
        "Deans Honor Lister (2016; 2017; 2018)",
        "Computer Science and Information Technology Program Council Auditor",
        "Gawad Agham Excellence in Leadership Award",
        "Gawad Agham Runner-Up For Best Thesis in App Category",
      ],
    },
  ],
};

export const contactSection = {
  title: "Let's get in touch!",
  subtitle:
    "I'm always interested to learn new things and connect. If you have an opportunity or just want to say hi, feel free to reach out!",
  links: [
    {
      text: "Send an email",
      icon: "fa-solid fa-envelope",
      url: "mailto:nicolette.pascual@gmail.com",
    },
    {
      text: "Connect via LinkedIn",
      icon: "fa-brands fa-linkedin",
      url: info.footerLink,
      color: "blue",
    },
  ],
};
