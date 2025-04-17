import type { ComponentPropsWithoutRef } from "react";

import { ContentTheme } from "~/features/themes/constants";

type ContentThemeWrapperProps = ComponentPropsWithoutRef<"div"> & {
  theme?: ContentTheme;
};

export const ContentThemeWrapper = ({ theme = ContentTheme.BASE, ...rest }: ContentThemeWrapperProps) => {
  return <div data-content-theme-wrapper data-content-theme={theme} {...rest} />;
};
