import { ContentType } from "~/features/content/constants";
import type { WritingContentMetadata } from "~/features/content/metadata/metadata.server";

export const contentMetadata = {
  title: "Kindle Dash",
  previewTitle: "Kindle Dash",
  description: "How I repurposed my Kindle to be a dashboard for news and other information.",
  date: "2025-06-18",
  accentColor: "light-blue",
  type: ContentType.WRITING,
  category: "DYI",
} satisfies WritingContentMetadata;
