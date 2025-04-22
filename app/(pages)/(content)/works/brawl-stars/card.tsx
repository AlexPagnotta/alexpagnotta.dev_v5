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

export const BrawlStarsProjectCard = ({ aboveFold, cardProps: { className, ...rest } }: ContentCardProps) => {
  return (
    <ContentCard
      className={cn(
        "@container group",
        "bg-theme-card-brawl-stars-background",
        "hover:bg-theme-card-brawl-stars-hover-background data-[highlighted]:bg-theme-card-brawl-stars-hover-background",
        className
      )}
      {...rest}
    >
      <ContentCardTitle className="text-theme-card-brawl-stars-title-foreground">
        {contentMetadata.previewTitle}
      </ContentCardTitle>
      <ContentCardSubtitle className="text-theme-card-brawl-stars-subtitle-foreground">
        {getCardSubtitleFromMetadata(contentMetadata)}
      </ContentCardSubtitle>
    </ContentCard>
  );
};
