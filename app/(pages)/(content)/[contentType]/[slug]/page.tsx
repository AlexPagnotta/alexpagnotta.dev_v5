import { notFound } from "next/navigation";

// Define the page props type for Next.js App Router
type Props = {
  params: Promise<{
    contentType: string;
    slug: string;
  }>;
};

// Get the section param from the dynamic segment using App Router props
export default async function Homepage({ params }: Props) {
  const contentType = (await params).contentType;
  const slug = (await params).slug;

  // Redirect to 404 if content type is not one of the allowed values
  if (contentType && !["writings", "works", "lab"].includes(contentType)) return notFound();

  return (
    <div className="w-full border">
      <h1 className="title-1">
        Detail / {contentType} / {slug}
      </h1>
    </div>
  );
}
