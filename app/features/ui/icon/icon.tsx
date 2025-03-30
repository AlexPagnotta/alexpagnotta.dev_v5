import { type SVGProps } from "react";

import { cn } from "~/features/style/utils";
import { type IconName } from "~/features/ui/icon/name";

export type IconProps = {
  name: IconName;
} & SVGProps<SVGSVGElement>;

/**
 * Define viewbox for the not square icons
 * Needed cause the viewbox is not "extracted" from the spritemap
 */
const iconViewboxMap = {
  awwwards: "0 0 156 48",
  fwa: "0 0 84 48",
  wild: "0 0 76 48",
} as Partial<Record<IconName, string>>;

export const Icon = ({ name, className, ...rest }: IconProps) => {
  return (
    <svg
      className={cn("inline-block text-current", className)}
      aria-label={name}
      viewBox={iconViewboxMap[name] || "0 0 1 1"}
      {...rest}
    >
      <use href={`/sprite.svg#${name}`} />
    </svg>
  );
};
