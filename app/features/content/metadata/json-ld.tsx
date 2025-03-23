"use client";

import { usePathname } from "next/navigation";

import { type ContentMetadata } from "~/features/content/metadata/metadata.server";
import {
  generateContentJsonLD,
  generateRootJsonLD,
  type ContentJsonLD,
  type RootJsonLD,
} from "~/features/content/metadata/utils";

/**
 * Render a JSON-LD script tag for the root page
 * @returns The JSON-LD script tag
 */
export const RootJsonLDScript = () => {
  const data = generateRootJsonLD();

  // Suppress hydration warning since the generated JSON-LD is contains the current date with timestamp
  // so it will be different on the client and server
  return <JsonLDScript suppressHydrationWarning data={data} />;
};

/**
 * Render a JSON-LD script tag for a content item
 * @param metadata - The metadata of the content item
 * @param slug - The slug of the content item
 * @returns The JSON-LD script tag
 */
export const ContentJsonLDScript = ({ metadata }: { metadata: ContentMetadata }) => {
  const pathname = usePathname();

  const data = generateContentJsonLD(metadata, pathname);
  return <JsonLDScript data={data} />;
};

const JsonLDScript = ({
  data,
  suppressHydrationWarning,
}: {
  data: RootJsonLD | ContentJsonLD;
  suppressHydrationWarning?: boolean;
}) => {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning={suppressHydrationWarning}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
