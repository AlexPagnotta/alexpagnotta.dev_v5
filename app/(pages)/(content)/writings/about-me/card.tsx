import Image from "next/image";

import { ContentCard } from "~/features/content/card/card";
import { type ContentCardProps } from "~/features/content/card/types";
import { getCardSubtitleFromMetadata } from "~/features/content/card/utils";
import { cn } from "~/features/style/utils";

import CardImage from "./assets/card-image.png";
import { contentMetadata } from "./metadata";

export const AboutMeWritingCard = ({ aboveFold, cardProps: { className, ...rest } }: ContentCardProps) => {
  return (
    <ContentCard className={cn("@container", className)} {...rest}>
      <ContentCard.Title>{contentMetadata.previewTitle}</ContentCard.Title>
      <ContentCard.Subtitle>{getCardSubtitleFromMetadata(contentMetadata)}</ContentCard.Subtitle>
      <ContentCard.Background>
        <Image
          src={CardImage}
          alt="Avatar of me waving"
          sizes="220px"
          priority={aboveFold}
          className={cn(
            "size-[180px] absolute right-0 bottom-[-20px] -rotate-6",
            "@sm:size-[220px] @sm:right-[-10px] @sm:bottom-[-40px]",
            "@md:bottom-[-20px] @md:right-[0px]"
          )}
        />
      </ContentCard.Background>
    </ContentCard>
  );
};
