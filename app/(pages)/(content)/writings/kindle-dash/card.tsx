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

export const KindleDashWritingCard = ({ aboveFold, cardProps: { className, ...rest } }: ContentCardProps) => {
  return (
    <ContentCard
      className={cn(
        "@container group",
        "bg-theme-card-kindle-dash-background border border-theme-card-kindle-dash-border",
        "hover:bg-theme-card-kindle-dash-hover-background data-[highlighted]:bg-theme-card-kindle-dash-hover-background",
        className
      )}
      {...rest}
    >
      <ContentCardTitle className="text-theme-card-kindle-dash-title-foreground">
        {contentMetadata.previewTitle}
      </ContentCardTitle>
      <ContentCardSubtitle className="text-theme-card-kindle-dash-subtitle-foreground">
        {getCardSubtitleFromMetadata(contentMetadata)}
      </ContentCardSubtitle>
      <ContentCardBackground>
        <Image
          src={CardImage}
          alt="Kindle Dash"
          sizes="240px"
          priority={aboveFold}
          className={cn(
            "w-[190px] h-auto absolute right-[-40px] bottom-[-30px] @sm:w-[230px] @sm:right-[-40px] @sm:bottom-[-40px]",
            "rotate-[12deg]",
            "group-data-[highlighted]:rotate-[8deg] group-data-[highlighted]:scale-[105%]",
            "transition-transform duration-200"
          )}
        />
      </ContentCardBackground>
    </ContentCard>
  );
};
