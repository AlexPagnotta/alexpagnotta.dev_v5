import { ContentCard, ContentCardSubtitle, ContentCardTitle } from "~/features/content/card/card";
import { type ContentCardProps } from "~/features/content/card/types";
import { getCardSubtitleFromMetadata } from "~/features/content/card/utils";

import { contentMetadata } from "./metadata";

export const TestExperimentCard = ({ cardProps }: ContentCardProps) => {
  return (
    <ContentCard alignment="bottom" {...cardProps}>
      <ContentCardTitle>{contentMetadata.previewTitle}</ContentCardTitle>
      <ContentCardSubtitle>{getCardSubtitleFromMetadata(contentMetadata)}</ContentCardSubtitle>
    </ContentCard>
  );
};
