import { ContentType } from "~/features/content/constants";
import type { WritingContentMetadata } from "~/features/content/metadata/metadata.server";

export const contentMetadata: WritingContentMetadata = {
  title: "Example Writing",
  previewTitle: "Example Writing",
  description: "Example Writing",
  date: "2024-01-13",
  type: ContentType.WRITING,
  category: "Personal",
};
