import { type ContentType } from "~/features/content/constants";
import { HomepageHeaderContacts } from "~/features/homepage/header/contacts";
import { HomepageHeaderBody } from "~/features/homepage/header/nav";
import { HomepageHeaderTitle } from "~/features/homepage/header/title";
import { cn } from "~/features/style/utils";

export type HomepageHeaderProps = {
  selectedContentType?: ContentType;
  className?: string;
};

export const HomepageHeader = ({ selectedContentType, className }: HomepageHeaderProps) => {
  return (
    <header className={cn("flex flex-col gap-24 max-w-[45rem] mx-auto", className)}>
      <HomepageHeaderTitle />
      <div className="flex flex-col gap-24 max-w-[32.5rem]">
        <HomepageHeaderBody selectedContentType={selectedContentType} />
        <HomepageHeaderContacts />
      </div>
    </header>
  );
};
