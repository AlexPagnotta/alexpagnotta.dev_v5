import { type ContentType } from "~/features/content/constants";
import { HeaderContacts } from "~/features/homepage/header/contacts";
import { HeaderNav } from "~/features/homepage/header/nav";
import { HeaderTitle } from "~/features/homepage/header/title";

export type HeaderProps = {
  selectedContentType?: ContentType;
};

export const Header = ({ selectedContentType }: HeaderProps) => {
  return (
    <header className="flex flex-col gap-24 max-w-[45rem] mx-auto">
      <HeaderTitle />
      <div className="flex flex-col gap-24 max-w-[32.5rem]">
        <HeaderNav selectedContentType={selectedContentType} />
        <HeaderContacts />
      </div>
    </header>
  );
};
