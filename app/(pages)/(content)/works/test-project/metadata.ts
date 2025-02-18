import { type Metadata } from "next";

import { ContentType } from "~/features/content/constants";
import type { WorkContentMetadata } from "~/features/content/metadata.server";

export const contentMetadata: WorkContentMetadata = {
  title: "A shiny new website for Placeholder",
  previewTitle: "Example Work",
  date: "2024-01-24",
  type: ContentType.WORK,
  workName: "Placeholder",
  workUrl: "https://example.com",
  workAccentColor: "pink",
  agencyName: "wild",
  agencyUrl: "https://example.com",
  awards: ["CCA {CCA} Silver Award", "{Awwwards} Honorable Mention", "{FWA} Site of the Day"],
};

export const metadata: Metadata = {
  title: contentMetadata.title,
  description: "Example Work",
};
