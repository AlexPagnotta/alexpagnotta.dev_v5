import {
  MarkdownFloatingContent,
  MarkdownFloatingContentTrigger,
  MarkdownFloatingContentContent,
} from "~/features/markdown/floating-content/floating-content";
import { Image } from "~/features/ui/image";

import GodzillaTestImage from "../assets/godzilla.png";

export const GodzillaFloatingContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <MarkdownFloatingContent accentColor="red">
      <MarkdownFloatingContentTrigger>{children}</MarkdownFloatingContentTrigger>
      <MarkdownFloatingContentContent>
        <Image
          src={GodzillaTestImage}
          alt="Godzilla"
          priority
          sizes="(max-width: 768px) 100px, 140px"
          className="w-[100px] md:w-[140px] h-auto"
        />
      </MarkdownFloatingContentContent>
    </MarkdownFloatingContent>
  );
};
