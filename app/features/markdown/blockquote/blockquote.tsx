import { type ComponentPropsWithoutRef } from "react";

import { getRandomMarkdownBlockquoteAccentColor } from "~/features/markdown/blockquote/utils.server";
import { cn, cva, type VariantProps } from "~/features/style/utils";
import { Icon } from "~/features/ui/icon/icon-component";

type MarkdownBlockquoteProps = ComponentPropsWithoutRef<"blockquote"> &
  Omit<VariantProps<typeof blockquoteStyles>, "accentColor"> & {
    accentColor?: VariantProps<typeof blockquoteStyles>["accentColor"] | "random";
  };

const blockquoteStyles = cva({
  base: "relative px-24-px sm:pl-48-px sm:pr-32-px py-24 body-2 italic my-64 rounded-md rotate-2",
  variants: {
    accentColor: {
      "light-blue": "bg-theme-blockquote-light-blue-background text-theme-blockquote-light-blue-foreground",
      blue: "bg-theme-blockquote-blue-background text-theme-blockquote-blue-foreground",
      green: "bg-theme-blockquote-green-background text-theme-blockquote-green-foreground",
      red: "bg-theme-blockquote-red-background text-theme-blockquote-red-foreground",
      purple: "bg-theme-blockquote-purple-background text-theme-blockquote-purple-foreground",
      pink: "bg-theme-blockquote-pink-background text-theme-blockquote-pink-foreground",
      yellow: "bg-theme-blockquote-yellow-background text-theme-blockquote-yellow-foreground",
    },
  },
});

export const MarkdownBlockquote = ({ className, children, accentColor, ...rest }: MarkdownBlockquoteProps) => {
  const _accentColor = accentColor === "random" ? getRandomMarkdownBlockquoteAccentColor() : accentColor;

  return (
    <blockquote className={cn(blockquoteStyles({ accentColor: _accentColor }), className)} {...rest}>
      <Icon
        name="quote"
        className={cn(
          "absolute top-0 left-0 size-[56px] text-current",
          "translate-x-[-50%] translate-y-[-50%] -rotate-[8deg]"
        )}
      />
      {children}
    </blockquote>
  );
};
