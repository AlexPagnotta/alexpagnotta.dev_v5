import { type Metadata } from "next";

import { ContentType } from "~/features/content/constants";
import type { WorkContentMetadata } from "~/features/content/metadata.server";

export const contentMetadata: WorkContentMetadata = {
  title: "TODO for Overheard",
  previewTitle: "Overheard",
  date: "2022-09-01",
  type: ContentType.WORK,
  workUrl: "https://overheardhq.com/",
  workName: "Overheard",
  workAccentColor: "pink",
  agencyName: "wild",
  agencyUrl: "https://wild.as",
  awards: [],
};

export const metadata: Metadata = {
  title: contentMetadata.title,
  description: "TODO for Overheard",
};
