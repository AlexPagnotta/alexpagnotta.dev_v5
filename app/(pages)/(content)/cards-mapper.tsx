// import dynamic from "next/dynamic";
import { type ComponentType } from "react";

import { TestExperimentCard } from "~/(pages)/(content)/lab/test-experiment/card";
import { DuolingoProjectCard } from "~/(pages)/(content)/works/duolingo/card";
import { IkeaProjectCard } from "~/(pages)/(content)/works/ikea/card";
import { OverheardProjectCard } from "~/(pages)/(content)/works/overheard/card";
import { TestProjectCard } from "~/(pages)/(content)/works/test-project/card";
import { AboutMeWritingCard } from "~/(pages)/(content)/writings/about-me/card";
import { TestWritingCard } from "~/(pages)/(content)/writings/test-writing/card";
import { type ContentCardProps } from "~/features/content/card/types";

/**
 * This is the mapper for the cards that are displayed on the homepage
 * It returns the card component for the given slug
 */
export const ContentCardsMapper: Record<string, ComponentType<ContentCardProps>> = {
  // Only above the fold cards should be imported statically (first 10 cards)
  "/writings/about-me": AboutMeWritingCard,
  "/works/ikea": IkeaProjectCard,
  "/works/duolingo": DuolingoProjectCard,
  "/works/overheard": OverheardProjectCard,
  "/writings/test-writing": TestWritingCard,
  "/works/test-project": TestProjectCard,
  "/lab/test-experiment": TestExperimentCard,

  // Below the fold cards should be imported dynamically
  // "/something": dynamic(() => import("~/(pages)/(content)/something/card").then((mod) => mod.SomethingCard)),
};
