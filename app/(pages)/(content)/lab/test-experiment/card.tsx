import { ContentCard } from "~/features/content/card/card";
import { type ContentCardProps } from "~/features/content/card/types";
import { getCardSubtitleFromMetadata } from "~/features/content/card/utils";

import { contentMetadata } from "./metadata";

export const TestExperimentCard = ({ cardProps }: ContentCardProps) => {
  return (
    <ContentCard alignment="bottom" {...cardProps}>
      <ContentCard.Title>{contentMetadata.previewTitle}</ContentCard.Title>
      <ContentCard.Subtitle>{getCardSubtitleFromMetadata(contentMetadata)}</ContentCard.Subtitle>
    </ContentCard>
  );
};
