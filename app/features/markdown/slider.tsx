"use client";

import useEmblaCarousel from "embla-carousel-react";

import { MarkdownFullContainer } from "~/features/markdown/full-container";
import { cn } from "~/features/style/utils";
import { Image, type ImageProps } from "~/features/ui/image";

type SliderProps = {
  children: React.ReactNode;
  className?: string;
};

const MarkdownSlider = ({ children, className }: SliderProps) => {
  const [sliderRef] = useEmblaCarousel();

  // TODO: Make slider accessible, hidden or visible navigation buttons, and aria-hidden on not visible images (?)
  return (
    <MarkdownFullContainer className={cn("my-48 overflow-hidden", className)}>
      <div
        className={cn("flex justify-end max-w-container-max-width-w-spacing px-container-horizontal mx-auto")}
        ref={sliderRef}
      >
        <div className="max-w-content-body-container-md-max-width flex gap-20-px">{children}</div>
      </div>
    </MarkdownFullContainer>
  );
};

type MarkdownSliderImageItemProps = Pick<ImageProps, "alt" | "src"> & {
  className?: string;
};

const MarkdownSliderItemImage = ({ alt, src, className }: MarkdownSliderImageItemProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      placeholder="blur"
      sizes="(max-width: 640px) 100vw, 720px"
      className={cn("shrink-0 min-w-0 h-[20rem] sm:h-[32rem] md:h-[34rem] w-auto rounded-lg select-none", className)}
    />
  );
};

// Compound pattern not used, see https://github.com/vercel/next.js/issues/44030
export { MarkdownSlider, MarkdownSliderItemImage };
