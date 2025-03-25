import Image from "next/image";

import { ContentCard } from "~/features/content/card/card";
import { type ContentCardProps } from "~/features/content/card/types";
import { getCardSubtitleFromMetadata } from "~/features/content/card/utils";
import { cn } from "~/features/style/utils";

import CardImage from "./assets/card-image.png";
import { contentMetadata } from "./metadata";

export const IkeaProjectCard = ({ aboveFold, cardProps: { className, ...rest } }: ContentCardProps) => {
  return (
    <ContentCard
      className={cn("bg-theme-card-ikea-background  hover:bg-theme-card-ikea-hover-background @container", className)}
      {...rest}
    >
      <ContentCard.Title className="text-theme-card-ikea-title-foreground">
        {contentMetadata.previewTitle}
      </ContentCard.Title>
      <ContentCard.Subtitle className="text-theme-card-ikea-subtitle-foreground">
        {getCardSubtitleFromMetadata(contentMetadata)}
      </ContentCard.Subtitle>
      <ContentCard.Background>
        <Image
          src={CardImage}
          alt="Ikea yellow chair"
          sizes="220px"
          priority={aboveFold}
          className={cn(
            "size-[185px] absolute right-[-30px] bottom-[-55px] rotate-4",
            "@sm:size-[210px] @sm:right-[-20px] @sm:bottom-[-55px]"
          )}
        />
      </ContentCard.Background>
    </ContentCard>
  );
};
