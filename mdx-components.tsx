import type { MDXComponents } from "mdx/types";

import { MdxComponentsMapper } from "~/features/markdown/components-mapper";

// Define custom components to be rendered for each tag generated by MDX conversion to html
const customComponents = MdxComponentsMapper;

declare global {
  type MDXProvidedComponents = typeof customComponents;
}

export function useMDXComponents(baseComponents: MDXComponents): MDXComponents {
  return {
    ...baseComponents,
    ...customComponents,
  };
}
