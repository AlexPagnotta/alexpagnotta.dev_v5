import { ContentType } from "~/features/content/constants";
import type { LabContentMetadata } from "~/features/content/metadata/metadata.server";

export const contentMetadata: LabContentMetadata = {
  title: "Example Experiment",
  previewTitle: "Example Experiment",
  description: "Example Experiment",
  date: "2024-01-24",
  type: ContentType.LAB,
  category: "3D",
  stack: ["Motion", "Tailwind"],
};
