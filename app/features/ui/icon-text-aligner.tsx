import { type ComponentPropsWithoutRef } from "react";

import { cn } from "~/features/style/utils";
import { Icon, type IconProps } from "~/features/ui/icon/icon";
import { Image, type ImageProps } from "~/features/ui/image";

type CompoundIconTextAligner = typeof IconTextAligner & {
  Icon: typeof IconTextAlignerIcon;
  Image: typeof IconTextAlignerImage;
};

type IconTextAlignerProps = ComponentPropsWithoutRef<"span">;

const IconTextAligner = ({ className, ...rest }: IconTextAlignerProps) => {
  return (
    <span
      className={cn("relative h-[0.8em] inline-flex justify-center align-baseline items-center", className)}
      {...rest}
    />
  );
};

type IconTextAlignerIconProps = IconProps;

const IconTextAlignerIcon = ({ name, className, ...rest }: IconTextAlignerIconProps) => {
  return <Icon name={name} className={cn("absolute inset-x-0", className)} {...rest} />;
};

type IconTextAlignerImageProps = ImageProps;

const IconTextAlignerImage = ({ src, alt, className, ...rest }: IconTextAlignerImageProps) => {
  return <Image src={src} alt={alt} className={cn("absolute inset-x-0", className)} {...rest} />;
};

const CompoundIconTextAligner = IconTextAligner as CompoundIconTextAligner;

CompoundIconTextAligner.Icon = IconTextAlignerIcon;
CompoundIconTextAligner.Image = IconTextAlignerImage;
export { CompoundIconTextAligner as IconTextAligner };
