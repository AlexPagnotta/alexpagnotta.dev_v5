import { MarkdownFullContainer } from "~/features/markdown/full-container";
import { cn } from "~/features/style/utils";
import { Video, type VideoProps } from "~/features/ui/video";

type MarkdownVideoProps = Pick<
  VideoProps,
  "title" | "src" | "autoPlay" | "controls" | "loop" | "muted" | "className"
> & {
  wide?: boolean;
  showCaption?: boolean;
  rounded?: "none" | "md" | "lg";
};

export const MarkdownVideo = ({ wide, title, showCaption, rounded = "lg", className, ...rest }: MarkdownVideoProps) => {
  const Component = (
    <figure className={cn("flex flex-col gap-16 w-full", !wide && "my-48")}>
      <Video
        title={title}
        playsInline
        className={cn(
          "size-full object-cover aspect-video",
          {
            "rounded-md": rounded === "md",
            "rounded-lg": rounded === "lg",
          },
          className
        )}
        {...rest}
      />
      {showCaption && (
        <figcaption className="text-right body-1 text-theme-foreground-muted pr-[2.8rem]">{title}</figcaption>
      )}
    </figure>
  );

  if (wide) {
    return (
      <MarkdownFullContainer className="my-48">
        <div
          className={cn(
            "flex justify-end max-w-container-max-width-w-spacing px-container-horizontal mx-auto",
            "[&>figure]:max-w-content-body-container-md-max-width"
          )}
        >
          {Component}
        </div>
      </MarkdownFullContainer>
    );
  }

  return Component;
};
