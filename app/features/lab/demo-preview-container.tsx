import { cn } from "~/features/style/utils";
import { Button } from "~/features/ui/button";
import { Icon } from "~/features/ui/icon/icon-component";
import { BaseLink } from "~/features/ui/link";
import { type AccentColor } from "~/features/utils/colors/contants";

type LabDemoPreviewContainerProps = (
  | {
      href: string;
      accentColor: AccentColor;
    }
  | {
      href?: never;
      accentColor?: never;
    }
) & {
  children: React.ReactNode;
  className?: string;
};

/**
 * Container to showcase a lab demo preview, with optional link to full screen page
 */
export const LabDemoPreviewContainer = ({ children, className, ...rest }: LabDemoPreviewContainerProps) => {
  return (
    <div
      className={cn(
        "relative w-full aspect-[4/3] max-w-content-body-container-md-max-width",
        "mx-auto my-48",
        className
      )}
    >
      <div className="size-full overflow-hidden rounded-lg isolate">{children}</div>

      {rest.href && (
        <Button
          variant="accent"
          accentColor={rest.accentColor}
          icon
          size="lg"
          asChild
          className="absolute top-0 -translate-y-[40%] right-0 translate-x-[40%] rotate-12"
          aria-label="Open demo full screen"
        >
          <BaseLink href={rest.href}>
            <Icon name="full-screen" />
          </BaseLink>
        </Button>
      )}
    </div>
  );
};
