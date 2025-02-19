import { FullContainer } from "~/features/markdown/full-container";
import { Video, type VideoProps } from "~/features/ui/video";

type MarkdownVideoProps = Pick<VideoProps, "title" | "src" | "autoPlay" | "controls" | "loop" | "muted"> & {
  wide?: boolean;
  showCaption?: boolean;
};

export const MarkdownVideo = ({ wide, title, showCaption, ...rest }: MarkdownVideoProps) => {
  const Component = (
    <figure className="flex flex-col gap-16 my-48 w-full">
      <Video rounded title={title} playsInline {...rest} />
      {showCaption && (
        <figcaption className="text-right body-1 text-theme-foreground-muted pr-[2.8rem]">{title}</figcaption>
      )}
    </figure>
  );

  if (wide) {
    return (
      <FullContainer className="[&>figure]:mx-auto [&>figure]:max-w-container-max-width-w-spacing [&>figure]:px-container-horizontal">
        {Component}
      </FullContainer>
    );
  }

  return Component;
};
