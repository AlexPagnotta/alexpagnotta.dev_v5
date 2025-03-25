import { Slot } from "@radix-ui/react-slot";
import { type ComponentPropsWithoutRef } from "react";

import { type VariantProps, cn, cva } from "~/features/style/utils";

export type CardProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof cardStyles> & {
    asChild?: boolean;
  };

type CompoundCard = typeof Card & {
  Title: typeof CardTitle;
  Subtitle: typeof CardSubtitle;
  Background: typeof CardBackground;
};

const cardStyles = cva({
  base: [
    "flex relative isolate",
    "bg-theme-card-base-background hover:bg-theme-card-base-hover-background rounded-lg",
    "[--spacing-card-horizontal:24px] [--spacing-card-vertical:16px]",
    "transition-colors duration-200",
  ],
  variants: {
    alignment: {
      top: "flex-col",
      bottom: "flex-col-reverse justify-[end] items-end text-end",
    },
    spacing: {
      true: "px-[var(--spacing-card-horizontal)] py-[var(--spacing-card-vertical)]",
    },
  },
  defaultVariants: {
    alignment: "top",
    spacing: true,
  },
});

const Card = ({ className, alignment, spacing, asChild, ...rest }: CardProps) => {
  const Component = asChild ? Slot : "div";

  return <Component className={cn(cardStyles({ alignment, spacing }), className)} {...rest} />;
};

type CardTitleProps = ComponentPropsWithoutRef<"h2">;

const CardTitle = ({ className, ...rest }: CardTitleProps) => {
  return <h2 className={cn("text-theme-card-base-title-foreground title-2-light", className)} {...rest} />;
};

type CardSubtitleProps = ComponentPropsWithoutRef<"div">;

const CardSubtitle = ({ className, ...rest }: CardSubtitleProps) => {
  return <div className={cn("text-theme-card-base-subtitle-foreground body-2", className)} {...rest} />;
};

type CardBackgroundProps = ComponentPropsWithoutRef<"div"> & {
  clip?: boolean;
};

const CardBackground = ({ clip = true, className, ...rest }: CardBackgroundProps) => {
  return <div className={cn("absolute inset-0 z-[-1]", clip && "rounded-lg overflow-hidden", className)} {...rest} />;
};

const CompoundCard = Card as CompoundCard;

CompoundCard.Title = CardTitle;
CompoundCard.Subtitle = CardSubtitle;
CompoundCard.Background = CardBackground;

export { CompoundCard as Card };
