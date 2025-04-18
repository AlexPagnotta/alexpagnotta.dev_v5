"use client";

import { useEffect } from "react";

type UseDisableOverscrollProps = {
  enabled: boolean;
};

/**
 * Disables the overscroll behavior on the page when enabled.
 */
export const useDisableOverscroll = ({ enabled }: UseDisableOverscrollProps) => {
  useEffect(() => {
    if (!enabled) return;

    const elements = [document.documentElement, document.body];
    elements.forEach((element) => {
      element.style.setProperty("overscroll-behavior", "none");
    });

    return () => {
      elements.forEach((element) => {
        element.style.removeProperty("overscroll-behavior");
      });
    };
  }, [enabled]);
};
