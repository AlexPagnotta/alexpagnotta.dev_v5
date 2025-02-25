import { type Metadata } from "next";

import { ContentType } from "~/features/content/constants";
import type { WorkContentMetadata } from "~/features/content/metadata.server";

export const contentMetadata: WorkContentMetadata = {
  title: "TODO for Duolingo",
  previewTitle: "Duolingo",
  date: "2022-11-28",
  type: ContentType.WORK,
  workUrl: "https://fowllanguage.duolingo.com/",
  workName: "Duolingo",
  workAccentColor: "green",
  agencyName: "wild",
  agencyUrl: "https://wild.as",
  awards: [],
};

export const metadata: Metadata = {
  title: contentMetadata.title,
  description: "TODO for Ikea",
};
