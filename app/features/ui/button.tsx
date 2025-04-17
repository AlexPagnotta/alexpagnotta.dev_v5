import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";
import React from "react";

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  Omit<VariantProps<typeof buttonStyles>, "type"> & {
    icon?: boolean;
    asChild?: boolean;
  };

export const buttonStyles = cva({
  base: [
    "group inline-flex items-center justify-center gap-8",
    "disabled:opacity-60 disabled:pointer-events-none",
    "transition-colors duration-200",
  ],
  variants: {
    variant: {
      primary: [
        "bg-theme-button-primary-background text-theme-button-primary-foreground",
        "hover:bg-theme-button-primary-hover-background",
      ],
    },
    size: {
      md: "",
      lg: "",
    },
    type: {
      default: "",
      icon: "rounded-full hover:[&>svg]:rotate-16 hover:[&>img]:rotate-16",
    },
  },

  compoundVariants: [
    {
      size: "md",
      type: "icon",
      className: "size-40 [&>svg]:size-20 [&>img]:size-20",
    },
    {
      size: "lg",
      type: "icon",
      className: "size-48 lg:size-56 [&>svg]:size-24 [&>img]:size-24 lg:[&>svg]:size-28 lg:[&>img]:size-28",
    },
  ],

  defaultVariants: {
    variant: "primary",
    size: "md",
    type: "default",
  },
});

export const Button = React.forwardRef(
  ({ variant, size, icon, asChild, className, ...rest }: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const Component = asChild ? Slot : "button";

    const type = icon ? "icon" : "default";

    // TODO: Remove once default button is implemented
    if (type === "default")
      throw new Error("Not Implemented: Only secondary variant and icon buttons are supported at this time.");

    return <Component className={buttonStyles({ variant, size, type, className })} {...rest} ref={ref} />;
  }
);

Button.displayName = "Button";
