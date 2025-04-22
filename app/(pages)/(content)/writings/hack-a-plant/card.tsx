import {
  ContentCard,
  ContentCardBackground,
  ContentCardSubtitle,
  ContentCardTitle,
} from "~/features/content/card/card";
import { type ContentCardProps } from "~/features/content/card/types";
import { getCardSubtitleFromMetadata } from "~/features/content/card/utils";
import { cn } from "~/features/style/utils";

import { contentMetadata } from "./metadata";

export const HackAPlantWritingCard = ({ aboveFold, cardProps: { className, ...rest } }: ContentCardProps) => {
  return (
    <ContentCard className={cn("@container", className)} {...rest}>
      <ContentCardTitle>{contentMetadata.previewTitle}</ContentCardTitle>
      <ContentCardSubtitle>{getCardSubtitleFromMetadata(contentMetadata)}</ContentCardSubtitle>
      <p className="body-1 flex-1 line-clamp-3 text-grey-700 mt-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
    </ContentCard>
  );
};
