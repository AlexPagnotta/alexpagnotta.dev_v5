import { type Metadata } from "next";

import { ContentType } from "~/features/content/constants";
import type { WritingContentMetadata } from "~/features/content/metadata.server";

export const contentMetadata: WritingContentMetadata = {
  title: "Let me share something about me",
  previewTitle: "About Me",
  date: "2025-02-23",
  type: ContentType.WRITING,
  category: "Personal",
};

export const metadata: Metadata = {
  title: contentMetadata.title,
  description: "A small introduction about me",
};
