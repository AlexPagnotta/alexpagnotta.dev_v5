import { type Metadata } from "next";

import { ContentType } from "~/features/content/constants";
import type { LabContentMetadata } from "~/features/content/metadata.server";

export const contentMetadata: LabContentMetadata = {
  title: "Example Experiment",
  previewTitle: "Example Experiment",
  date: "2024-01-24",
  type: ContentType.LAB,
  stack: ["Motion", "Tailwind"],
};

export const metadata: Metadata = {
  title: contentMetadata.title,
  description: "Example Experiment",
};
