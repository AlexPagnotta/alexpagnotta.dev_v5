import { MarkdownFullContainer } from "~/features/markdown/full-container";
import { cn } from "~/features/style/utils";
import { Video, type VideoProps } from "~/features/ui/video";

type MarkdownVideoProps = Pick<VideoProps, "title" | "src" | "autoPlay" | "controls" | "loop" | "muted"> & {
  wide?: boolean;
  showCaption?: boolean;
};

export const MarkdownVideo = ({ wide, title, showCaption, ...rest }: MarkdownVideoProps) => {
  const Component = (
    <figure className={cn("flex flex-col gap-16 w-full aspect-video", !wide && "my-48")}>
      <Video title={title} playsInline className="size-full object-cover bg-black rounded-lg" {...rest} />
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
