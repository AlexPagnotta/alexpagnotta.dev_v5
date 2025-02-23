import { ContentCard, type ContentCardProps } from "~/features/content/card/card";
import { getCardSubtitleFromMetadata } from "~/features/content/card/utils";

import { contentMetadata } from "./metadata";

export const TestProjectCard = (props: ContentCardProps) => {
  return (
    <ContentCard {...props}>
      <ContentCard.Title>{contentMetadata.previewTitle}</ContentCard.Title>
      <ContentCard.Subtitle>{getCardSubtitleFromMetadata(contentMetadata)}</ContentCard.Subtitle>
    </ContentCard>
  );
};
