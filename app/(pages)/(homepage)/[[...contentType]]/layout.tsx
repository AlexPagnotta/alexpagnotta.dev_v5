import { RootJsonLDScript } from "~/features/content/metadata/json-ld";
import { Container } from "~/features/layout/container";
import { ThemeWrapper } from "~/features/layout/theme-wrapper";

export default function HomepageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeWrapper>
        <Container>{children}</Container>
      </ThemeWrapper>

      <RootJsonLDScript />
    </>
  );
}
