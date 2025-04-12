import { ContentType } from "~/features/content/constants";
import { getAllContent } from "~/features/content/utils.server";
import { HomepageGrid } from "~/features/homepage/grid/grid";

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

  return <HomepageGrid items={content} />;
}
