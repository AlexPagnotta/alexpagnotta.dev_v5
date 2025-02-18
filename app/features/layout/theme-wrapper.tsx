import type { ComponentPropsWithoutRef } from "react";

type ThemeWrapperProps = ComponentPropsWithoutRef<"div"> & {
  theme?: "base" | "lab";
};

export const ThemeWrapper = ({ theme = "base", ...rest }: ThemeWrapperProps) => {
  return <div data-theme-wrapper data-theme={theme} {...rest} />;
};
