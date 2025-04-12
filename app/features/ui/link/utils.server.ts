import { LinkAccentColors } from "~/features/ui/link/constants";

/**
 * Get a random accent color from an array of accent colors
 * @param accentColors - Array of accent colors
 * @returns A random accent color from the array
 */
export const getRandomLinkAccentColor = () => {
  return LinkAccentColors[Math.floor(Math.random() * LinkAccentColors.length)];
};
