import MeImage from "~/features/assets/icons/me.png";
import { cn } from "~/features/style/utils";
import { Icon } from "~/features/ui/icon/icon-component";
import { type IconName } from "~/features/ui/icon/name";
import { IconTextAligner } from "~/features/ui/icon-text-aligner";
import { BaseLink } from "~/features/ui/link/link";

const TechIcons = ["react", "next", "remix", "tailwind", "motion"] satisfies IconName[];

export const HomepageHeaderTitle = () => {
  return (
    <h1 className="title-1-light text-right lg:text-left">
      <span className="whitespace-nowrap">
        Hi! I&apos;m Alex Pagnotta{" "}
        <IconTextAligner className="w-32">
          <IconTextAligner.Image
            src={MeImage}
            alt="Me"
            sizes="32px"
            draggable={false}
            className="animate-homepage-header-icon-rotation"
          />
        </IconTextAligner>
      </span>
      <span className="whitespace-nowrap block">
        <IconTextAligner className="w-48 -ml-[0.6rem]">
          {TechIcons.map((icon, i) => {
            const isEven = i % 2 === 0;

            return (
              <IconTextAligner.Icon
                key={icon}
                name={icon}
                className={cn(
                  "invisible animate-homepage-header-icon-slideshow",
                  isEven ? "rotate-[8deg]" : "rotate-[-8deg]"
                )}
                style={{ animationDelay: `${i * 3}s` }}
              />
            );
          })}
        </IconTextAligner>
        Software Developer
      </span>
      <span className="whitespace-nowrap block">
        Building stuff at
        <BaseLink href="https://wild.as">
          <IconTextAligner className="w-[8rem]">
            <IconTextAligner.Icon name="wild" className="hover:rotate-[8deg]" />
          </IconTextAligner>
        </BaseLink>
      </span>
    </h1>
  );
};
