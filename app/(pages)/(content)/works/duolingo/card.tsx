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

import CardImage from "./assets/card-image.svg";
import { contentMetadata } from "./metadata";

export const DuolingoProjectCard = ({ aboveFold, cardProps: { className, ...rest } }: ContentCardProps) => {
  return (
    <ContentCard
      className={cn(
        "@container group",
        "bg-theme-card-duolingo-background",
        "hover:bg-theme-card-duolingo-hover-background data-[highlighted]:bg-theme-card-duolingo-hover-background",
        className
      )}
      {...rest}
    >
      <ContentCardTitle className="text-theme-card-duolingo-title-foreground">
        {contentMetadata.previewTitle}
      </ContentCardTitle>
      <ContentCardSubtitle className="text-theme-card-duolingo-subtitle-foreground">
        {getCardSubtitleFromMetadata(contentMetadata)}
      </ContentCardSubtitle>
      <ContentCardBackground>
        <Image
          src={CardImage}
          alt="Duolingo mascot"
          priority={aboveFold}
          className={cn(
            "w-[160px] h-auto absolute right-[-10px] bottom-[-70px] @sm:w-[180px]",
            "rotate-12",
            "group-data-[highlighted]:rotate-16 group-data-[highlighted]:scale-110",
            "transition-transform duration-200"
          )}
        />
      </ContentCardBackground>
    </ContentCard>
  );
};
