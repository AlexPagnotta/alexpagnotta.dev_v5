import { ContentBackground } from "~/features/content/background/background";
import { Container } from "~/features/layout/container";
import { ThemeWrapper } from "~/features/layout/theme-wrapper";
import { cn } from "~/features/style/utils";

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeWrapper theme="lab">
      <ContentBackground>
        <div
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "w-[150%] h-[200%] rotate-6",
            "bg-[linear-gradient(to_right,var(--color-theme-foreground-muted)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-theme-foreground-muted)_1px,transparent_1px)]",
            "bg-[length:50px_50px] md:bg-[length:60px_60px] bg-repeat"
          )}
        />
      </ContentBackground>
      <Container className="[&_article]:text-center [&_article]:mx-auto">{children}</Container>
    </ThemeWrapper>
  );
}
