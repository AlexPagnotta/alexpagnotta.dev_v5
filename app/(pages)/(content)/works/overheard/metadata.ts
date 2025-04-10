import { ContentType } from "~/features/content/constants";
import type { WorkContentMetadata } from "~/features/content/metadata/metadata.server";

export const contentMetadata: WorkContentMetadata = {
  title: "A flashy new website for Overheard",
  previewTitle: "Overheard",
  description: "A flashy new website for Overheard",
  date: "2022-09-01",
  type: ContentType.WORK,
  workUrl: "https://overheardhq.com/",
  workName: "Overheard",
  workAccentColor: "pink",
  agencyName: "wild",
  agencyUrl: "https://wild.as",
  awards: ["CCA {CCA} Silver Award"],
};
