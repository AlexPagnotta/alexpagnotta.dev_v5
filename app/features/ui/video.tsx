import React from "react";

export type VideoProps = Omit<React.ComponentPropsWithoutRef<"video">, "title" | "src"> & {
  title: string;
  className?: string;
  src:
    | string
    | {
        srcUrl: string;
        type: string;
      }[];
};

export const Video = React.forwardRef(({ src, ...props }: VideoProps, ref: React.ForwardedRef<HTMLVideoElement>) => {
  const isMultiSrc = Array.isArray(src);

  if (isMultiSrc) {
    return (
      <video ref={ref} {...props}>
        {src.map((src) => (
          <source src={src.srcUrl} type={src.type} key={src.srcUrl} />
        ))}
      </video>
    );
  }

  return <video ref={ref} src={src} {...props} />;
});

Video.displayName = "Video";
