import { ContentType } from "~/features/content/constants";
import { getAllContent } from "~/features/content/utils.server";
import { HomepageGrid } from "~/features/homepage/grid/grid";
import { HomepageHeader } from "~/features/homepage/header/header";

export function generateStaticParams() {
  return [
    { contentType: [] }, // Homepage
    ...Object.values(ContentType).map((type) => ({
      contentType: [type],
    })),
  ];
}

export const dynamicParams = false;

type HomepageProps = {
  params: Promise<{
    contentType?: [ContentType];
  }>;
};

export default async function Homepage({ params }: HomepageProps) {
  const contentTypeParam = (await params).contentType;

  const contentType = contentTypeParam?.[0];
  const content = await getAllContent(contentType);

  return (
    <div className="w-full flex flex-col gap-64 lg:flex-row lg:justify-between lg:items-start lg:gap-64-px ">
      <HomepageHeader selectedContentType={contentType} className="lg:sticky lg:top-container-vertical" />
      <HomepageGrid items={content} />
    </div>
  );
}
