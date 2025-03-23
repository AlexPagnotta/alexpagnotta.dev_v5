import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Need to include markdown and MDX files
  pageExtensions: ["mdx", "ts", "tsx"],

  eslint: {
    // The pre-commit hook takes care of linting
    ignoreDuringBuilds: true,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

const ContentSecurityPolicy = `
    default-src 'self' vercel.live;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline' vercel.live;
    img-src * blob: data:;
    media-src 'self';
    connect-src *;
    font-src 'self' data: vercel.live;
    frame-src 'self' vercel.live;
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const withMDX = createMDX({});

export default withMDX(nextConfig);
