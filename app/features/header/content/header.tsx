import { type ComponentPropsWithoutRef } from "react";

import { cn, cva, type VariantProps } from "~/features/style/utils";

type ContentHeaderProps = ComponentPropsWithoutRef<"div">;

type CompoundContentHeader = typeof ContentHeader & {
  Title: typeof ContentHeaderTitle;
  Subtitle: typeof ContentHeaderSubtitle;
  TitleAppendixWrapper: typeof ContentHeaderTitleAppendixWrapper;
};

const ContentHeader = ({ className, ...rest }: ContentHeaderProps) => {
  return <div className={cn("flex flex-col items-end text-left", className)} {...rest} />;
};

type ContentHeaderTitleProps = ComponentPropsWithoutRef<"h1">;

const ContentHeaderTitle = ({ className, ...rest }: ContentHeaderTitleProps) => {
  return <h1 className={cn("title-1", className)} {...rest} />;
};

type ContentHeaderSubtitleProps = ComponentPropsWithoutRef<"p">;

const ContentHeaderSubtitle = ({ className, ...rest }: ContentHeaderSubtitleProps) => {
  return <p className={cn("body-2 text-theme-foreground-muted", className)} {...rest} />;
};

type ContentHeaderTitleAppendixWrapperProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof appendixStyles> & {
    appendix: React.ReactNode;
  };

const appendixStyles = cva({
  base: "absolute title-1",
  variants: {
    position: {
      right: "right-0 top-1/2 -translate-y-1/2 translate-x-full",
      top: "right-0 top-0 -translate-y-full",
    },
  },
  defaultVariants: {
    position: "right",
  },
});

const ContentHeaderTitleAppendixWrapper = ({
  className,
  children,
  appendix,
  position,
  ...rest
}: ContentHeaderTitleAppendixWrapperProps) => {
  return (
    <div className="relative" {...rest}>
      {children}
      <div className={cn(appendixStyles({ position, className }))}>{appendix}</div>
    </div>
  );
};

const CompoundContentHeader = ContentHeader as CompoundContentHeader;

CompoundContentHeader.Title = ContentHeaderTitle;
CompoundContentHeader.Subtitle = ContentHeaderSubtitle;
CompoundContentHeader.TitleAppendixWrapper = ContentHeaderTitleAppendixWrapper;

export { CompoundContentHeader as ContentHeader };
