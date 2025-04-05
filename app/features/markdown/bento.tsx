import { MarkdownFullContainer } from "~/features/markdown/full-container";
import { cn, cva, type VariantProps } from "~/features/style/utils";
import { Image, type ImageProps } from "~/features/ui/image";
import { Video, type VideoProps } from "~/features/ui/video";

type MarkdownBentoProps = {
  children: React.ReactNode;
  className?: string;
};

type CompoundMarkdownBento = typeof MarkdownBento & {
  Item: typeof MarkdownBentoItem;
  ImageItem: typeof MarkdownBentoImageItem;
  VideoItem: typeof MarkdownBentoVideoItem;
};

const MarkdownBento = ({ children, className }: MarkdownBentoProps) => {
  return (
    <MarkdownFullContainer className={cn("my-48", className)}>
      <div
        className={cn(
          "mx-auto max-w-content-body-container-sm-max-width md:max-w-container-max-width-w-spacing px-container-horizontal",
          "grid grid-cols-1 md:grid-cols-3 grid-flow-row-dense gap-20-px"
        )}
      >
        {children}
      </div>
    </MarkdownFullContainer>
  );
};

type MarkdownBentoItemProps = {
  spacing?: boolean;
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof markdownBentoItemStyles>;

const markdownBentoItemStyles = cva({
  base: ["bg-theme-bento-item-background rounded-lg overflow-hidden @container"],
  variants: {
    large: {
      false: "aspect-[280/360] md:aspect-[280/400]",
      true: "aspect-[580/400] md:col-span-2",
    },
    spacing: {
      true: "p-20-px sm:p-24-px",
    },
  },
  defaultVariants: {
    large: false,
    spacing: false,
  },
});

const MarkdownBentoItem = ({ large, spacing, children, className }: MarkdownBentoItemProps) => {
  return <div className={markdownBentoItemStyles({ large, spacing, className })}>{children}</div>;
};

type MarkdownBentoImageItemProps = Omit<MarkdownBentoItemProps, "children"> & Pick<ImageProps, "alt" | "src">;

const MarkdownBentoImageItem = ({ alt, src, large, spacing, ...rest }: MarkdownBentoImageItemProps) => {
  return (
    <MarkdownBentoItem large={large} spacing={spacing} {...rest}>
      <Image
        src={src}
        sizes={large ? "(max-width: 768px) 100vw, 580px" : "(max-width: 768px) 100vw, 280px"}
        placeholder="blur"
        alt={alt}
        className={cn("size-full object-cover", spacing && "rounded-md overflow-hidden")}
      />
    </MarkdownBentoItem>
  );
};

type MarkdownBentoVideoItemProps = Omit<MarkdownBentoItemProps, "children"> &
  Pick<VideoProps, "title" | "src" | "poster">;

const MarkdownBentoVideoItem = ({ title, src, poster, spacing, ...rest }: MarkdownBentoVideoItemProps) => {
  return (
    <MarkdownBentoItem spacing={spacing} {...rest}>
      <Video
        src={src}
        title={title}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        className={cn("size-full object-cover", spacing && "rounded-md overflow-hidden")}
      />
    </MarkdownBentoItem>
  );
};

const CompountMarkdownBento = MarkdownBento as CompoundMarkdownBento;

CompountMarkdownBento.Item = MarkdownBentoItem;
CompountMarkdownBento.ImageItem = MarkdownBentoImageItem;
CompountMarkdownBento.VideoItem = MarkdownBentoVideoItem;

export { CompountMarkdownBento as MarkdownBento };
