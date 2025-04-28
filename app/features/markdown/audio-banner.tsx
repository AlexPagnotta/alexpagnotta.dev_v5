"use client";

import { useRef, useState, type ComponentPropsWithoutRef, useEffect } from "react";

import { cva, type VariantProps } from "~/features/style/utils";
import { Button } from "~/features/ui/button";
import { Icon } from "~/features/ui/icon/icon-component";
import { type AccentColor } from "~/features/utils/colors/contants";

type MarkdownAudioProps = Pick<ComponentPropsWithoutRef<"audio">, "src" | "loop"> &
  ComponentPropsWithoutRef<"div"> &
  Required<Pick<VariantProps<typeof audioBannerStyles>, "accentColor">> & {
    volume?: number;
  };

const audioBannerStyles = cva({
  base: [
    "relative px-24-px sm:pl-32-px sm:pr-48-px py-24 mt-64 mb-96",
    "mx-auto max-w-content-body-container-xs-max-width",
    "body-2 rounded-md border border-current -rotate-2",
  ],
  variants: {
    accentColor: {
      "light-blue": "bg-theme-audio-banner-light-blue-background/10 text-theme-audio-banner-light-blue-foreground",
      blue: "bg-theme-audio-banner-blue-background/10 text-theme-audio-banner-blue-foreground",
      green: "bg-theme-audio-banner-green-background/10 text-theme-audio-banner-green-foreground",
      red: "bg-theme-audio-banner-red-background/10 text-theme-audio-banner-red-foreground",
      purple: "bg-theme-audio-banner-purple-background/10 text-theme-audio-banner-purple-foreground",
      pink: "bg-theme-audio-banner-pink-background/10 text-theme-audio-banner-pink-foreground",
      yellow: "bg-theme-audio-banner-yellow-background/10 text-theme-audio-banner-yellow-foreground",
    } satisfies Record<AccentColor[number], string>,
  },
});

export const MarkdownAudioBanner = ({
  src,
  className,
  children,
  accentColor,
  volume = 1.0,
  ...rest
}: MarkdownAudioProps) => {
  const audioPlayerRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const isPausedFromVideo = useRef(false);

  // Sync audio volume prop with the audio player
  useEffect(() => {
    if (!audioPlayerRef.current) return;
    audioPlayerRef.current.volume = Math.min(Math.max(volume, 0), 1);
  }, [volume]);

  // Toggle audio when a video on the page starts, is paused or ends
  useEffect(() => {
    if (!audioPlayerRef.current) return;

    const handleVideoEvent = (event: Event) => {
      // Check if audio player is currently playing
      const isAudioPlaying = !audioPlayerRef.current?.paused;

      // If a video starts playing, pause the audio
      if (event.type === "play" && isAudioPlaying) {
        audioPlayerRef.current?.pause();
        setIsPlaying(false);
        isPausedFromVideo.current = true;
      }

      // If a video is paused or ends, and our audio was previously playing, resume it
      if ((event.type === "pause" || event.type === "ended") && isPausedFromVideo.current) {
        audioPlayerRef.current?.play();
        setIsPlaying(true);
        isPausedFromVideo.current = false;
      }
    };

    // Find all videos that are not muted
    // And attach event listeners to each of them
    const videoElements = Array.from(document.querySelectorAll<HTMLVideoElement>("video")).filter(
      (video) => !video.defaultMuted && !video.muted
    );

    videoElements.forEach((video) => {
      video.addEventListener("play", handleVideoEvent);
      video.addEventListener("pause", handleVideoEvent);
      video.addEventListener("ended", handleVideoEvent);
    });

    // Cleanup event listeners
    return () => {
      videoElements.forEach((video) => {
        video.removeEventListener("play", handleVideoEvent);
        video.removeEventListener("pause", handleVideoEvent);
        video.removeEventListener("ended", handleVideoEvent);
      });
    };
  }, []);

  const handleTogglePlay = () => {
    if (!audioPlayerRef.current) return;

    if (isPlaying) {
      audioPlayerRef.current.pause();
    } else {
      audioPlayerRef.current.play();
    }

    setIsPlaying((value) => !value);
  };

  return (
    <div className={audioBannerStyles({ accentColor, className })} {...rest}>
      <audio ref={audioPlayerRef} src={src} />

      <span>{children}</span>

      <Button
        variant="accent"
        accentColor={accentColor}
        icon
        disableAnimation
        onClick={handleTogglePlay}
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
        className="absolute bottom-0 translate-y-[60%] right-24-px border border-current"
      >
        <Icon name={isPlaying ? "pause" : "play"} />
      </Button>
    </div>
  );
};
