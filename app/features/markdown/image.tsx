import { FullContainer } from "~/features/markdown/full-container";
import { Image, type ImageProps } from "~/features/ui/image";

type MarkdownImageProps = Pick<ImageProps, "alt" | "src"> & {
  wide?: boolean;
  showCaption?: boolean;
};

export const MarkdownImage = ({ alt, showCaption, wide, ...rest }: MarkdownImageProps) => {
  const Component = (
    <figure className="flex flex-col gap-16 my-48 w-full">
      <Image
        rounded
        sizes={wide ? "(max-width: 880px) 100vw, 880px" : "(max-width: 560px) 100vw, 560px"}
        placeholder="blur"
        alt={alt}
        {...rest}
      />
      {showCaption && (
        <figcaption className="text-right body-1 text-theme-foreground-muted pr-[2.8rem]">{alt}</figcaption>
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
