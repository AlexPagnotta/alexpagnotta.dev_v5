import { SiteConfig } from "~/features/config/config";

import { ContentType } from "./features/content/constants";
import { getAllContent } from "./features/content/utils.server";
export default async function sitemap() {
  // Root content type routes (/writings, /works, etc.)
  const rootContentTypeRoutes = Object.values(ContentType).map((contentType) => `/${contentType}`);

  // Content routes (/writings/my-writing, /works/my-work, etc.)
  const contentRoutes = (await getAllContent()).map((content) => content.slug);

  const routes = [
    "", // homepage
    ...rootContentTypeRoutes,
    ...contentRoutes,
  ].map((route) => ({
    url: `${SiteConfig.baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
