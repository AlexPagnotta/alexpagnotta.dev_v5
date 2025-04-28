import {
  MarkdownFloatingContent,
  MarkdownFloatingContentTrigger,
  MarkdownFloatingContentContent,
} from "~/features/markdown/floating-content/floating-content";
import { Image } from "~/features/ui/image";

import StarrParkImage from "../assets/starr-park.png";

export const StarrParkFloatingContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <MarkdownFloatingContent accentColor="purple">
      <MarkdownFloatingContentTrigger>{children}</MarkdownFloatingContentTrigger>
      <MarkdownFloatingContentContent>
        <Image
          src={StarrParkImage}
          alt="Starr Park Map"
          priority
          sizes="(max-width: 768px) 100px, 140px"
          className="w-[100px] md:w-[140px] h-auto"
        />
      </MarkdownFloatingContentContent>
    </MarkdownFloatingContent>
  );
};
