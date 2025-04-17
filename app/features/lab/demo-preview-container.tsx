import { cn } from "~/features/style/utils";
import { Button } from "~/features/ui/button";
import { Icon } from "~/features/ui/icon/icon-component";
import { BaseLink } from "~/features/ui/link/link";

type LabDemoPreviewContainerProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
};

export const LabDemoPreviewContainer = ({ href, children, className }: LabDemoPreviewContainerProps) => {
  return (
    <div
      className={cn(
        "relative w-full aspect-[4/3] max-w-content-body-container-md-max-width",
        "mx-auto my-48",
        className
      )}
    >
      {href && (
        <Button
          icon
          size="lg"
          asChild
          className="absolute top-0 -translate-y-[40%] right-0 translate-x-[40%] rotate-12"
          aria-label="Open demo full screen"
        >
          <BaseLink href={href}>
            <Icon name="full-screen" />
          </BaseLink>
        </Button>
      )}
      <div className="size-full overflow-hidden rounded-lg">{children}</div>
    </div>
  );
};
