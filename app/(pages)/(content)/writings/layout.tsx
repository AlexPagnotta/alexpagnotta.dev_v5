import { Container } from "~/features/layout/container";
import { ThemeWrapper } from "~/features/layout/theme-wrapper";

export default function WritingLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeWrapper>
      <Container>{children}</Container>
    </ThemeWrapper>
  );
}
