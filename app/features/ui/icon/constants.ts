import { type IconName } from "~/features/ui/icon/name";

/**
 * Workaround to force the array to contain all possible icon names
 */
const IconNamesRecord: Record<IconName, null> = {
  "arrow-back": null,
  awwwards: null,
  "full-screen": null,
  fwa: null,
  github: null,
  linkedin: null,
  motion: null,
  next: null,
  quote: null,
  pause: null,
  play: null,
  react: null,
  remix: null,
  tailwind: null,
  wild: null,
};

export const IconNames = Object.keys(IconNamesRecord) as IconName[];
