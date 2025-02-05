import React from "react";

import { cva, type VariantProps } from "~/features/style/utils";

type Props = VariantProps<typeof videoStyles> & React.ComponentPropsWithoutRef<"video">;

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

export const Video = React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLVideoElement>) => {
  const { rounded, className, ...rest } = props;

  return <video className={videoStyles({ rounded, className })} ref={ref} {...rest} />;
});

Video.displayName = "Video";
