import { ContentType } from "~/features/content/constants";
import type { WritingContentMetadata } from "~/features/content/metadata/metadata.server";

export const contentMetadata = {
  title: "So, Who Am I? 🤔",
  previewTitle: "About Me",
  description: "A small introduction about myself",
  date: "1997-11-04",
  accentColor: "red",
  type: ContentType.WRITING,
  category: "Personal",
} satisfies WritingContentMetadata;
