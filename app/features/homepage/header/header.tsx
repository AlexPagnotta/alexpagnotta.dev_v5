import { SiteConfig } from "~/features/config/config";
import { cn } from "~/features/style/utils";
import { Icon } from "~/features/ui/icon/icon";
import { type IconName } from "~/features/ui/icon/name";
import { Image } from "~/features/ui/image";
import { BaseLink, Link } from "~/features/ui/link";

import MeImage from "./assets/me.png";

const TechIcons = ["react", "next", "remix", "tailwind", "motion"] satisfies IconName[];

export const Header = () => {
  return (
    <header className="flex flex-col gap-24 max-w-[45rem] mx-auto">
      <h1 className="title-1-light text-right lg:text-left">
        <span className="whitespace-nowrap">
          Hi! I&apos;m Alex Pagnotta{" "}
          <span className="relative w-32 h-20 inline-flex justify-center align-baseline items-center">
            <Image
              src={MeImage}
              alt="Me"
              quality={80}
              sizes="32px"
              draggable={false}
              className="absolute inset-x-0 animate-homepage-header-icon-rotation"
            />
          </span>
        </span>
        <span className="whitespace-nowrap block">
          <span className="relative w-48 h-20 pb-4 inline-flex justify-center align-baseline items-center">
            {TechIcons.map((icon, i) => {
              const isEven = i % 2 === 0;

              return (
                <Icon
                  key={icon}
                  name={icon}
                  className={cn(
                    "absolute inset-x-0 invisible animate-homepage-header-icon-slideshow",
                    isEven ? "rotate-[8deg]" : "rotate-[-8deg]"
                  )}
                  style={{ animationDelay: `${i * 3}s` }}
                />
              );
            })}
          </span>
          Software Developer
        </span>
        <span className="whitespace-nowrap block">
          Building stuff at
          <BaseLink
            href="https://wild.as"
            className={cn(
              "relative w-[8rem] h-20 pb-4 inline-flex justify-center align-baseline items-center",
              "hover:rotate-[8deg]"
            )}
          >
            <Icon name="wild" className="absolute inset-x-0" />
          </BaseLink>
        </span>
      </h1>

      <p className="body-2 whitespace-pre-wrap max-w-[32.5rem]">
        This website is my digital place, it functions as a{" "}
        <Link href="/works" highlight highlightOrientation="left" accentColor="blue">
          portfolio
        </Link>
        , a directory for my{" "}
        <Link href="/lab" highlight accentColor="grey" highlightOrientation="center">
          experiments
        </Link>
        , and also a{" "}
        <Link href="/writings" highlight highlightOrientation="right" accentColor="green">
          blog
        </Link>{" "}
        for my thoughts.{"\n"}
        {"\n"}
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
        If you want to know more about my work, check my{" "}
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
    </header>
  );
};
