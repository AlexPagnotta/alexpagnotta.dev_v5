import { ContentCard, ContentCardSubtitle, ContentCardTitle } from "~/features/content/card/card";
import { type ContentCardProps } from "~/features/content/card/types";
import { getCardSubtitleFromMetadata } from "~/features/content/card/utils";

import { contentMetadata } from "./metadata";

export const TestWritingCard = ({ cardProps }: ContentCardProps) => {
  return (
    <ContentCard {...cardProps}>
      <ContentCardTitle>{contentMetadata.previewTitle}</ContentCardTitle>
      <ContentCardSubtitle>{getCardSubtitleFromMetadata(contentMetadata)}</ContentCardSubtitle>
    </ContentCard>
  );
};
