import { type ImageProps } from "next/image";
import NextImage from "next/image";
import React from "react";

import { cva, type VariantProps } from "~/features/style/utils";

type Props = VariantProps<typeof imageStyles> & ImageProps;

export const imageStyles = cva({
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

const Image = React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLImageElement>) => {
  const { rounded, className, ...imageProps } = props;

  return <NextImage className={imageStyles({ rounded, className })} ref={ref} {...imageProps} />;
});

Image.displayName = "Image";

export { Image };
