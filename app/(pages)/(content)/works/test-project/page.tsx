import { ContentBodyContainer } from "~/features/content/body/container";
import { WorkContentHeader } from "~/features/content/header/work";

import MarkdownBody from "./body.mdx";
import { contentMetadata } from "./metadata";

export default function ContentPage() {
  return (
    <>
      <WorkContentHeader metadata={contentMetadata} />
      <ContentBodyContainer>
        <MarkdownBody />
      </ContentBodyContainer>
    </>
  );
}
