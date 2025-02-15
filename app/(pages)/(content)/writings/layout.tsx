import { ContentHeader } from "~/features/header/content/header";
import { Link } from "~/features/ui/link";

export default function ContentWritingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ContentHeader className="mb-48">
        <ContentHeader.Subtitle>12 November 2024</ContentHeader.Subtitle>
        <ContentHeader.Title>What I use? My setup 2025 🧑‍💻</ContentHeader.Title>
      </ContentHeader>
      <ContentHeader className="mb-48">
        <ContentHeader.TitleAppendixWrapper appendix="_x WILD">
          <ContentHeader.Title>
            A shiny new site for{" "}
            <Link href="https://google.it" className="title-1-medium" underline accentColor="red">
              Overheard
            </Link>
          </ContentHeader.Title>
        </ContentHeader.TitleAppendixWrapper>
      </ContentHeader>
      <main>{children}</main>
    </div>
  );
}
