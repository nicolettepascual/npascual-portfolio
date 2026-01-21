import { LINK_TYPE, TAGS, TimelineItem } from "@/types/types";

export const info = {
  initials: "NP",
  name: "Nicolette Pascual",
  title: "Tech Professional",
  metaContent:
    "Software Developer with experience in front-end development with React, HTML, CSS, and TypeScript.",
  footerLink: "https://www.linkedin.com/in/nicolettepascual/",
};

export enum SECTIONS {
  ABOUT = "ABOUT",
  WORKS = "WORKS",
  SKILLS = "SKILLS",
  EXPERIENCE = "EXPERIENCE",
  CERTIFICATIONS = "CERTIFICATIONS",
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
    [SECTIONS.CERTIFICATIONS]: { name: "Certifications", id: "certifications" },
    [SECTIONS.CONTACT]: { name: "Contact", id: "contact" },
  },
};

export const landingContentData = {
  title: info.name,
  subtitles: [
    "Tech Professional",
    "Software Developer",
    "Video Game Enthusiast",
    "Lifelong learner",
  ],
};

export const aboutSectionData = {
  aboutMeText: "About Me",
  subtitle:
    "Passionate about the technical side of things — and what's around it",
  content:
    "I'm Nicolette, a tech professional with a passion for learning. I've spent several years building mobile and web applications, which shaped how I approach problem-solving, systems, and collaboration with project teams. Learning new things that spark my interest is always on my to-do list.",
  imageUrl: "portfolio/self-01",
  imageText: "Hello :)",
};

export const aboutSectionSkills = [
  "Administrative Work",
  "Project Coordination",
  "Web Development",
  "Mobile App Development",
];

export const projectsSectionData = {
  title: "Featured Projects",
  content: "My Work",
  projects: [
    {
      thumbnail: "portfolio/proj/dchu",
      title: "DC Heroes United",
      subtitle: "A mobile game where players shape a DC superhero story",
      rotation: "-rotate-2",
      modalContent:
        "An interactive streaming series that presents an original storyline featuring iconic DC superheroes developed using Construct 3 for Genvid Entertainment.",
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
        "A browser-based video game with interactive story shaped by a global audience based on the popular video game franchise",
      modalContent:
        "A 2024 Creative Arts Emmy Award winning MILE that invites a global audience to shape an all-new Silent Hill story that could be played on a web browser. Developed with React and TypeScript.",
      carouselImgList: ["portfolio/proj/sh-1", "portfolio/proj/sh-2"],
      rotation: "rotate-1",
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
        "A video game played on Facebook Gaming with live interactive story event based on the world of the hit TV series",
      modalContent:
        "Massively interactive live event (MILE) launching as a Facebook Gaming and Facebook Watch exclusive for Genvid Entertainment developed with React, Sass, and Genvid SDK.",
      rotation: "-rotate-2",
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
      rotation: "rotate-2",
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
      modalContent:
        "An online food reservation app built as a college thesis for De La Salle University - Dasmariñas Food Square; Developed with Android Studio; Won our college's Runner Up For Best Thesis Category",
      rotation: "rotate-2",
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
  title: "Skills & Tools",
  content: "What I Work With",
  skills: [
    { iconId: "devicon:typescript", name: "TypeScript", category: "Frontend" },
    { iconId: "logos:javascript", name: "JavaScript", category: "Frontend" },
    { iconId: "logos:dart", name: "Dart", category: "Mobile" },
    { iconId: "skill-icons:react-dark", name: "React", category: "Frontend" },
    { iconId: "logos:vue", name: "Vue", category: "Frontend" },
    {
      iconId: "vscode-icons:file-type-html",
      name: "HTML",
      category: "Frontend",
    },
    { iconId: "vscode-icons:file-type-css", name: "CSS", category: "Frontend" },
    { iconId: "skill-icons:sass", name: "Sass (Scss)", category: "Frontend" },
    { iconId: "logos:graphql", name: "GraphQL", category: "Backend" },
    { iconId: "logos:flutter", name: "Flutter", category: "Mobile" },
    { iconId: "devicon:react", name: "React Native", category: "Mobile" },
    { iconId: "logos:firebase-icon", name: "Firebase", category: "Backend" },
    { iconId: "devicon:git", name: "Git", category: "Tools" },
    { iconId: "logos:bitbucket", name: "BitBucket", category: "Tools" },
    { iconId: "bi:github", name: "GitHub", category: "Tools" },
    {
      iconId: "logos:visual-studio-code",
      name: "Visual Studio Code",
      category: "Tools",
    },
    {
      iconId: "devicon:androidstudio",
      name: "Android Studio",
      category: "Tools",
    },
    { iconId: "logos:jira", name: "Jira", category: "Tools" },
    { iconId: "simple-icons:clickup", name: "ClickUp", category: "Tools" },
    {
      iconId: "logos:microsoft-teams",
      name: "Microsoft Teams",
      category: "Tools",
    },
    { iconId: "logos:notion-icon", name: "Notion", category: "Tools" },
    { iconId: "logos:slack-icon", name: "Slack", category: "Tools" },
    { iconId: "logos:figma", name: "Figma", category: "Design" },
    { iconId: "logos:payload", name: "Payload", category: "CMS" },
    { iconId: "logos:monday-icon", name: "monday.com", category: "Tools" },
    {
      iconId: "vscode-icons:file-type-outlook",
      name: "Outlook",
      category: "Tools",
    },
    {
      iconId: "simple-icons:construct3",
      name: "Construct 3",
      category: "Tools",
    },
    {
      iconId: "logos:asana-icon",
      name: "Asana",
      category: "Tools",
    },
    {
      iconId: "logos:microsoft-icon",
      name: "PlayFab",
      category: "Backend",
    },
    {
      iconId: "hugeicons:chat-gpt",
      name: "ChatGPT",
      category: "AI",
    },
    {
      iconId: "vscode-icons:file-type-gemini",
      name: "Gemini",
      category: "AI",
    },
    {
      iconId: "devicon:cursor",
      name: "Cursor",
      category: "AI",
    },
    {
      iconId: "material-icon-theme:google",
      name: "Google Workspace",
      category: "Tools",
    },
    {
      iconId: "hugeicons:office-365",
      name: "Microsoft Office",
      category: "Tools",
    },
    {
      iconId: "logos:looker-icon",
      name: "Looker",
      category: "Tools",
    },
    {
      iconId: "vscode-icons:file-type-excel",
      name: "Microsoft Excel",
      category: "Tools",
    },
    {
      iconId: "simple-icons:googlesheets",
      name: "Google Sheets",
      category: "Tools",
    },
  ],
};

export const experienceSectionHeaderData = {
  title: "Experience & Education",
  content: "My Journey",
};

export const experienceSectionData: TimelineItem[] = [
  {
    title: "Program Coordinator",
    organization: "1CloudHub\n(hired under Nityo Infotech Phillpines)",
    period: "Jun 2025 - Dec 2025",
    description:
      "Managed projects, including task assignment, timeline tracking, and follow-ups to ensure timely delivery",
    type: "work",
  },
  {
    title: "Junior Web Application Developer",
    organization: "Streamline Studios",
    period: "Aug 2022 - Jan 2025",
    description:
      "Worked on multiple web game projects using React, Typescript, and Genvid Technology",
    type: "work",
  },
  {
    title: "Software Engineer",
    organization: "Dynameyes, Inc.",
    period: "Jan 2020 - Jul 2022",
    description:
      "Worked on several fintech projects using Vue.js framework with TypeScript for web apps and Fluter framework for mobile apps",
    type: "work",
  },
  {
    title: "Web Developer Intern",
    organization: "Startup Inc.",
    period: "Jun 2018 - Aug 2018",
    description:
      "Developed a service record web application for the Human Resources Department using HTML and PHP with basic implementation of CSS and AJAX",
    type: "work",
  },
  {
    title: "Bachelor of Science in Computer Science",
    organization: "De La Salle University - Dasmariñas",
    period: "Jun 2015 - May 2019",
    description:
      "• Deans Honor Lister (2016; 2017; 2018)\n• Program Council Auditor\n• Gawad Agham Excellence in Leadership Awardee\n• Gawad Agham Runner-Up For Best Thesis in App Category",
    type: "education",
  },
];

export const certificationsSectionData = {
  title: "Certifications & Online Courses",
  content: "Learning Never Stops",
  certifications: [
    {
      title: "AWS Cloud Practitioner Essentials",
      date: "July 2025",
      link: "https://asset.cloudinary.com/dhxirx75d/b56cfcb9adf5ec24dc37008fa4366133",
      issuer: "AWS Training Online",
      description:
        "Tackles AWS Cloud concepts, AWS services, security, architecture, pricing, and support to build one's AWS Cloud knowledge",
    },
    {
      title: "IT Customer Support Basics",
      date: "June 2025",
      link: "https://www.credly.com/badges/4e49b890-fcc4-4f64-94fe-b39ab5384d04/linked_in_profile",
      issuer: "Cisco Networking Academy",
      description:
        "Covers the basics of help desk operations, customer service, and remote troubleshooting.",
    },
    {
      title: "Workflow Specialist Certificate",
      date: "March 2025",
      link: "https://certifications.asana.com/ef06ab4d-87ea-48bd-8e15-b2ddbac0361a",
      issuer: "Asana Academy",
      description:
        "Demonstrates skills in team leadership, project management, and workflow optimization.",
    },
    {
      title: "Foundations Skill Badge",
      date: "March 2025",
      link: "https://certifications.asana.com/072d8a05-4633-4912-8570-794c28b16692",
      issuer: "Asana Academy",
      description:
        "Focuses on project management, team communication, and Asana basics.",
    },
    {
      title: "Build a free website with WordPress",
      date: "January 2025",
      issuer: "Coursera Project Network",
      link: "https://www.coursera.org/account/accomplishments/verify/LMAIJUCSI9YD",
      description:
        "Hands-on project for creating and customizing a WordPress website without coding.",
    },
    {
      title: "Business Analysis and Process Management",
      date: "January 2025",
      link: "https://www.coursera.org/account/accomplishments/verify/Z0QXFWVXR7YP",
      issuer: "Coursera Project Network",
      description:
        "Covers essential skills for analyzing and improving business processes.",
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
