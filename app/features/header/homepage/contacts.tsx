import { SiteConfig } from "~/features/config/config";
import { Icon } from "~/features/ui/icon/icon";
import { Link } from "~/features/ui/link";

export const HomepageHeaderContacts = () => {
  return (
    <p className="body-2 whitespace-pre-wrap">
      If you&apos;d like to reach out, feel free to send me an{" "}
      <Link href={`mailto:${SiteConfig.email}`} underline accentColor="blue">
        email
      </Link>
      , or a message on{" "}
      <Link
        href={SiteConfig.linkedin}
        className="relative w-24 h-12 inline-flex justify-center align-baseline items-center"
      >
        <Icon name="linkedin" className="absolute inset-x-0 rotate-[-8deg] hover:rotate-[8deg]" />
      </Link>
      .{"\n"}
      If you want to know more about my work, have a look at my{" "}
      <Link
        href={SiteConfig.github}
        className="relative w-24 h-12 inline-flex justify-center align-baseline items-center"
      >
        <Icon name="github" className="absolute inset-x-0 rotate-[8deg] hover:rotate-[-8deg]" />
      </Link>{" "}
      or view my{" "}
      <Link href={SiteConfig.cv} underline accentColor="pink">
        CV
      </Link>
      .
    </p>
  );
};
