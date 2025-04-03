import { ContentType } from "~/features/content/constants";
import type { WritingContentMetadata } from "~/features/content/metadata/metadata.server";

export const contentMetadata: WritingContentMetadata = {
  title: "So, Who Am I? 🤔",
  previewTitle: "About Me",
  description: "A small introduction about myself",
  date: "1997-11-04",
  type: ContentType.WRITING,
  category: "Personal",
};
