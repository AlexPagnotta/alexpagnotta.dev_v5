import Image from "next/image";

import { ContentCard } from "~/features/content/card/card";
import { type ContentCardProps } from "~/features/content/card/types";
import { getCardSubtitleFromMetadata } from "~/features/content/card/utils";
import { cn } from "~/features/style/utils";

import CardImageScreenOff from "./assets/card-image-screen-off.png";
import CardImageScreenOn from "./assets/card-image-screen-on.png";
import { contentMetadata } from "./metadata";

const cardImageStyles = [
  "h-auto absolute rotate-[28deg]",
  "w-[110px] right-[20px] bottom-[-70px]",
  "@sm:w-[130px] @sm:right-[40px] @sm:bottom-[-80px]",
];

export const OverheardProjectCard = ({ aboveFold, cardProps: { className, ...rest } }: ContentCardProps) => {
  return (
    <ContentCard className={cn("bg-theme-card-overheard-background group @container", className)} {...rest}>
      <ContentCard.Title className="text-theme-card-overheard-title-foreground">
        {contentMetadata.previewTitle}
      </ContentCard.Title>
      <ContentCard.Subtitle className="text-theme-card-overheard-subtitle-foreground">
        {getCardSubtitleFromMetadata(contentMetadata)}
      </ContentCard.Subtitle>
      <ContentCard.Background>
        <ContentCard.Background>
          <Image
            src={CardImageScreenOff}
            alt="Old Nokia phone with Overheard logo on screen"
            sizes="130px"
            priority={aboveFold}
            className={cn(cardImageStyles, "opacity-100 group-hover:opacity-0 group-focus-visible:opacity-0")}
          />
          <Image
            src={CardImageScreenOn}
            alt=""
            sizes="130px"
            className={cn(cardImageStyles, "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100")}
          />
        </ContentCard.Background>
      </ContentCard.Background>
    </ContentCard>
  );
};
