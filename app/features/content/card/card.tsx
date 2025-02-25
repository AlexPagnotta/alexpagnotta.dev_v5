import { cva, type VariantProps } from "~/features/style/utils";
import { Card, type CardProps } from "~/features/ui/card";
import { BaseLink } from "~/features/ui/link/link";

export type BaseContentCardProps = Omit<CardProps, "asChild"> &
  VariantProps<typeof contentCardStyles> & {
    slug: string;
  };

type CompoundContentCard = typeof ContentCard & {
  Title: typeof Card.Title;
  Subtitle: typeof Card.Subtitle;
  Background: typeof Card.Background;
};

const contentCardStyles = cva({
  base: "h-[22rem] w-full",
  variants: {
    size: {
      default: "col-span-1",
      large: "col-span-2",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const ContentCard = ({ slug, size, className, children, ...rest }: BaseContentCardProps) => {
  return (
    <Card className={contentCardStyles({ size, className })} asChild {...rest}>
      <BaseLink href={slug}>{children}</BaseLink>
    </Card>
  );
};

const CompoundContentCard = ContentCard as CompoundContentCard;

CompoundContentCard.Title = Card.Title;
CompoundContentCard.Subtitle = Card.Subtitle;
CompoundContentCard.Background = Card.Background;

export { CompoundContentCard as ContentCard };
