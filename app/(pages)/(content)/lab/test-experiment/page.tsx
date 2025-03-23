import { LabContentHeader } from "~/features/content/header/lab";
import { ContentJsonLDScript } from "~/features/content/metadata/json-ld";
import { generatePageMetadata } from "~/features/content/metadata/utils";

import MarkdownBody from "./body.mdx";
import { contentMetadata } from "./metadata";

export const metadata = generatePageMetadata(contentMetadata);

export default function ContentPage() {
  return (
    <>
      <LabContentHeader metadata={contentMetadata} />
      <MarkdownBody />

      <ContentJsonLDScript metadata={contentMetadata} />
    </>
  );
}
