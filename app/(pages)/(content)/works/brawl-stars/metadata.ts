import { ContentType } from "~/features/content/constants";
import type { WorkContentMetadata } from "~/features/content/metadata/metadata.server";

export const contentMetadata = {
  title: "A storytelling experience for Brawl Stars",
  previewTitle: "Brawl Stars",
  description: "Brawl Stars Starr Park CCTV, a storytelling experience for the Brawl Stars game",
  date: "2023-11-01",
  type: ContentType.WORK,
  accentColor: "purple",
  workUrl: "https://www.youtube.com/watch?v=quP4mJDC2cE",
  workName: "Brawl Stars",
  agencyName: "wild",
  agencyUrl: "https://wild.as",
  awards: ["Bronze Lion {Bronze-Lion} at Cannes"],
} satisfies WorkContentMetadata;
