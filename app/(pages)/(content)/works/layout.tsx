import { Container } from "~/features/layout/container";
import { ContentThemeWrapper } from "~/features/themes/content-theme-wrapper";

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <ContentThemeWrapper>
      <Container>{children}</Container>
    </ContentThemeWrapper>
  );
}
