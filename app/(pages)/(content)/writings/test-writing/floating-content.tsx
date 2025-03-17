import {
  MarkdownFloatingContent,
  MarkdownFloatingContentTrigger,
  MarkdownFloatingContentContent,
} from "~/features/markdown/floating-content/floating-content";
import { Image } from "~/features/ui/image";

import MouseImage from "./assets/mouse_test_low_res.png";

type TestFloatingContentProps = {
  children: React.ReactNode;
};

export const TestFloatingContent = ({ children }: TestFloatingContentProps) => {
  return (
    <MarkdownFloatingContent accentColor="blue">
      <MarkdownFloatingContentTrigger>{children}</MarkdownFloatingContentTrigger>
      <MarkdownFloatingContentContent>
        <Image
          src={MouseImage}
          alt="Mouse"
          priority
          className="w-[100px] md:w-[140px] h-auto rotate-12 drop-shadow-lg"
        />
      </MarkdownFloatingContentContent>
    </MarkdownFloatingContent>
  );
};
