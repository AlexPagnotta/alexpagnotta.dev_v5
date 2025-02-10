import { type Metadata } from "next";

import { ContentType } from "~/features/content/constants";
import type { WritingContentMetadata } from "~/features/content/metadata.server";

export const contentMetadata: WritingContentMetadata = {
  title: "Example Writing",
  previewTitle: "Example Writing",
  date: "2024-01-13",
  type: ContentType.WRITING,
};

export const metadata: Metadata = {
  title: contentMetadata.title,
  description: "Example Writing",
};
