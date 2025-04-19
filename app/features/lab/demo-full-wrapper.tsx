import MeImage from "~/features/assets/icons/me-memoji.png";
import { cn } from "~/features/style/utils";
import { ContentTheme } from "~/features/themes/constants";
import { ContentThemeWrapper } from "~/features/themes/content-theme-wrapper";
import { Button } from "~/features/ui/button";
import { Image } from "~/features/ui/image";
import { BaseLink } from "~/features/ui/link";

type LabDemoFullWrapperProps = {
  backHref: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Main wrapper for a lab demo page, mainly used to add back button overlay
 */
export const LabDemoFullWrapper = ({ backHref, children, className }: LabDemoFullWrapperProps) => {
  if (!backHref) return children;

  return (
    <ContentThemeWrapper theme={ContentTheme.LAB}>
      {children}
      <div className={cn("fixed top-0 inset-x-0 pt-32 px-32", className)}>
        <Button icon size="lg" asChild aria-label="Back to site">
          <BaseLink href={backHref}>
            <Image src={MeImage} alt="Me" sizes="24px" />
          </BaseLink>
        </Button>
      </div>
    </ContentThemeWrapper>
  );
};
