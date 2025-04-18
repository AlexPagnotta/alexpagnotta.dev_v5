import type { MDXComponents as MDXComponents } from "mdx/types";
import { type ComponentPropsWithoutRef } from "react";

import { Link } from "~/features/ui/link";

/**
 * Map of custom components to be rendered for each tag generated by MDX conversion to html
 */
export const MdxComponentsMapper: MDXComponents = {
  // Just an example
  h1: (props: ComponentPropsWithoutRef<"h1">) => <h2 className="title-2 text-right mt-48 mb-32" {...props} />,
  // Other titles (h2, h3, etc.) are not used right now
  p: (props: ComponentPropsWithoutRef<"p">) => <p className="body-2" {...props} />,
  ol: (props: ComponentPropsWithoutRef<"ol">) => <ol className="list-decimal pl-16 space-y-8" {...props} />,
  ul: (props: ComponentPropsWithoutRef<"ul">) => <ul className="list-disc pl-16 space-y-8" {...props} />,
  li: (props: ComponentPropsWithoutRef<"li">) => <li className="pl-4" {...props} />,
  strong: (props: ComponentPropsWithoutRef<"strong">) => <strong className="font-semibold" {...props} />,
  a: (props: ComponentPropsWithoutRef<"a">) => <Link underline accentColor="random" {...props} />,
  wrapper: (props: ComponentPropsWithoutRef<"div">) => (
    <main className="mt-64" {...props}>
      <article
        data-body-container
        className="max-w-content-body-container-sm-max-width ml-auto space-y-16 body-2 text-justify"
      >
        {props.children}
      </article>
    </main>
  ),
};
