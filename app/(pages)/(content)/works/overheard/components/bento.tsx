import { MarkdownBento } from "~/features/markdown/bento";
import { Image } from "~/features/ui/image";
import { Video } from "~/features/ui/video";

import ClipImage from "../assets/clip.svg";

export const OverheardBento = () => {
  return (
    <MarkdownBento>
      <MarkdownBento.Item className="bg-gradient-to-b from-[hsl(204,58%,90%)] to-[hsl(204,58%,80%)]" spacing>
        <Video
          title="Nokia Phone"
          src={[
            {
              srcUrl: "/assets/videos/works/overheard/nokia-phone.mp4",
              type: "video/mp4",
            },
            {
              srcUrl: "/assets/videos/works/overheard/nokia-phone.webm",
              type: "video/webm",
            },
          ]}
          poster="/assets/videos/works/overheard/nokia-phone-poster.png"
          playsInline
          autoPlay
          muted
          loop
          className="size-full object-contain"
        />
      </MarkdownBento.Item>

      <MarkdownBento.VideoItem
        title="Homepage Screen"
        poster="/assets/videos/works/overheard/home-poster.jpg"
        src="/assets/videos/works/overheard/home.mp4"
        large
        className="border border-theme-foreground/10"
      />
      <MarkdownBento.VideoItem
        title="Themes Showcase"
        poster="/assets/videos/works/overheard/themes-poster.jpg"
        src="/assets/videos/works/overheard/themes.mp4"
        large
      />
      <MarkdownBento.Item className="bg-gradient-to-b from-[hsl(240,70%,80%)] to-[hsl(240,70%,90%)]" spacing>
        <Image
          src={ClipImage}
          alt="Clip Character"
          priority
          className="size-full object-contain mx-auto max-w-[110px] sm:max-w-[160px] md:max-w-[110px]"
        />
      </MarkdownBento.Item>
      <MarkdownBento.Item className="bg-gradient-to-b from-[hsl(355,80%,90%)] to-[hsl(355,80%,80%)]" spacing>
        <Video
          title="Vintage PC"
          src={[
            {
              srcUrl: "/assets/videos/works/overheard/vintage-pc.mp4",
              type: "video/mp4",
            },
            {
              srcUrl: "/assets/videos/works/overheard/vintage-pc.webm",
              type: "video/webm",
            },
          ]}
          poster="/assets/videos/works/overheard/vintage-pc-poster.png"
          playsInline
          autoPlay
          muted
          loop
          className="size-full object-contain"
        />
      </MarkdownBento.Item>
      <MarkdownBento.VideoItem
        title="Cities Themes Showcase"
        poster="/assets/videos/works/overheard/cities-poster.jpg"
        src="/assets/videos/works/overheard/cities.mp4"
        large
      />
    </MarkdownBento>
  );
};
