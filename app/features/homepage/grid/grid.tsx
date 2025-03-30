import { ContentCardsMapper } from "~/(pages)/(content)/cards-mapper";
import { ContentType } from "~/features/content/constants";
import { type ContentMetadata } from "~/features/content/metadata/metadata.server";
import { DefaultContentCard } from "~/features/homepage/grid/default-content-card";
import { DefaultLabContentCard } from "~/features/homepage/grid/default-lab-content-card";
import { cn } from "~/features/style/utils";

type HomepageGridProps = {
  items: {
    slug: string;
    metadata: ContentMetadata;
  }[];
};

export const HomepageGrid = ({ items }: HomepageGridProps) => {
  return (
    <main
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 sm:grid-flow-row-dense justify-items-center gap-20-px",
        "w-full max-w-[36rem] mx-auto sm:max-w-none sm:w-[46rem] md:w-[70rem] lg:w-[46rem]"
      )}
    >
      {items.map((item, index) => {
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
                isLast: index === items.length - 1,
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
  );
};
