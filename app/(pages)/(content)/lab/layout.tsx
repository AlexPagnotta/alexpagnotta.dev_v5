import { Container } from "~/features/layout/container";
import { ThemeWrapper } from "~/features/layout/theme-wrapper";

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeWrapper theme="lab">
      <Container>{children}</Container>
    </ThemeWrapper>
  );
}
