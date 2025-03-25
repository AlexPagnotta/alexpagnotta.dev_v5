import Image from "next/image";

import { ContentCard } from "~/features/content/card/card";
import { type ContentCardProps } from "~/features/content/card/types";
import { getCardSubtitleFromMetadata } from "~/features/content/card/utils";
import { cn } from "~/features/style/utils";

import CardImage from "./assets/card-image.svg";
import { contentMetadata } from "./metadata";

export const DuolingoProjectCard = ({ aboveFold, cardProps: { className, ...rest } }: ContentCardProps) => {
  return (
    <ContentCard
      className={cn(
        "bg-theme-card-duolingo-background hover:bg-theme-card-duolingo-hover-background @container",
        className
      )}
      {...rest}
    >
      <ContentCard.Title className="text-theme-card-duolingo-title-foreground">
        {contentMetadata.previewTitle}
      </ContentCard.Title>
      <ContentCard.Subtitle className="text-theme-card-duolingo-subtitle-foreground">
        {getCardSubtitleFromMetadata(contentMetadata)}
      </ContentCard.Subtitle>
      <ContentCard.Background>
        <Image
          src={CardImage}
          alt="Duolingo mascot"
          priority={aboveFold}
          className={cn("w-[160px] h-auto absolute right-[-5px] bottom-[-70px] rotate-16", "@sm:w-[180px]")}
        />
      </ContentCard.Background>
    </ContentCard>
  );
};
