import { ContentType } from "~/features/content/constants";
import type { LabContentMetadata } from "~/features/content/metadata/metadata.server";

export const contentMetadata = {
  title: "Carousel",
  previewTitle: "Carousel",
  description: "Carousel",
  date: "2024-01-24",
  accentColor: "blue",
  type: ContentType.LAB,
  category: "3D",
  stack: ["Motion", "Tailwind"],
} satisfies LabContentMetadata;
