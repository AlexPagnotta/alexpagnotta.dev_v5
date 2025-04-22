import { ContentType } from "~/features/content/constants";
import type { WritingContentMetadata } from "~/features/content/metadata/metadata.server";

export const contentMetadata = {
  title: "Hack a Plant (?) 🪴",
  previewTitle: "Hack a Plant",
  description:
    'A small app built during a 4 hours hackathon, through "vibe-coding" and without any human intervention.',
  date: "2025-04-18",
  accentColor: "green",
  type: ContentType.WRITING,
  category: "AI",
} satisfies WritingContentMetadata;
