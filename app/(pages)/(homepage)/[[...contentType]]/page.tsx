import { notFound } from "next/navigation";

import { type ContentType, isContentType } from "~/features/content/constants";
import { getAllContent } from "~/features/content/utils.server";
import { HomepageGrid } from "~/features/homepage/grid/grid";
import { HomepageHeader } from "~/features/homepage/header/header";

// Define the page props type for Next.js App Router
type HomepageProps = {
  params: Promise<{
    contentType?: string[];
  }>;
};

// Get the section param from the dynamic segment using App Router props
export default async function Homepage({ params }: HomepageProps) {
  const contentTypeParam = (await params).contentType;

  // Redirect to 404 if content type is an array of multiple values
  // Since we must use a catch-all route to make the param optional
  if (contentTypeParam && contentTypeParam.length > 1) return notFound();

  // Redirect to 404 if content type is not one of the allowed values
  const _contentType = contentTypeParam?.[0];
  if (_contentType && !isContentType(_contentType)) return notFound();

  // Get all content filtered by content type, if provided
  const contentType = _contentType as ContentType;
  const content = await getAllContent(contentType);

  return (
    <div className="w-full flex flex-col gap-64 lg:flex-row lg:justify-between lg:items-start lg:gap-64-px ">
      <HomepageHeader selectedContentType={contentType} className="lg:sticky lg:top-container-vertical" />

      <HomepageGrid items={content} />
    </div>
  );
}
