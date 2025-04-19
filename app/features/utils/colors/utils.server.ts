import { AccentColors } from "~/features/utils/colors/contants";

/**
 * Get a random accent color from an array of accent colors
 * Must be used on server side to avoid rehydration errors
 * @param accentColors - Array of accent colors
 * @returns A random accent color from the array
 */
export const getRandomAccentColor = () => {
  return AccentColors[Math.floor(Math.random() * AccentColors.length)];
};
