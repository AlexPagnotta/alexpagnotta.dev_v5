import type { MDXComponents } from "mdx/types";
import { type ComponentPropsWithoutRef } from "react";

const customComponents: MDXComponents = {
  // Just an example
  h1: (props: ComponentPropsWithoutRef<"h1">) => <h1 className="title-1" {...props} />,
};

declare global {
  type MDXProvidedComponents = typeof customComponents;
}

export function useMDXComponents(baseComponents: MDXComponents): MDXComponents {
  return {
    ...baseComponents,
    ...customComponents,
  };
}
