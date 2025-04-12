import { ContentType } from "~/features/content/constants";
import type { WorkContentMetadata } from "~/features/content/metadata/metadata.server";

export const contentMetadata = {
  title: "A flashy new website for Overheard",
  previewTitle: "Overheard",
  description: "A flashy new website for Overheard",
  date: "2022-09-01",
  type: ContentType.WORK,
  accentColor: "green",
  workUrl: "https://overheardhq.com/",
  workName: "Overheard",
  agencyName: "wild",
  agencyUrl: "https://wild.as",
  awards: ["CCA {CCA} Silver Award"],
} satisfies WorkContentMetadata;
