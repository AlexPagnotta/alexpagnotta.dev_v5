import { type AccentColor, accentColors } from "~/features/ui/link/constants";

/**
 * Get a random accent color from an array of accent colors
 * @param accentColors - Array of accent colors
 * @returns A random accent color from the array
 */
export const getRandomAccentColor = () => {
  return accentColors[Math.floor(Math.random() * accentColors.length)] as AccentColor;
};
