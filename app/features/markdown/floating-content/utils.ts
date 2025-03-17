import { FLOATING_CONTENT_OFFSET, MIN_FLOATING_CONTENT_WIDTH } from "~/features/markdown/floating-content/constants";

/**
 * Calculate the offset of the floating content relative to the layout container
 * @param contentLeftOffset - The left offset of the floating content
 * @param contentWidth - The width of the floating content
 * @returns The offset of the floating content relative to the layout container
 */
export const calculateFloatingContentOffset = (contentLeftOffset: number, contentWidth: number) => {
  const layoutContainer = document.querySelector("[data-layout-container]");
  if (!layoutContainer) return undefined;

  // If the content is too small, return the base offset
  if (contentWidth < MIN_FLOATING_CONTENT_WIDTH) {
    return FLOATING_CONTENT_OFFSET;
  }

  const layoutContainerRect = layoutContainer.getBoundingClientRect();
  const paddingLeft = parseInt(window.getComputedStyle(layoutContainer).paddingLeft, 10);

  // Calculate the distance from the reference element to the container's left edge
  // Subtract the content width to align it to the inner side
  // Add padding to exclude it from the calculation
  return contentLeftOffset - (layoutContainerRect.left + paddingLeft) - contentWidth;
};

/**
 * Calculate the size of the floating content, based on the layout container and the body container
 * @returns The size of the floating content
 */
export const calculateFloatingContentSize = () => {
  const layoutContainer = document.querySelector("[data-layout-container]");
  const bodyContainer = document.querySelector("[data-body-container]");
  if (!layoutContainer || !bodyContainer) return "auto" as const;

  const layoutRect = layoutContainer.getBoundingClientRect();
  const bodyRect = bodyContainer.getBoundingClientRect();
  const layoutPaddingLeft = parseInt(window.getComputedStyle(layoutContainer).paddingLeft, 10);

  // Calculate the width as the difference between body container's left edge and layout container's left edge
  // Subtract the layout padding to exclude it from the calculation
  const width = bodyRect.left - (layoutRect.left + layoutPaddingLeft);

  // If the width is too small, remove the width setting and let the content take his intrinsic width
  if (width < MIN_FLOATING_CONTENT_WIDTH) {
    return "auto" as const;
  }

  return `${width}px` as const;
};
