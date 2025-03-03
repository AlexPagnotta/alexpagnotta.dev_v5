import React from "react";

export type VideoProps = Omit<React.ComponentPropsWithoutRef<"video">, "title"> & {
  title: string;
};

export const Video = React.forwardRef((props: VideoProps, ref: React.ForwardedRef<HTMLVideoElement>) => {
  return <video ref={ref} {...props} />;
});

Video.displayName = "Video";
