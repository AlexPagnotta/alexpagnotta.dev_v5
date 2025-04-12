import { type ComponentPropsWithoutRef } from "react";

import { type ContentMetadata } from "~/features/content/metadata/metadata.server";
import { cva } from "~/features/style/utils";

type ContentWrapperProps = ComponentPropsWithoutRef<"div"> & {
  metadata: ContentMetadata;
};

const contentWrapperStyles = cva({
  base: "",
  variants: {
    accentColor: {
      "light-blue":
        "selection:bg-theme-selection-light-blue-background selection:text-theme-selection-light-blue-foreground",
      blue: "selection:bg-theme-selection-blue-background selection:text-theme-selection-blue-foreground",
      green: "selection:bg-theme-selection-green-background selection:text-theme-selection-green-foreground",
      red: "selection:bg-theme-selection-red-background selection:text-theme-selection-red-foreground",
      purple: "selection:bg-theme-selection-purple-background selection:text-theme-selection-purple-foreground",
      pink: "selection:bg-theme-selection-pink-background selection:text-theme-selection-pink-foreground",
      yellow: "selection:bg-theme-selection-yellow-background selection:text-theme-selection-yellow-foreground",
    } satisfies Record<ContentMetadata["accentColor"], string>,
  },
});

export const ContentWrapper = ({ metadata: { accentColor }, className, ...rest }: ContentWrapperProps) => {
  return <div className={contentWrapperStyles({ accentColor, className })} {...rest} />;
};
