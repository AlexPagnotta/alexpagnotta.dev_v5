import React from "react";

import { cva, type VariantProps } from "~/features/style/utils";

export type VideoProps = Omit<VariantProps<typeof videoStyles> & React.ComponentPropsWithoutRef<"video">, "title"> & {
  title: string;
};

const videoStyles = cva({
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

export const Video = React.forwardRef((props: VideoProps, ref: React.ForwardedRef<HTMLVideoElement>) => {
  const { rounded, className, ...rest } = props;

  return <video className={videoStyles({ rounded, className })} ref={ref} {...rest} />;
});

Video.displayName = "Video";
