import { Slot } from "@radix-ui/react-slot";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "~/features/style/utils";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  asChild?: boolean;
};

const containerStyles = "mx-auto py-container-vertical px-container-horizontal max-w-container-max-width";

export const Container = ({ children, asChild, className, ...rest }: ContainerProps) => {
  const Component = asChild ? Slot : "div";

  return (
    <Component className={cn(containerStyles, className)} {...rest}>
      {children}
    </Component>
  );
};
