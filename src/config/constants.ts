import { LINK_TYPE, TAGS } from "@/types/types";

export const TagColorData: Record<TAGS, string> = {
  [TAGS.VS_CODE]: "blue",
  [TAGS.ANDROID_STUDIO]: "green",
  [TAGS.FLUTTER]: "cyan",
  [TAGS.REACT]: "cyan",
  [TAGS.TYPESCRIPT]: "blue",
  [TAGS.VUE]: "green",
  [TAGS.GENVID]: "amber",
  [TAGS.ANDROID]: "green",
  [TAGS.IOS]: "teal",
  [TAGS.FIREBASE]: "amber",
  [TAGS.DART]: "indigo",
};

export const LinkTypeColorData: Record<LINK_TYPE, string> = {
  [LINK_TYPE.MAIN_WEBSITE]: "blue-gray",
  [LINK_TYPE.SECONDARY_WEBSITE]: "blue",
  [LINK_TYPE.YOUTUBE]: "red",
  [LINK_TYPE.GITHUB]: "undefined",
};
