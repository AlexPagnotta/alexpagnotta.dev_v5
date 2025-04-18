"use client";

import { motion, type Transition, type Variant, type Variants } from "motion/react";

import {
  ContentCard,
  ContentCardBackground,
  ContentCardSubtitle,
  ContentCardTitle,
} from "~/features/content/card/card";
import { type ContentCardProps } from "~/features/content/card/types";
import { getCardSubtitleFromMetadata } from "~/features/content/card/utils";
import { cn } from "~/features/style/utils";

import { contentMetadata } from "./metadata";

const AnimationTransition: Transition = {
  type: "spring",
  stiffness: 165,
  damping: 25,
};

const AnimationHover = ({ index }: { index: number }): Variant => ({
  opacity: 1,
  x: "-100%",
  scale: index === 4 ? 1 : 0.9,
  transition: AnimationTransition,
});

const AnimationVariants: Variants = {
  initial: ({ index }: { index: number }) => ({
    opacity: 0.6,
    scale: index === 3 ? 1 : 0.9,
  }),
  hover: AnimationHover as Variant,
  inView: AnimationHover as Variant,
};

export const CarouselLabCard = ({ cardProps: { className, ...rest } }: ContentCardProps) => {
  return (
    <ContentCard
      className={cn(
        "@container",
        "bg-theme-card-carousel-background",
        "hover:bg-theme-card-carousel-hover-background data-[highlighted]:bg-theme-card-carousel-hover-background",
        className
      )}
      {...rest}
    >
      {({ isHighlighted }) => (
        <>
          <ContentCardTitle className="text-theme-card-carousel-title-foreground">
            {contentMetadata.previewTitle}
          </ContentCardTitle>
          <ContentCardSubtitle className="text-theme-card-carousel-subtitle-foreground">
            {getCardSubtitleFromMetadata(contentMetadata)}
          </ContentCardSubtitle>

          <ContentCardBackground>
            <div
              className={cn(
                "absolute bottom-0 inset-x-0",
                "flex gap-8-px justify-center items-center",
                "rotate-[-18deg] @sm:rotate-[-22deg]",
                "-translate-y-12 @sm:-translate-y-8 translate-x-24 @sm:translate-x-40"
              )}
            >
              {[...Array(7)].map((_, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    "w-[8rem] @sm:w-[10rem] aspect-[3/4] shrink-0 rounded-md",
                    "bg-gradient-to-b from-theme-card-carousel-background-cards to-theme-card-carousel-background-cards/50"
                  )}
                  custom={{ index }}
                  initial={"initial"}
                  animate={isHighlighted ? "hover" : "initial"}
                  variants={AnimationVariants}
                  transition={AnimationTransition}
                />
              ))}
            </div>
          </ContentCardBackground>
        </>
      )}
    </ContentCard>
  );
};
