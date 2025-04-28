import { MarkdownBento } from "~/features/markdown/bento";

export const BrawlStarsBento = () => {
  return (
    <MarkdownBento>
      <MarkdownBento.VideoItem
        title="Experience Scene"
        poster="/assets/videos/works/brawl-stars/scene-poster.jpg"
        src="/assets/videos/works/brawl-stars/scene.mp4"
        large
      />
      <MarkdownBento.VideoItem
        title="Spike short video"
        poster="/assets/videos/works/brawl-stars/spike-short-poster.jpg"
        src="/assets/videos/works/brawl-stars/spike-short.mp4"
      />

      <MarkdownBento.VideoItem
        title="SPSD static screen"
        poster="/assets/videos/works/brawl-stars/spsd-static-poster.jpg"
        src="/assets/videos/works/brawl-stars/spsd-static.mp4"
      />
      <MarkdownBento.VideoItem
        title="Experience Final Scene"
        poster="/assets/videos/works/brawl-stars/scene-final-poster.jpg"
        src="/assets/videos/works/brawl-stars/scene-final.mp4"
        large
      />
    </MarkdownBento>
  );
};
