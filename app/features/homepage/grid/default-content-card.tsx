import { ContentCard, ContentCardSubtitle, ContentCardTitle } from "~/features/content/card/card";
import { getCardSubtitleFromMetadata } from "~/features/content/card/utils";
import { type ContentMetadata } from "~/features/content/metadata/metadata.server";

type DefaultContentCardProps = {
  slug: string;
  metadata: ContentMetadata;
};

export const DefaultContentCard = ({ slug, metadata }: DefaultContentCardProps) => {
  return (
    <ContentCard slug={slug} alignment="top">
      <ContentCardTitle>{metadata.previewTitle}</ContentCardTitle>
      <ContentCardSubtitle>{getCardSubtitleFromMetadata(metadata)}</ContentCardSubtitle>
    </ContentCard>
  );
};
