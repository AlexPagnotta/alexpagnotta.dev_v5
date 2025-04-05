import {
  MarkdownFloatingContent,
  MarkdownFloatingContentTrigger,
  MarkdownFloatingContentContent,
} from "~/features/markdown/floating-content/floating-content";
import { Image } from "~/features/ui/image";

import DuoImage from "../assets/duo.svg";

export const DuoFloatingContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <MarkdownFloatingContent accentColor="blue">
      <MarkdownFloatingContentTrigger>{children}</MarkdownFloatingContentTrigger>
      <MarkdownFloatingContentContent>
        <Image src={DuoImage} alt="Duo" priority className="w-[100px] md:w-[140px] h-auto" />
      </MarkdownFloatingContentContent>
    </MarkdownFloatingContent>
  );
};
