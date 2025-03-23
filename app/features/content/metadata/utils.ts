import { type Metadata } from "next";
import { type Article, type WithContext, type Blog } from "schema-dts";

import { SiteConfig } from "~/features/config/config";
import { type ContentMetadata } from "~/features/content/metadata/metadata.server";

export type RootJsonLD = WithContext<Blog>;
export type ContentJsonLD = WithContext<Article>;

/**
 * Generate page metadata for a content item based on the content metadata
 * @param contentMetadata - The content metadata to generate the page metadata for
 * @returns The page metadata for the content item
 */
export const generatePageMetadata = (contentMetadata: ContentMetadata): Metadata => {
  return {
    title: contentMetadata.title,
    description: contentMetadata.description,
    alternates: {
      canonical: "./", // ./ is rendered as the current page url
    },
    openGraph: {
      type: "article",
      siteName: SiteConfig.title,
      url: "./",
      title: contentMetadata.title,
      description: contentMetadata.description,
      images: [{ url: "/share-image.png" }],
    },
  };
};

/**
 * Generate JSON-LD metadata for the root page
 * @returns The JSON-LD metadata for the root page
 */
export const generateRootJsonLD = (): RootJsonLD => {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    description: SiteConfig.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": SiteConfig.baseUrl,
    },
    headline: SiteConfig.title,
    image: [`${SiteConfig.baseUrl}/share-image.png`],
    author: {
      "@type": "Person",
      name: SiteConfig.name,
    },
  };
};

/**
 * Generate JSON-LD metadata for a content item based on the content metadata
 * @param contentMetadata - The content metadata to generate the JSON-LD metadata for
 * @param contentSlug - The slug of the content item, including the initial slash
 * @returns The JSON-LD metadata for the content item
 */
export const generateContentJsonLD = (contentMetadata: ContentMetadata, contentSlug: string): ContentJsonLD => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    dateModified: new Date(contentMetadata.date).toISOString(),
    datePublished: new Date(contentMetadata.date).toISOString(),
    description: contentMetadata.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SiteConfig.baseUrl}${contentSlug}`,
    },
    headline: contentMetadata.title,
    image: [`${SiteConfig.baseUrl}/share-image.png`],
    author: {
      "@type": "Person",
      name: SiteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      logo: "/android-chrome-192x192.png",
      name: SiteConfig.name,
    },
  };
};
