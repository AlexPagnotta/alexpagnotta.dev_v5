"use client";

import { usePathname } from "next/navigation";
import { useSelectedLayoutSegments } from "next/navigation";

import { ContentBackground } from "~/features/content/background/background";
import { LabDemoFullWrapper } from "~/features/lab/demo-full-wrapper";
import { LabDemoProvider } from "~/features/lab/use-demo";
import { Container } from "~/features/layout/container";
import { cn } from "~/features/style/utils";
import { ContentTheme } from "~/features/themes/constants";
import { ContentThemeWrapper } from "~/features/themes/content-theme-wrapper";

export default function LabLayout({ children }: { children: React.ReactNode }) {
  const segments = useSelectedLayoutSegments();

  // Avoid rendering the base article layout for the full page demo
  const isFullPageDemo = segments[segments.length - 1] === "demo";

  if (isFullPageDemo) return <LabDemoLayout>{children}</LabDemoLayout>;

  return <LabBaseLayout>{children}</LabBaseLayout>;
}

/**
 * Base layout used to render the lab content as article.
 */
const LabBaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LabDemoProvider type="preview">
      <ContentThemeWrapper theme={ContentTheme.LAB}>
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
      </ContentThemeWrapper>
    </LabDemoProvider>
  );
};

/**
 * This layout is used to render the full screen demo page for the lab content.
 */
const LabDemoLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Remove the /demo from the pathname (if last segment), to get the back href
  const backHref = pathname.replace(/\/demo$/, "");

  return (
    <LabDemoProvider type="full-page">
      <LabDemoFullWrapper backHref={backHref}>{children}</LabDemoFullWrapper>
    </LabDemoProvider>
  );
};
