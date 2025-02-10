import { type Metadata } from "next";

import { ContentType } from "~/features/content/constants";
import type { WorkContentMetadata } from "~/features/content/metadata.server";

export const contentMetadata: WorkContentMetadata = {
  title: "Example Work",
  previewTitle: "Example Work",
  date: "2024-01-24",
  type: ContentType.WORK,
  url: "https://example.com",
  agency: "Example Agency",
  agencyUrl: "https://example.com",
  awards: ["Award 1", "Award 2"],
};

export const metadata: Metadata = {
  title: contentMetadata.title,
  description: "Example Work",
};
