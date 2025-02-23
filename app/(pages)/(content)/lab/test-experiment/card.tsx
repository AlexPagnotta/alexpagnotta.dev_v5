import { ContentCard, type ContentCardProps } from "~/features/content/card/card";
import { getCardSubtitleFromMetadata } from "~/features/content/card/utils";

import { contentMetadata } from "./metadata";

export const TestExperimentCard = (props: ContentCardProps) => {
  return (
    <ContentCard alignment="bottom" {...props}>
      <ContentCard.Title>{contentMetadata.previewTitle}</ContentCard.Title>
      <ContentCard.Subtitle>{getCardSubtitleFromMetadata(contentMetadata)}</ContentCard.Subtitle>
    </ContentCard>
  );
};
