import {
  type MarkdownBlockquoteAccentColor,
  markdownBlockquoteAccentColors,
} from "~/features/markdown/blockquote/constants";

/**
 * Get a random accent color from an array of accent colors
 * @param accentColors - Array of accent colors
 * @returns A random accent color from the array
 */
export const getRandomMarkdownBlockquoteAccentColor = () => {
  return markdownBlockquoteAccentColors[
    Math.floor(Math.random() * markdownBlockquoteAccentColors.length)
  ] as MarkdownBlockquoteAccentColor;
};
