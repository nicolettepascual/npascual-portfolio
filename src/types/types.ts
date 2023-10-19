export interface Link {
  type: LINK_TYPE;
  url: string;
}

export interface Project {
  thumbnail: string;
  title: string;
  carouselImgList: string[];
  tags: TAGS[];
  links: Link[];
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
}

export enum LINK_TYPE {
  MAIN_WEBSITE = "arrow-up-right-from-square",
  SECONDARY_WEBSITE = "link",
  YOUTUBE = "youtube",
  GITHUB = "github",
}
