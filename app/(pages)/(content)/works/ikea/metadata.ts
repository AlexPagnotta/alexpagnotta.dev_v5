import { ContentType } from "~/features/content/constants";
import type { WorkContentMetadata } from "~/features/content/metadata/metadata.server";

export const contentMetadata: WorkContentMetadata = {
  title: "An immersive experience for Ikea",
  previewTitle: "IKEA",
  description: `Ikea "Favoritos"`,
  date: "2023-07-23",
  type: ContentType.WORK,
  workUrl: "https://thefwa.com/cases/ikea-favoritos",
  workName: "Ikea",
  workAccentColor: "blue",
  agencyName: "wild",
  agencyUrl: "https://wild.as",
  awards: ["{FWA} Site of the Day", "{Awwwards} Honorable Mention"],
};
