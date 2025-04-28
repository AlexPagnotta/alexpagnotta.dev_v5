import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";
import React from "react";

import { type AccentColor } from "~/features/utils/colors/contants";

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  Omit<VariantProps<typeof buttonStyles>, "type" | "accentColor" | "variant" | "iconAnimation"> &
  (
    | {
        variant: "primary"; // secondary, tertiary, etc.
        accentColor?: never;
      }
    | {
        variant: "accent";
        accentColor: NonNullable<VariantProps<typeof buttonStyles>["accentColor"]>;
      }
  ) &
  (
    | {
        icon: true;
        disableAnimation?: boolean;
      }
    | {
        icon?: false;
        disableAnimation?: never;
      }
  ) & {
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
        "hover:bg-theme-button-primary-hover-background active:bg-theme-button-primary-hover-background",
      ],
      accent: [],
    },
    size: {
      md: "",
      lg: "",
    },
    type: {
      default: "",
      icon: "rounded-full",
    },
    iconAnimation: {
      true: "hover:[&>svg]:rotate-16 hover:[&>img]:rotate-16 active:[&>svg]:rotate-16 active:[&>img]:rotate-16",
      false: "",
    },
    accentColor: {
      "light-blue": [
        "text-theme-button-accent-light-blue-foreground bg-theme-button-accent-light-blue-background",
        "hover:bg-theme-button-accent-light-blue-hover-background active:bg-theme-button-accent-light-blue-hover-background",
      ],
      blue: [
        "text-theme-button-accent-blue-foreground bg-theme-button-accent-blue-background",
        "hover:bg-theme-button-accent-blue-hover-background active:bg-theme-button-accent-blue-hover-background",
      ],
      green: [
        "text-theme-button-accent-green-foreground bg-theme-button-accent-green-background",
        "hover:bg-theme-button-accent-green-hover-background active:bg-theme-button-accent-green-hover-background",
      ],
      red: [
        "text-theme-button-accent-red-foreground bg-theme-button-accent-red-background",
        "hover:bg-theme-button-accent-red-hover-background active:bg-theme-button-accent-red-hover-background",
      ],
      purple: [
        "text-theme-button-accent-purple-foreground bg-theme-button-accent-purple-background",
        "hover:bg-theme-button-accent-purple-hover-background active:bg-theme-button-accent-purple-hover-background",
      ],
      pink: [
        "text-theme-button-accent-pink-foreground bg-theme-button-accent-pink-background",
        "hover:bg-theme-button-accent-pink-hover-background active:bg-theme-button-accent-pink-hover-background",
      ],
      yellow: [
        "text-theme-button-accent-yellow-foreground bg-theme-button-accent-yellow-background",
        "hover:bg-theme-button-accent-yellow-hover-background active:bg-theme-button-accent-yellow-hover-background",
      ],
    } satisfies Record<AccentColor[number], string[]>,
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
    size: "md",
    type: "default",
  },
});

export const Button = React.forwardRef(
  (
    { variant, size, icon, disableAnimation, accentColor, asChild, className, ...rest }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const Component = asChild ? Slot : "button";

    const type = icon ? "icon" : "default";

    // TODO: Remove once default button is implemented
    if (type === "default")
      throw new Error("Not Implemented: Only secondary variant and icon buttons are supported at this time.");

    return (
      <Component
        className={buttonStyles({
          variant,
          size,
          type,
          iconAnimation: icon && !disableAnimation,
          accentColor: variant === "accent" ? accentColor : undefined,
          className,
        })}
        {...rest}
        ref={ref}
      />
    );
  }
);

Button.displayName = "Button";
