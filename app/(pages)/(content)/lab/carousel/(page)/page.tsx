import { LabContentHeader } from "~/features/content/header/lab";
import { ContentJsonLDScript } from "~/features/content/metadata/json-ld";
import { generatePageMetadata } from "~/features/content/metadata/utils";
import { ContentWrapper } from "~/features/content/wrapper";

import { contentMetadata } from "../metadata";

import MarkdownBody from "./body.mdx";

export const metadata = generatePageMetadata(contentMetadata);

export default function ContentPage() {
  return (
    <ContentWrapper metadata={contentMetadata}>
      <LabContentHeader metadata={contentMetadata} />
      <MarkdownBody />

      <ContentJsonLDScript metadata={contentMetadata} />
    </ContentWrapper>
  );
}
