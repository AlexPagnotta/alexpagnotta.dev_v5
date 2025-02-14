import { Icon } from "~/features/ui/icon/icon";
import { Link } from "~/features/ui/link";

type BackNavProps = {
  href: string;
  children?: string;
};

export const BackNav = ({ href, children }: BackNavProps) => {
  return (
    <Link href={href} underline accentColor="purple" className="flex items-center gap-8 body-2-semi-bold">
      <Icon name="arrow-back" className="size-20 shrink-0" />
      {children}
    </Link>
  );
};
