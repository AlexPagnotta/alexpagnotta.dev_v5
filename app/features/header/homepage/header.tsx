import { type ContentType } from "~/features/content/constants";
import { HomepageHeaderContacts } from "~/features/header/homepage/contacts";
import { HomepageHeaderBody } from "~/features/header/homepage/nav";
import { HomepageHeaderTitle } from "~/features/header/homepage/title";

export type HomepageHeaderProps = {
  selectedContentType?: ContentType;
};

export const HomepageHeader = ({ selectedContentType }: HomepageHeaderProps) => {
  return (
    <header className="flex flex-col gap-24 max-w-[45rem] mx-auto">
      <HomepageHeaderTitle />
      <div className="flex flex-col gap-24 max-w-[32.5rem]">
        <HomepageHeaderBody selectedContentType={selectedContentType} />
        <HomepageHeaderContacts />
      </div>
    </header>
  );
};
