import {
  ContentCard,
  ContentCardBackground,
  ContentCardSubtitle,
  ContentCardTitle,
} from "~/features/content/card/card";
import { type ContentCardProps } from "~/features/content/card/types";
import { getCardSubtitleFromMetadata } from "~/features/content/card/utils";
import { cn } from "~/features/style/utils";
import { Image } from "~/features/ui/image";

import CardImage from "./assets/card-image.png";
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
      <ContentCardBackground>
        <Image
          src={CardImage}
          alt="Spike character"
          sizes="220px"
          priority={aboveFold}
          className={cn(
            "size-[170px] absolute right-[-40px] bottom-[-30px] rotate-6",
            "@sm:size-[190px] @sm:right-[-20px] @sm:bottom-[-20px]",
            "group-data-[highlighted]:rotate-[10deg] group-data-[highlighted]:scale-105",
            "transition-transform duration-200"
          )}
        />
      </ContentCardBackground>
    </ContentCard>
  );
};
