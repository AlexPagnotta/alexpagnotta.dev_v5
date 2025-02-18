import { type VariantProps } from "cva";
import NextLink from "next/link";
import React from "react";

import { cva } from "~/features/style/utils";

type AnchorElementProps = React.ComponentPropsWithoutRef<"a"> & {
  newWindow?: boolean;
};
type NextLinkProps = Omit<React.ComponentPropsWithoutRef<typeof NextLink>, "href" | "passHref">;
type BaseLinkProps = AnchorElementProps & NextLinkProps;

/**
 * Base link component, with support for both internal and external links.
 * Come without any specific styling, useful to be used as a link wrapper for other elements or for polymorphic components.
 */
export const BaseLink = React.forwardRef(
  ({ href, newWindow, className, children, ...rest }: BaseLinkProps, ref: React.ForwardedRef<HTMLAnchorElement>) => {
    if (!href) return children;

    const isInternalLink = href.startsWith("/");

    const newWindowAttrs = !isInternalLink || newWindow ? { target: "_blank", rel: "noopener noreferrer" } : {};

    if (isInternalLink) {
      return (
        <NextLink href={href} className={className} {...rest} ref={ref}>
          {children}
        </NextLink>
      );
    }

    return (
      <a href={href} className={className} {...rest} {...newWindowAttrs} ref={ref}>
        {children}
      </a>
    );
  }
);

BaseLink.displayName = "BaseLink";

type LinkProps = BaseLinkProps &
  (
    | {
        underline: true;
        highlight?: false;
        accentColor?: VariantProps<typeof linkStyles>["underlineAccentColor"];
        highlightOrientation?: never;
      }
    | {
        highlight: true;
        underline?: false;
        accentColor: VariantProps<typeof linkStyles>["highlightAccentColor"];
        highlightOrientation?: VariantProps<typeof linkStyles>["highlightOrientation"];
      }
    | { underline?: false; highlight?: false; accentColor?: never; highlightOrientation?: never }
  );

const linkStyles = cva({
  base: "inline-flex",
  variants: {
    underline: {
      true: [
        "underline decoration-wavy decoration-1 underline-offset-4 decoration-current",
        "hover:decoration-[1.5px]",
        "focus-visible:decoration-[1.5px]",
      ],
      false: "no-underline",
    },
    underlineAccentColor: {
      blue: "hover:text-theme-link-underline-hover-blue focus-visible:text-theme-link-underline-hover-blue",
      green: "hover:text-theme-link-underline-hover-green focus-visible:text-theme-link-underline-hover-green",
      red: "hover:text-theme-link-underline-hover-red focus-visible:text-theme-link-underline-hover-red",
      purple: "hover:text-theme-link-underline-hover-purple focus-visible:text-theme-link-underline-hover-purple",
      pink: "hover:text-theme-link-underline-hover-pink focus-visible:text-theme-link-underline-hover-pink",
    },

    highlight: {
      true: [
        "relative w-min whitespace-nowrap isolate",
        "before:content-[''] before:absolute before:inset-[0.4rem_-0.2rem] before:z-[-1] before:rounded-xs",
      ],
    },
    highlightAccentColor: {
      blue: "text-theme-link-highlight-blue-foreground before:bg-theme-link-highlight-blue-background",
      green: "text-theme-link-highlight-green-foreground before:bg-theme-link-highlight-green-background",
      purple: "text-theme-link-highlight-purple-foreground before:bg-theme-link-highlight-purple-background",
      pink: "text-theme-link-highlight-pink-foreground before:bg-theme-link-highlight-pink-background",
    },
    highlightOrientation: {
      left: "before:rotate-[-2deg] hover:before:rotate-[1deg] focus-visible:before:rotate-[1deg]",
      right: "before:rotate-[2deg] hover:before:rotate-[-1deg] focus-visible:before:rotate-[-1deg]",
      center: "before:rotate-[-1deg] hover:before:rotate-[2deg] focus-visible:before:rotate-[2deg]",
    },
  },
});

export const Link = React.forwardRef(
  (
    { href, underline, accentColor, highlight, highlightOrientation, className, children, ...rest }: LinkProps,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => {
    return (
      <BaseLink
        href={href}
        ref={ref}
        className={linkStyles({
          underline,
          underlineAccentColor: underline ? accentColor : undefined,
          highlight,
          highlightAccentColor: highlight ? accentColor : undefined,
          highlightOrientation: highlight ? (highlightOrientation ?? "center") : undefined,
          className,
        })}
        {...rest}
      >
        {children}
      </BaseLink>
    );
  }
);

Link.displayName = "Link";
