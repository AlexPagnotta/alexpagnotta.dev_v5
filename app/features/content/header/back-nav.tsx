import { cn } from "~/features/style/utils";
import { Icon } from "~/features/ui/icon/icon";
import { Link } from "~/features/ui/link/link";

type ContentHeaderBackNavProps = {
  href?: string;
  children?: string;
  className?: string;
};

export const ContentHeaderBackNav = ({
  href = "/",
  children = "Back to Home",
  className,
}: ContentHeaderBackNavProps) => {
  return (
    <Link
      href={href}
      underline
      accentColor="purple"
      className={cn("flex items-center gap-8 body-2-semi-bold", className)}
    >
      <Icon name="arrow-back" className="size-20 shrink-0" />
      {children}
    </Link>
  );
};
