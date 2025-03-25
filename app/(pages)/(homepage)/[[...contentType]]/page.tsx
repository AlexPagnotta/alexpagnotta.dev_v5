import { notFound } from "next/navigation";

import { ContentCardsMapper } from "~/(pages)/(content)/cards-mapper";
import { ContentCard } from "~/features/content/card/card";
import { getCardSubtitleFromMetadata } from "~/features/content/card/utils";
import { ContentType, isContentType } from "~/features/content/constants";
import { type ContentMetadata, type LabContentMetadata } from "~/features/content/metadata/metadata.server";
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
        {content.map((item, index) => {
          const CardComponent = ContentCardsMapper[item.slug];

          const aboveFold = index < 10;

          const hasCustomContentCard = !!CardComponent;

          if (hasCustomContentCard) {
            return (
              <CardComponent
                key={item.slug}
                aboveFold={aboveFold}
                cardProps={{
                  slug: item.slug,
                }}
              />
            );
          }

          if (item.metadata.type === ContentType.LAB) {
            return <DefaultLabContentCard key={item.slug} slug={item.slug} metadata={item.metadata} />;
          }

          return <DefaultContentCard key={item.slug} slug={item.slug} metadata={item.metadata} />;
        })}
      </main>
    </div>
  );
}

const DefaultContentCard = ({ slug, metadata }: { slug: string; metadata: ContentMetadata }) => {
  return (
    <ContentCard slug={slug} alignment="top">
      <ContentCard.Title>{metadata.previewTitle}</ContentCard.Title>
      <ContentCard.Subtitle>{getCardSubtitleFromMetadata(metadata)}</ContentCard.Subtitle>
    </ContentCard>
  );
};

const DefaultLabContentCard = ({ slug, metadata }: { slug: string; metadata: LabContentMetadata }) => {
  return (
    <ContentCard
      slug={slug}
      alignment="bottom"
      className={cn(
        "overflow-hidden",
        "[--card-background-color:var(--color-theme-card-default-lab-background)]",
        "hover:[--card-background-color:var(--color-theme-card-default-lab-hover-background)]",
        "bg-[var(--card-background-color)] hover:bg-[var(--card-background-color)]"
      )}
    >
      <div
        className={cn(
          "relative isolate",
          "before:absolute before:content-[''] before:top-0 before:left-0 before:right-[calc(var(--spacing-card-horizontal)*-1)] before:bottom-[calc(var(--spacing-card-vertical)*-1)] before:-z-10",
          "before:bg-[var(--card-background-color)]",
          "before:shadow-[0px_0px_40px_30px_var(--card-background-color)]",
          "before:transition-[colors_shadow] before:duration-200"
        )}
      >
        <ContentCard.Subtitle className="text-theme-card-default-lab-subtitle-foreground">
          {getCardSubtitleFromMetadata(metadata)}
        </ContentCard.Subtitle>
        <ContentCard.Title className="text-theme-card-default-lab-title-foreground">
          {metadata.previewTitle}
        </ContentCard.Title>
      </div>

      <ContentCard.Background>
        <div
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "size-[150%] rotate-12",
            "bg-[linear-gradient(to_right,var(--color-theme-card-default-lab-background-grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-theme-card-default-lab-background-grid)_1px,transparent_1px)]",
            "bg-[length:40px_40px] bg-repeat"
          )}
        />
      </ContentCard.Background>
    </ContentCard>
  );
};
