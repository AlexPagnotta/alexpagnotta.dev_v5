import { type AccentColors } from "~/features/constants/colors";
import { LinkAccentColors } from "~/features/ui/link/constants";

/**
 * Get a link accent color from an accent color, if accent color is not in the list of link accent colors, return undefined
 * @param accentColor - Accent color
 * @returns Link accent color
 */
export const getLinkAccentColorFromAccentColor = (accentColor: (typeof AccentColors)[number]) => {
  return LinkAccentColors.find((color) => color === accentColor) as (typeof LinkAccentColors)[number] | undefined;
};
