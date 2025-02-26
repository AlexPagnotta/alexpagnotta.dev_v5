import { type Metadata } from "next";

import { ContentType } from "~/features/content/constants";
import type { LabContentMetadata } from "~/features/content/metadata.server";

export const contentMetadata: LabContentMetadata = {
  title: "Carousel",
  previewTitle: "Carousel",
  date: "2024-01-24",
  type: ContentType.LAB,
  category: "3D",
  stack: ["Motion", "Tailwind"],
};

export const metadata: Metadata = {
  title: contentMetadata.title,
  description: "Carousel",
};
