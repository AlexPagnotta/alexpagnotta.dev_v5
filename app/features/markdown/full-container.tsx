import { Slot } from "@radix-ui/react-slot";
import { type ComponentPropsWithoutRef } from "react";

import { cn } from "~/features/style/utils";

type MarkdownFullContainerProps = ComponentPropsWithoutRef<"div"> & {
  asChild?: boolean;
};

/**
 * A container that takes expands the bounds of the content body container to fullscreen
 */
export const MarkdownFullContainer = ({ asChild, className, ...rest }: MarkdownFullContainerProps) => {
  const Component = asChild ? Slot : "div";

  return (
    <Component
      className={cn(
        "[--c-w:var(--base-spacing-container-max-width)]",
        "[--c-w-w-s:var(--base-spacing-container-max-width-w-spacing)]",
        "[--c-s-h:var(--base-spacing-container-horizontal)]",
        "[--c-b-w:var(--base-spacing-content-body-container-max-width)]",

        "relative w-screen",
        "ml-[calc((min(calc(100vw-var(--c-s-h)),calc(var(--c-w)+var(--c-s-h)))-min(calc(100vw-var(--c-s-h)*2),var(--c-b-w)))*-1)]",
        "left-[min(calc((100vw-var(--c-w-w-s))/2*-1),0px)]",
        className
      )}
      {...rest}
    />
  );
};
