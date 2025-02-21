import type { ComponentPropsWithoutRef } from "react";

import { cn } from "~/features/style/utils";

type ContentBackgroundProps = ComponentPropsWithoutRef<"div">;

export const ContentBackground = ({ className, ...rest }: ContentBackgroundProps) => {
  return (
    <div
      className={cn(
        "absolute inset-0 h-[280px] -z-10 overflow-hidden",
        "after:content-[''] after:absolute after:inset-0",
        "after:via-theme-background/80 after:to-theme-background after:bg-gradient-to-b",
        className
      )}
      {...rest}
    />
  );
};
