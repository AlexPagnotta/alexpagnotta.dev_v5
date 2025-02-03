import { notFound } from "next/navigation";

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
  if (contentType && !["writing", "work", "experiment"].includes(contentType)) return notFound();

  return (
    <div className="w-full">
      <h1 className="title-1">Homepage / {contentType}</h1>
    </div>
  );
}
