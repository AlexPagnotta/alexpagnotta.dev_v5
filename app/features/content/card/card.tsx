"use client";

import { useInView } from "motion/react";
import { useRef, useState } from "react";

import { cn, cva, type VariantProps } from "~/features/style/utils";
import { Card, type CardProps } from "~/features/ui/card";
import { BaseLink } from "~/features/ui/link/link";
import { useBreakpoint, useIsTouchDevice } from "~/features/utils/breakpoints/use-breakpoint";

type ContentCardState = {
  isHighlighted: boolean;
};

export type BaseContentCardProps = Omit<CardProps, "asChild" | "children"> &
  VariantProps<typeof contentCardStyles> & {
    slug: string;
    isLast?: boolean;
    children?: React.ReactNode | ((props: ContentCardState) => React.ReactNode);
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

  const [isHovered, setIsHovered] = useState(false);

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

  const isHighlighted = isHovered || (isInView && isTouchDevice && !isAboveSm);

  const highlightedProps = isHighlighted ? { "data-highlighted": true } : {};

  return (
    <Card
      className={contentCardStyles({
        size,
        className: cn("group data-[highlighted]:bg-theme-card-base-hover-background", className),
      })}
      {...highlightedProps}
      ref={cardRef}
      asChild
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      <BaseLink href={slug}>{typeof children === "function" ? children({ isHighlighted }) : children}</BaseLink>
    </Card>
  );
};

const ContentCardTitle = Card.Title;
const ContentCardSubtitle = Card.Subtitle;
const ContentCardBackground = Card.Background;

// Compound pattern not used, see https://github.com/vercel/next.js/issues/44030
export { ContentCard, ContentCardTitle, ContentCardSubtitle, ContentCardBackground };
