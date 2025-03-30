import { useMediaQuery } from "usehooks-ts";

/**
 * NOTE: Keep this in sync with twilwind config
 * @see https://tailwindcss.com/docs/responsive-design#overview
 */
const screens = {
  sm: "40rem",
  md: "52rem",
  lg: "64rem",
  xl: "80rem",
  "2xl": "96rem",
};

type UseMediaQueryOptions = Parameters<typeof useMediaQuery>[1];

/**
 * Check if the current screen size is greater than or equal to the breakpoint
 * @param screen - The screen size to check
 * @param options - The options to pass to the useMediaQuery hook
 * @returns Whether the screen size is greater than or equal to the breakpoint
 */
export const useBreakpoint = (screen: keyof typeof screens, options?: UseMediaQueryOptions) => {
  return useMediaQuery(`(min-width: ${screens[screen]})`, options);
};

/**
 * Check if the current device is a touch device
 * @param options - The options to pass to the useMediaQuery hook
 * @returns Whether the device is a touch device
 */
export const useIsTouchDevice = (options?: UseMediaQueryOptions) => {
  return useMediaQuery("(pointer: coarse)", options);
};
