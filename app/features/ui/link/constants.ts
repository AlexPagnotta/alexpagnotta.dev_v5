import { AccentColors } from "~/features/constants/colors";

/**
 * Array of accent colors for the Link component
 */
export const LinkAccentColors = AccentColors.filter(
  (color): color is Exclude<typeof color, "yellow"> => color !== "yellow"
);
