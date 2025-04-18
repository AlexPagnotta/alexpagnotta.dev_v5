/**
 * Convert px to rem
 * @param px - The number of pixels to convert
 * @returns The number of rems
 */
export const convertPxToRem = (px: number) => {
  const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
  return px / rootFontSize;
};
