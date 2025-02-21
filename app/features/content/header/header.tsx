import { type ComponentPropsWithoutRef } from "react";

import { ContentHeaderBackNav } from "~/features/content/header/back-nav";
import { cn } from "~/features/style/utils";

type CompoundContentHeader = typeof ContentHeader & {
  Body: typeof ContentHeaderBody;
  Title: typeof ContentHeaderTitle;
  Subtitle: typeof ContentHeaderSubtitle;
  TitleAppendixWrapper: typeof ContentHeaderTitleAppendixWrapper;
};

export type ContentHeaderProps = ComponentPropsWithoutRef<"header">;

const ContentHeader = ({ className, children, ...rest }: ContentHeaderProps) => {
  return (
    <header
      data-content-header
      className={cn("flex flex-col sm:flex-row sm:justify-between sm:items-start gap-32 sm:gap-64-px", className)}
      {...rest}
    >
      <ContentHeaderBackNav className="shrink-0" />
      {children}
    </header>
  );
};

const ContentHeaderBody = ({ className, ...rest }: ComponentPropsWithoutRef<"div">) => {
  return <div className={cn("flex flex-col items-end text-right", className)} {...rest} />;
};

const ContentHeaderTitle = ({ className, ...rest }: ComponentPropsWithoutRef<"h1">) => {
  return <h1 className={cn("title-1", className)} {...rest} />;
};

const ContentHeaderSubtitle = ({ className, ...rest }: ComponentPropsWithoutRef<"p">) => {
  return <p className={cn("body-2", className)} {...rest} />;
};

type ContentHeaderTitleAppendixWrapperProps = ComponentPropsWithoutRef<"div"> & {
  appendix: React.ReactNode;
};

const ContentHeaderTitleAppendixWrapper = ({
  className,
  children,
  appendix,
  ...rest
}: ContentHeaderTitleAppendixWrapperProps) => {
  return (
    <div className="relative" {...rest}>
      {children}
      <div
        className={cn(
          "absolute title-1 whitespace-nowrap",
          "right-0 top-0 -translate-y-full",
          "container-header-appendix:top-1/2 container-header-appendix:-translate-y-1/2 container-header-appendix:translate-x-full",
          className
        )}
      >
        {appendix}
      </div>
    </div>
  );
};

const CompoundContentHeader = ContentHeader as CompoundContentHeader;

CompoundContentHeader.Body = ContentHeaderBody;
CompoundContentHeader.Title = ContentHeaderTitle;
CompoundContentHeader.Subtitle = ContentHeaderSubtitle;
CompoundContentHeader.TitleAppendixWrapper = ContentHeaderTitleAppendixWrapper;

export { CompoundContentHeader as ContentHeader };
