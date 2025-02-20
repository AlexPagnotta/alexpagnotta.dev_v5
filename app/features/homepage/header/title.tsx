import MeImage from "~/features/assets/icons/me.png";
import { cn } from "~/features/style/utils";
import { Icon } from "~/features/ui/icon/icon";
import { type IconName } from "~/features/ui/icon/name";
import { Image } from "~/features/ui/image";
import { BaseLink } from "~/features/ui/link/link";

const TechIcons = ["react", "next", "remix", "tailwind", "motion"] satisfies IconName[];

export const HomepageHeaderTitle = () => {
  return (
    <h1 className="title-1-light text-right lg:text-left">
      <span className="whitespace-nowrap">
        Hi! I&apos;m Alex Pagnotta{" "}
        <span className="relative w-32 h-20 inline-flex justify-center align-baseline items-center">
          <Image
            src={MeImage}
            alt="Me"
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
  );
};
