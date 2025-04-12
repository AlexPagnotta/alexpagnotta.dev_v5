import { ContentType } from "~/features/content/constants";
import type { WorkContentMetadata } from "~/features/content/metadata/metadata.server";

export const contentMetadata = {
  title: "A shiny new website for Placeholder",
  previewTitle: "Example Work",
  description: "A shiny new website for Placeholder",
  date: "2024-01-24",
  type: ContentType.WORK,
  accentColor: "pink",
  workName: "Placeholder",
  workUrl: "https://example.com",
  agencyName: "wild",
  agencyUrl: "https://example.com",
  awards: ["CCA {CCA} Silver Award", "{Awwwards} Honorable Mention", "{FWA} Site of the Day"],
} satisfies WorkContentMetadata;
