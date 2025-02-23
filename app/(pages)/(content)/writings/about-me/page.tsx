import { WritingContentHeader } from "~/features/content/header/writing";

import MarkdownBody from "./body.mdx";
import { contentMetadata } from "./metadata";

export default function ContentPage() {
  return (
    <>
      <WritingContentHeader metadata={contentMetadata} />
      <MarkdownBody />
    </>
  );
}
