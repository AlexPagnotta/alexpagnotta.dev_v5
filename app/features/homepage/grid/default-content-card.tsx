import { ContentCard } from "~/features/content/card/card";
import { getCardSubtitleFromMetadata } from "~/features/content/card/utils";
import { type ContentMetadata } from "~/features/content/metadata/metadata.server";

type DefaultContentCardProps = {
  slug: string;
  metadata: ContentMetadata;
};

export const DefaultContentCard = ({ slug, metadata }: DefaultContentCardProps) => {
  return (
    <ContentCard slug={slug} alignment="top">
      <ContentCard.Title>{metadata.previewTitle}</ContentCard.Title>
      <ContentCard.Subtitle>{getCardSubtitleFromMetadata(metadata)}</ContentCard.Subtitle>
    </ContentCard>
  );
};
