import { ContentType } from "~/features/content/constants";
import type { WritingContentMetadata } from "~/features/content/metadata/metadata.server";

export const contentMetadata = {
  title: "Example Writing",
  previewTitle: "Example Writing",
  description: "Example Writing",
  date: "2024-01-13",
  accentColor: "blue",
  type: ContentType.WRITING,
  category: "Personal",
} satisfies WritingContentMetadata;
