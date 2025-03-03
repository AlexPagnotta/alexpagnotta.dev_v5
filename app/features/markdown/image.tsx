import { MarkdownFullContainer } from "~/features/markdown/full-container";
import { cn } from "~/features/style/utils";
import { Image, type ImageProps } from "~/features/ui/image";

type MarkdownImageProps = Pick<ImageProps, "alt" | "src"> & {
  wide?: boolean;
  showCaption?: boolean;
};

export const MarkdownImage = ({ alt, showCaption, wide, ...rest }: MarkdownImageProps) => {
  const Component = (
    <figure className={cn("flex flex-col gap-16 w-full", !wide && "my-48")}>
      <Image
        sizes={wide ? "(max-width: 880px) 100vw, 880px" : "(max-width: 560px) 100vw, 560px"}
        placeholder="blur"
        alt={alt}
        className="rounded-lg"
        {...rest}
      />
      {showCaption && (
        <figcaption className="text-right body-1 text-theme-foreground-muted pr-[2.8rem]">{alt}</figcaption>
      )}
    </figure>
  );

  if (wide) {
    return (
      <MarkdownFullContainer className="my-48">
        <div
          className={cn(
            "flex justify-end max-w-container-max-width-w-spacing px-container-horizontal mx-auto ",
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
