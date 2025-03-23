import { ContentType } from "~/features/content/constants";
import type { LabContentMetadata } from "~/features/content/metadata/metadata.server";

export const contentMetadata: LabContentMetadata = {
  title: "Carousel",
  previewTitle: "Carousel",
  description: "Carousel",
  date: "2024-01-24",
  type: ContentType.LAB,
  category: "3D",
  stack: ["Motion", "Tailwind"],
};
