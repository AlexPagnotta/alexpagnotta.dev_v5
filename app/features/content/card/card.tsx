"use client";

import { useInView } from "motion/react";
import { useRef } from "react";

import { cn, cva, type VariantProps } from "~/features/style/utils";
import { Card, type CardProps } from "~/features/ui/card";
import { BaseLink } from "~/features/ui/link/link";
import { useBreakpoint, useIsTouchDevice } from "~/features/utils/breakpoint";

export type BaseContentCardProps = Omit<CardProps, "asChild"> &
  VariantProps<typeof contentCardStyles> & {
    slug: string;
    isLast?: boolean;
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

const ContentCard = ({ slug, size, isLast, className, children, ...rest }: BaseContentCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const isAboveSm = useBreakpoint("sm", {
    initializeWithValue: false,
  });

  const isTouchDevice = useIsTouchDevice({
    initializeWithValue: false,
  });

  const isInView = useInView(cardRef, {
    margin: isLast ? "-69% 0px -29% 0px" : "-49% 0px -49% 0px",
    amount: 0,
  });

  // Add a data attribute to the card when it's in view and on mobile
  const highlightedProps = isInView && isTouchDevice && !isAboveSm ? { "data-highlighted": true } : {};

  return (
    <Card
      className={contentCardStyles({
        size,
        className: cn("data-[highlighted]:bg-theme-card-base-hover-background", className),
      })}
      {...highlightedProps}
      ref={cardRef}
      asChild
      {...rest}
    >
      <BaseLink href={slug}>{children}</BaseLink>
    </Card>
  );
};

const ContentCardTitle = Card.Title;
const ContentCardSubtitle = Card.Subtitle;
const ContentCardBackground = Card.Background;

// Compound pattern not used, see https://github.com/vercel/next.js/issues/44030
export { ContentCard, ContentCardTitle, ContentCardSubtitle, ContentCardBackground };
