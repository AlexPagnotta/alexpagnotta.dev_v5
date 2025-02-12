import { notFound } from "next/navigation";

import { type ContentType, isContentType } from "~/features/content/constants";
import { getAllContent } from "~/features/content/utils.server";
import { Header } from "~/features/homepage/header/header";
import { cn } from "~/features/style/utils";
import { Link } from "~/features/ui/link";

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
    <>
      <main className="w-full flex flex-col gap-64 lg:flex-row lg:justify-between lg:items-start lg:gap-64-px ">
        <div className="sticky top-container-vertical">
          <Header selectedContentType={contentType} />
        </div>

        <div className="flex flex-col gap-64 items-center bg-theme-background z-10 relative">
          <div className="h-[120px] w-full top-container-vertical bg-pink-100 sticky rounded-lg lg:hidden" />

          <div
            className={cn(
              "border border-black",
              "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 sm:grid-flow-row-dense justify-items-center gap-20-px",
              "w-full max-w-[36rem] sm:max-w-none sm:w-[46rem] md:w-[70rem] lg:w-[46rem]"
            )}
          >
            {content.map((item, index) => {
              const isLarge = index === 3;

              return (
                <Link
                  href={item.slug}
                  key={item.slug}
                  className={cn("h-[22rem] w-full bg-green-100 rounded-lg", isLarge && "sm:col-span-2")}
                >
                  {item.metadata.title}
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
