import { SiteConfig } from "~/features/config/config";
import { ContentType } from "~/features/content/constants";
import type { LabContentMetadata } from "~/features/content/metadata/metadata.server";

export const contentMetadata = {
  title: "An infinite virtualized carousel",
  previewTitle: "Carousel",
  description: "Implementation of an infinite virtualized carousel using framer motion and use-gesture",
  date: "2024-01-24",
  accentColor: "purple",
  type: ContentType.LAB,
  category: "Animation",
  stack: ["Motion", "use-gesture 🖐️"],
  githubUrl: `${SiteConfig.projectGithub}/blob/main/app/(pages)/(content)/lab/carousel/carousel-demo/demo.tsx`,
} satisfies LabContentMetadata;
