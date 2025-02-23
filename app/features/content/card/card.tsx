import { cn } from "~/features/style/utils";
import { Card, type CardProps } from "~/features/ui/card";
import { BaseLink } from "~/features/ui/link/link";

export type ContentCardProps = Omit<CardProps, "asChild"> & {
  slug: string;
};

type CompoundContentCard = typeof CompundContentCard & {
  Title: typeof Card.Title;
  Subtitle: typeof Card.Subtitle;
  Background: typeof Card.Background;
};

const CompundContentCard = ({ slug, className, children, ...rest }: ContentCardProps) => {
  return (
    <Card className={cn("w-full h-[22rem]", className)} asChild {...rest}>
      <BaseLink href={slug}>{children}</BaseLink>
    </Card>
  );
};

const CompoundContentCard = CompundContentCard as CompoundContentCard;

CompoundContentCard.Title = Card.Title;
CompoundContentCard.Subtitle = Card.Subtitle;
CompoundContentCard.Background = Card.Background;

export { CompoundContentCard as ContentCard };
