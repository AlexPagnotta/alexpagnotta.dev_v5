import { useCallback, useState, type RefObject } from "react";
import { useResizeObserver } from "usehooks-ts";

import { screens } from "~/features/utils/breakpoints/constants";
import { convertPxToRem } from "~/features/utils/units";

/**
 * Check if the passed element width is greater than or equal to the breakpoint
 * @param elementRef - The element to check
 * @param screen - The size to check against
 * @param options.defaultValue - The default value to return if the hook has not yet been initialized (default: false)
 * @returns Whether the element width is greater than or equal to the breakpoint
 */
export const useContainerBreakpoint = <T extends boolean | null = boolean>(
  elementRef: RefObject<HTMLElement | null>,
  screen: keyof typeof screens,
  options?: {
    defaultValue?: T;
  }
) => {
  const defaultValue = !options || options.defaultValue === undefined ? false : options.defaultValue;
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState<boolean | null>(defaultValue);

  const onResize = useCallback(
    (size: { width?: number }) => {
      // Not yet initialized
      if (size.width === undefined || elementRef.current === null) {
        setIsAboveBreakpoint(defaultValue);
        return;
      }

      const widthRem = convertPxToRem(size.width);

      if (widthRem >= screens[screen]) {
        setIsAboveBreakpoint(true);
      } else {
        setIsAboveBreakpoint(false);
      }
    },
    [screen, defaultValue, elementRef]
  );

  useResizeObserver({
    ref: elementRef as RefObject<HTMLElement>,
    onResize,
  });

  return isAboveBreakpoint as T extends null ? boolean | null : boolean;
};
