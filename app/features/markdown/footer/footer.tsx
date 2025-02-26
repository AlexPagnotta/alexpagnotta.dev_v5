import { BaseLink, Link } from "~/features/ui/link/link";
import { Video } from "~/features/ui/video";

export const MarkdownFooter = () => {
  return (
    <div className="max-w-[39rem] mx-auto flex flex-col gap-24 mt-96 rotate-[-3deg]">
      <BaseLink href="/" className="w-full aspect-[18/9] rounded-md overflow-hidden bg-black shadow-sm">
        <Video
          title="Looney Tunes end screen"
          src="/assets/videos/looney-tunes-footer.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="size-full object-cover"
        />
      </BaseLink>
      <p className="text-theme-foreground-muted whitespace-pre-wrap text-center body-1">
        Thanks for reading my post!{"\n"}
        Click the banner to go back to the{" "}
        <Link href="/" underline accentColor="random">
          Homepage
        </Link>
      </p>
    </div>
  );
};
