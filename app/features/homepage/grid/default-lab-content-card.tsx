import {
  ContentCard,
  ContentCardBackground,
  ContentCardSubtitle,
  ContentCardTitle,
} from "~/features/content/card/card";
import { getCardSubtitleFromMetadata } from "~/features/content/card/utils";
import { type LabContentMetadata } from "~/features/content/metadata/metadata.server";
import { cn } from "~/features/style/utils";

type DefaultContentCardProps = {
  slug: string;
  metadata: LabContentMetadata;
};

export const DefaultLabContentCard = ({ slug, metadata }: DefaultContentCardProps) => {
  return (
    <ContentCard
      slug={slug}
      alignment="bottom"
      className={cn(
        "overflow-hidden",
        "[--card-background-color:var(--color-theme-card-default-lab-background)]",
        "hover:[--card-background-color:var(--color-theme-card-default-lab-hover-background)]",
        "data-[highlighted]:[--card-background-color:var(--color-theme-card-default-lab-hover-background)]",
        "bg-[var(--card-background-color)]",
        "hover:bg-[var(--card-background-color)] data-[highlighted]:bg-[var(--card-background-color)]"
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
        <ContentCardSubtitle className="text-theme-card-default-lab-subtitle-foreground">
          {getCardSubtitleFromMetadata(metadata)}
        </ContentCardSubtitle>
        <ContentCardTitle className="text-theme-card-default-lab-title-foreground">
          {metadata.previewTitle}
        </ContentCardTitle>
      </div>

      <ContentCardBackground>
        <div
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "size-[150%] rotate-12",
            "bg-[linear-gradient(to_right,var(--color-theme-card-default-lab-background-grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-theme-card-default-lab-background-grid)_1px,transparent_1px)]",
            "bg-[length:40px_40px] bg-repeat",
            "group-data-[highlighted]:rotate-8 group-data-[highlighted]:scale-110",
            "transition-transform duration-200"
          )}
        />
      </ContentCardBackground>
    </ContentCard>
  );
};
