import { ContentType } from "~/features/content/constants";
import { type HomepageHeaderProps } from "~/features/header/homepage/header";
import { Link } from "~/features/ui/link";

type HomepageHeaderBodyProps = Pick<HomepageHeaderProps, "selectedContentType">;

type ExtendedContentType = ContentType | "base";

export const HomepageHeaderBody = ({ selectedContentType }: HomepageHeaderBodyProps) => {
  return <nav className="body-2 whitespace-pre-wrap">{NavContentTypeMap[selectedContentType || "base"]}</nav>;
};

const NavContentTypeMap: Record<ExtendedContentType, React.ReactNode> = {
  base: (
    <p>
      Welcome to my digital place! This website serves as a{" "}
      <HomepageHeaderNavLink contentType={ContentType.WORK} label="portfolio" />
      , a directory for my <HomepageHeaderNavLink contentType={ContentType.LAB} label="experiments" />, and also a{" "}
      <HomepageHeaderNavLink contentType={ContentType.WRITING} label="blog" /> for my thoughts.
    </p>
  ),
  [ContentType.WRITING]: (
    <p className="whitespace-pre-wrap">
      You&apos;ve landed on my blog, I write stuff here from time to time.{"\n"}
      Not interested? No problem! Check my <HomepageHeaderNavLink label="other content" />
    </p>
  ),
  [ContentType.WORK]: (
    <p className="whitespace-pre-wrap">
      Have a look at the some projects I&apos;ve worked on over the last years.{"\n"}Or go back to the{" "}
      <HomepageHeaderNavLink label="homepage" /> to check my other content.
    </p>
  ),
  [ContentType.LAB]: (
    <p>
      This is my lab, where I try out new ideas, and experiment with new tech.{"\n"}
      Too futuristic for you? Check my <HomepageHeaderNavLink label="other (boring) content" />
    </p>
  ),
};

function HomepageHeaderNavLink({ label, contentType = "base" }: { label: string; contentType?: ExtendedContentType }) {
  const contentTypeConfigMap = {
    base: {
      highlightOrientation: "left",
      accentColor: "purple",
    },
    [ContentType.WORK]: {
      highlightOrientation: "left",
      accentColor: "blue",
    },
    [ContentType.LAB]: {
      highlightOrientation: "center",
      accentColor: "pink",
    },
    [ContentType.WRITING]: {
      highlightOrientation: "right",
      accentColor: "green",
    },
  } as const;

  const { highlightOrientation, accentColor } = contentTypeConfigMap[contentType];

  return (
    <Link
      href={`/${contentType === "base" ? "" : contentType}`}
      highlight
      highlightOrientation={highlightOrientation}
      accentColor={accentColor}
    >
      {label}
    </Link>
  );
}
