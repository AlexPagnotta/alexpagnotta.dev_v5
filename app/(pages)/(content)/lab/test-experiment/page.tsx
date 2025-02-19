import { LabContentHeader } from "~/features/content/header/lab";

import MarkdownBody from "./body.mdx";
import { contentMetadata } from "./metadata";

export default function ContentPage() {
  return (
    <>
      <LabContentHeader metadata={contentMetadata} />
      <MarkdownBody />
    </>
  );
}
