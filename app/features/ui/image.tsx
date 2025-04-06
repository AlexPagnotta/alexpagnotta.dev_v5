import { type ImageProps as NextImageProps } from "next/image";
import NextImage from "next/image";
import React from "react";

export type ImageProps = NextImageProps;

export const Image = React.forwardRef((props: ImageProps, ref: React.ForwardedRef<HTMLImageElement>) => {
  return <NextImage ref={ref} draggable={false} {...props} />;
});

Image.displayName = "Image";
