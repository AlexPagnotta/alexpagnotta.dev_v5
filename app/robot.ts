import { type MetadataRoute } from "next";

import { SiteConfig } from "~/features/config/config";

// Array of known AI bot user agents
const AI_BOTS = [
  "AI2Bot",
  "Ai2Bot-Dolma",
  "Amazonbot",
  "anthropic-ai",
  "Applebot",
  "Applebot-Extended",
  "Brightbot 1.0",
  "Bytespider",
  "CCBot",
  "ChatGPT-User",
  "Claude-Web",
  "ClaudeBot",
  "cohere-ai",
  "cohere-training-data-crawler",
  "Crawlspace",
  "Diffbot",
  "DuckAssistBot",
  "FacebookBot",
  "FriendlyCrawler",
  "Google-Extended",
  "GoogleOther",
  "GoogleOther-Image",
  "GoogleOther-Video",
  "GPTBot",
  "iaskspider/2.0",
  "ICC-Crawler",
  "ImagesiftBot",
  "img2dataset",
  "ISSCyberRiskCrawler",
  "Kangaroo Bot",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "OAI-SearchBot",
  "omgili",
  "omgilibot",
  "PanguBot",
  "PerplexityBot",
  "PetalBot",
  "Scrapy",
  "SemrushBot-OCOB",
  "SemrushBot-SWA",
  "Sidetrade indexer bot",
  "Timpibot",
  "VelenPublicWebCrawler",
  "Webzio-Extended",
  "YouBot",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Disallow all AI bots
      ...AI_BOTS.map((bot) => ({
        userAgent: bot,
        disallow: ["/"],
      })),
      {
        userAgent: "*",
      },
    ],
    sitemap: `${SiteConfig.baseUrl}/sitemap.xml`,
    host: SiteConfig.baseUrl,
  };
}
