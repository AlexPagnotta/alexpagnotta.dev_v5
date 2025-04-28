import { ContentType } from "~/features/content/constants";
import type { WorkContentMetadata } from "~/features/content/metadata/metadata.server";

export const contentMetadata = {
  title: "An immersive experience for Ikea",
  previewTitle: "IKEA",
  description: `Ikea "Favoritos", an interactive experience for Ikea's new marketing campaign`,
  date: "2023-07-23",
  type: ContentType.WORK,
  accentColor: "blue",
  workUrl: "https://thefwa.com/cases/ikea-favoritos",
  workName: "Ikea",
  agencyName: "wild",
  agencyUrl: "https://wild.as",
  awards: ["{FWA} Site of the Day", "{Awwwards} Honorable Mention"],
} satisfies WorkContentMetadata;
