import { ContentType } from "~/features/content/constants";
import type { WorkContentMetadata } from "~/features/content/metadata/metadata.server";

export const contentMetadata: WorkContentMetadata = {
  title: "TODO for Ikea",
  previewTitle: "IKEA",
  description: "TODO for Ikea",
  date: "2023-07-23",
  type: ContentType.WORK,
  workName: "Ikea",
  workAccentColor: "blue",
  agencyName: "wild",
  agencyUrl: "https://wild.as",
  awards: ["{FWA} Site of the Day", "{Awwwards} Honorable Mention"],
};
