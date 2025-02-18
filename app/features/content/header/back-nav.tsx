import { Icon } from "~/features/ui/icon/icon";
import { Link } from "~/features/ui/link";

type ContentHeaderBackNavProps = {
  href?: string;
  children?: string;
};

export const ContentHeaderBackNav = ({ href = "/", children = "Back to Home" }: ContentHeaderBackNavProps) => {
  return (
    <Link href={href} underline accentColor="purple" className="flex items-center gap-8 body-2-semi-bold">
      <Icon name="arrow-back" className="size-20 shrink-0" />
      {children}
    </Link>
  );
};
