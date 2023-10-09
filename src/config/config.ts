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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut suscipit ex. Aenean quis felis id quam convallis suscipit eget vitae diam. Fusce dui ante, fringilla at viverra id, tristique at diam. Fusce in orci In congue Etiam quis lorem in erat suscipit gravida sed mollis lorem. Etiam iaculis et lectus ut venenatis.",
  imageUrl: "portfolio/self-01",
  imageText: "Hello :)",
};
