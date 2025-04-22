import { ContentType } from "~/features/content/constants";
import type { WorkContentMetadata } from "~/features/content/metadata/metadata.server";

export const contentMetadata = {
  title: "ATODO Brawl Stars",
  previewTitle: "Brawl Stars",
  description: "Brawl Stars TODO",
  date: "2023-11-4",
  type: ContentType.WORK,
  accentColor: "purple",
  workName: "Brawl Stars",
  agencyName: "wild",
  agencyUrl: "https://wild.as",
  awards: [],
} satisfies WorkContentMetadata;
