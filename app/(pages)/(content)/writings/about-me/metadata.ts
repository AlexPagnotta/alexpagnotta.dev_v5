import { ContentType } from "~/features/content/constants";
import type { WritingContentMetadata } from "~/features/content/metadata/metadata.server";

export const contentMetadata: WritingContentMetadata = {
  title: "Let me share something about me",
  previewTitle: "About Me",
  description: "A small introduction about me",
  date: "2025-02-23",
  type: ContentType.WRITING,
  category: "Personal",
};
