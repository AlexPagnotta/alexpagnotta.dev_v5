import { type ImageProps as NextImageProps } from "next/image";
import NextImage from "next/image";
import React from "react";

import { cva, type VariantProps } from "~/features/style/utils";

type ImageProps = VariantProps<typeof imageStyles> & NextImageProps;

const imageStyles = cva({
  variants: {
    rounded: {
      true: "rounded-lg",
      false: "",
    },
  },
  defaultVariants: {
    rounded: false,
  },
});

export const Image = React.forwardRef((props: ImageProps, ref: React.ForwardedRef<HTMLImageElement>) => {
  const { rounded, className, ...rest } = props;

  return <NextImage className={imageStyles({ rounded, className })} ref={ref} {...rest} />;
});

Image.displayName = "Image";
