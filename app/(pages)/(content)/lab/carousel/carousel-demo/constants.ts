export type OptionItem = {
  itemWidth: number;
  itemGap: number;
  itemsScale: { lg: number; md: number; sm: number };
};

/**
 * Options for the carousel items, for different breakpoints
 */
export const Options: { breakpoint: { md: OptionItem; sm: OptionItem } } = {
  breakpoint: {
    md: {
      itemWidth: 400, // Actual size of the item
      itemGap: 32,
      // how much item will scale when it's one and two positions away from the center
      itemsScale: { lg: 1, md: 0.8, sm: 0.6 },
    },
    sm: {
      itemWidth: 280,
      itemGap: 16,
      itemsScale: { lg: 0.8, md: 0.6, sm: 0.6 },
    },
  },
};

/**
 * List of all available colors for the items cards
 */
export const CardItemsColors = ["yellow", "blue", "green", "purple", "pink"] as const;

/**
 * List of all available items for the carousel
 */
export const Items = [...Array(1000)].map((_, i) => ({
  id: i + 1,
  color: CardItemsColors[i % CardItemsColors.length],
}));

export type Item = (typeof Items)[0] & { index: number };
