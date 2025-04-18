"use client";

import { useControls } from "leva";
import { useEffect } from "react";

/**
 * Helper function to get URL search param value
 */
const getSearchParam = (param: string): string | null => {
  if (typeof window === "undefined") return null;
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(param);
};

/**
 * Hook to handle debug mode state, with URL search params sync
 */
export const useDebugMode = () => {
  const [{ debug }, setControls] = useControls(() => ({
    debug: {
      value: false,
      label: "Enable Debug Mode",
    },
  }));

  useEffect(() => {
    // Get debug search param from URL
    // window.location.search is used instead of useSearchParams(), cause that would need a Suspense boundary or opt-out of server-side rendering
    // see: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
    const debugSearchParam = getSearchParam("debug");
    const debugParam = debugSearchParam === "true" || debugSearchParam === "";

    setControls({ debug: debugParam });
  }, [setControls]);

  return debug;
};
