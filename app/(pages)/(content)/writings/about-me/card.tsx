import Image from "next/image";

import { ContentCard } from "~/features/content/card/card";
import { type ContentCardProps } from "~/features/content/card/types";
import { getCardSubtitleFromMetadata } from "~/features/content/card/utils";

import CardImage from "./assets/card-image.png";
import { contentMetadata } from "./metadata";

export const AboutMeWritingCard = ({ aboveFold, cardProps }: ContentCardProps) => {
  return (
    <ContentCard {...cardProps}>
      <ContentCard.Title>{contentMetadata.previewTitle}</ContentCard.Title>
      <ContentCard.Subtitle>{getCardSubtitleFromMetadata(contentMetadata)}</ContentCard.Subtitle>
      <ContentCard.Background>
        <Image
          src={CardImage}
          alt="Avatar of me waving"
          sizes="180px"
          priority={aboveFold}
          className="size-[180px] absolute right-0 bottom-[-20px] -rotate-6"
        />
      </ContentCard.Background>
    </ContentCard>
  );
};
