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

export const AboutMeWritingCard = ({ aboveFold, cardProps: { className, ...rest } }: ContentCardProps) => {
  return (
    <ContentCard className={cn("@container", className)} {...rest}>
      <ContentCardTitle>{contentMetadata.previewTitle}</ContentCardTitle>
      <ContentCardSubtitle>{getCardSubtitleFromMetadata(contentMetadata)}</ContentCardSubtitle>
      <ContentCardBackground>
        <Image
          src={CardImage}
          alt="Avatar of me waving"
          sizes="220px"
          priority={aboveFold}
          className={cn(
            "size-[180px] absolute right-0 bottom-[-20px] -rotate-6",
            "@sm:size-[220px] @sm:right-[-10px] @sm:bottom-[-40px]",
            "@md:bottom-[-20px] @md:right-[0px]",
            "group-data-[highlighted]:-rotate-[10deg] group-data-[highlighted]:scale-110",
            "transition-transform duration-200"
          )}
        />
      </ContentCardBackground>
    </ContentCard>
  );
};
