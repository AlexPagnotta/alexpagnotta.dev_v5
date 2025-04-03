import { SiteConfig } from "~/features/config/config";
import { IconTextAligner } from "~/features/ui/icon-text-aligner";
import { BaseLink, Link } from "~/features/ui/link/link";

export const HomepageHeaderContacts = () => {
  return (
    <p className="body-2 whitespace-pre-wrap">
      If you want to know more about me or my work, you can read this{" "}
      <Link href={"/writings/about-me"} underline accentColor="pink">
        small post
      </Link>{" "}
      I wrote, have a look at my{" "}
      <BaseLink href={SiteConfig.github}>
        <IconTextAligner className="w-24">
          <IconTextAligner.Icon name="github" className=" rotate-[8deg] hover:rotate-[-8deg] text-theme-icon-github" />
        </IconTextAligner>
      </BaseLink>{" "}
      or view my{" "}
      <Link href={SiteConfig.cv} underline accentColor="pink">
        CV
      </Link>
      .{"\n"}
      {"\n"}
      If you&apos;d like to reach out, feel free to send me an{" "}
      <Link href={`mailto:${SiteConfig.email}`} underline accentColor="blue">
        email
      </Link>
      , or a message on{" "}
      <BaseLink href={SiteConfig.linkedin}>
        <IconTextAligner className="w-24">
          <IconTextAligner.Icon name="linkedin" className="rotate-[-8deg] hover:rotate-[8deg]" />
        </IconTextAligner>
      </BaseLink>
      .
    </p>
  );
};
