import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Need to include markdown and MDX files
  pageExtensions: ["mdx", "ts", "tsx"],

  eslint: {
    // The pre-commit hook takes care of linting
    ignoreDuringBuilds: true,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
