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

import CardImageScreenOff from "./assets/card-image-screen-off.png";
import CardImageScreenOn from "./assets/card-image-screen-on.png";
import { contentMetadata } from "./metadata";

const cardImageStyles = [
  "h-auto absolute rotate-[28deg]",
  "w-[110px] right-[20px] bottom-[-70px]",
  "@sm:w-[130px] @sm:right-[40px] @sm:bottom-[-80px]",
  "group-data-[highlighted]:opacity-100 group-data-[highlighted]:rotate-[26deg] group-data-[highlighted]:scale-105",
  "transition-[opacity_transform] duration-200",
];

export const OverheardProjectCard = ({ aboveFold, cardProps: { className, ...rest } }: ContentCardProps) => {
  return (
    <ContentCard
      className={cn(
        "@container group",
        "bg-theme-card-overheard-background",
        "hover:bg-theme-card-overheard-hover-background data-[highlighted]:bg-theme-card-overheard-hover-background",
        className
      )}
      {...rest}
    >
      <ContentCardTitle className="text-theme-card-overheard-title-foreground">
        {contentMetadata.previewTitle}
      </ContentCardTitle>
      <ContentCardSubtitle className="text-theme-card-overheard-subtitle-foreground">
        {getCardSubtitleFromMetadata(contentMetadata)}
      </ContentCardSubtitle>
      <ContentCardBackground>
        <Image
          src={CardImageScreenOff}
          alt="Old Nokia phone with Overheard logo on screen"
          sizes="130px"
          priority={aboveFold}
          className={cn(cardImageStyles)}
        />
        <Image src={CardImageScreenOn} alt="" sizes="130px" className={cn(cardImageStyles, "opacity-0")} />
      </ContentCardBackground>
    </ContentCard>
  );
};
