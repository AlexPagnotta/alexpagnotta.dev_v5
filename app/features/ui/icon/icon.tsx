import { type SVGProps } from "react";

import { cn } from "~/features/style/utils";
import { type IconName } from "~/features/ui/icon/name";

type Props = {
  name: IconName;
} & SVGProps<SVGSVGElement>;

export const Icon = ({ name, className, ...rest }: Props) => {
  return (
    <svg className={cn("inline-block text-current", className)} aria-label={name} {...rest}>
      <use href={`/sprite.svg#${name}`} />
    </svg>
  );
};
