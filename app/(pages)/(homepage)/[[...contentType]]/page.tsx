import { notFound } from "next/navigation";

import { Header } from "~/features/homepage/header/header";
import { cn } from "~/features/style/utils";

// Define the page props type for Next.js App Router
type Props = {
  params: Promise<{
    contentType?: string[];
  }>;
};

// Get the section param from the dynamic segment using App Router props
export default async function Homepage({ params }: Props) {
  const contentTypeParam = (await params).contentType;

  // Redirect to 404 if content type is an array of multiple values
  // Since we must use a catch-all route to make the param optional
  if (contentTypeParam && contentTypeParam.length > 1) return notFound();

  const contentType = contentTypeParam?.[0];

  // Redirect to 404 if content type is not one of the allowed values
  if (contentType && !["writings", "works", "lab"].includes(contentType)) return notFound();

  return (
    <>
      <main className="w-full flex flex-col gap-64 lg:flex-row lg:justify-between lg:items-start lg:gap-64-px ">
        <div className="sticky top-container-vertical">
          <Header />
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
            {[...Array(20)].map((_, index) => {
              const isLarge = index === 3;

              return (
                <div
                  key={index}
                  className={cn("h-[22rem] w-full bg-green-100 rounded-lg", isLarge && "sm:col-span-2")}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
