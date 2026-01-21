export interface Link {
  type: LINK_TYPE;
  url: string;
}

export interface Project {
  thumbnail: string;
  title: string;
  modalContent?: string;
  overlay?: {
    title: string;
    content: string;
    btnTitle: string;
    btnLink: string;
  };
  carouselImgList: string[];
  tags: TAGS[];
  links: Link[];
}

export interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "work" | "education";
}

export enum TAGS {
  VS_CODE = "Visual Studio Code",
  ANDROID_STUDIO = "Android Studio",
  FLUTTER = "Flutter",
  REACT = "React",
  TYPESCRIPT = "TypeScript",
  VUE = "Vue",
  GENVID = "Genvid SDK",
  ANDROID = "Android",
  IOS = "iOS",
  FIREBASE = "Firebase",
  DART = "Dart",
  CONSTRUCT3 = "Construct 3",
  PLAYFAB = "PlayFab",
}

export enum LINK_TYPE {
  MAIN_WEBSITE = "arrow-up-right-from-square",
  SECONDARY_WEBSITE = "link",
  YOUTUBE = "youtube",
  GITHUB = "github",
  FACEBOOK = "facebook",
}
