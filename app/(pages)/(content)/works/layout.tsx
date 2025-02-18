import { Container } from "~/features/layout/container";
import { ThemeWrapper } from "~/features/layout/theme-wrapper";

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeWrapper>
      <Container>{children}</Container>
    </ThemeWrapper>
  );
}
