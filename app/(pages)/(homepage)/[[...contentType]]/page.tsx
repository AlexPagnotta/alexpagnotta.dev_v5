import { notFound } from "next/navigation";

import { ContentCardsMapper } from "~/(pages)/(content)/cards-mapper";
import { ContentCard } from "~/features/content/card/card";
import { getCardSubtitleFromMetadata } from "~/features/content/card/utils";
import { type ContentType, isContentType } from "~/features/content/constants";
import { getAllContent } from "~/features/content/utils.server";
import { HomepageHeader } from "~/features/homepage/header/header";
import { cn } from "~/features/style/utils";

// Define the page props type for Next.js App Router
type HomepageProps = {
  params: Promise<{
    contentType?: string[];
  }>;
};

// Get the section param from the dynamic segment using App Router props
export default async function Homepage({ params }: HomepageProps) {
  const contentTypeParam = (await params).contentType;

  // Redirect to 404 if content type is an array of multiple values
  // Since we must use a catch-all route to make the param optional
  if (contentTypeParam && contentTypeParam.length > 1) return notFound();

  // Redirect to 404 if content type is not one of the allowed values
  const _contentType = contentTypeParam?.[0];
  if (_contentType && !isContentType(_contentType)) return notFound();

  // Get all content filtered by content type, if provided
  const contentType = _contentType as ContentType;
  const content = await getAllContent(contentType);

  return (
    <div className="w-full flex flex-col gap-64 lg:flex-row lg:justify-between lg:items-start lg:gap-64-px ">
      <HomepageHeader selectedContentType={contentType} className="lg:sticky lg:top-container-vertical" />

      <main
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 sm:grid-flow-row-dense justify-items-center gap-20-px",
          "w-full max-w-[36rem] mx-auto sm:max-w-none sm:w-[46rem] md:w-[70rem] lg:w-[46rem]"
        )}
      >
        {content.map((item) => {
          const CardComponent = ContentCardsMapper[item.slug];

          return CardComponent ? (
            <CardComponent key={item.slug} slug={item.slug} />
          ) : (
            <ContentCard key={item.slug} slug={item.slug} alignment="top">
              <ContentCard.Title>{item.metadata.previewTitle}</ContentCard.Title>
              <ContentCard.Subtitle>{getCardSubtitleFromMetadata(item.metadata)}</ContentCard.Subtitle>
            </ContentCard>
          );
        })}
      </main>
    </div>
  );
}
