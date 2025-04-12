import { cn } from "~/features/style/utils";
import { Icon } from "~/features/ui/icon/icon-component";
import { Link, type LinkProps } from "~/features/ui/link/link";

type ContentHeaderBackNavProps = Pick<LinkProps, "href" | "children" | "className"> & {
  accentColor: NonNullable<LinkProps["accentColor"]>;
};

export const ContentHeaderBackNav = ({
  href = "/",
  accentColor,
  children = "Back to Home",
  className,
}: ContentHeaderBackNavProps) => {
  return (
    <Link
      href={href}
      underline
      accentColor={accentColor}
      className={cn("flex items-center gap-8 body-2-semi-bold", className)}
    >
      <Icon name="arrow-back" className="size-20 shrink-0" />
      {children}
    </Link>
  );
};
