"use client";

import {
  autoUpdate,
  FloatingPortal,
  flip,
  offset,
  shift,
  size,
  useFloating,
  useInteractions,
  useClick,
  useDismiss,
  useRole,
  type UseInteractionsReturn,
} from "@floating-ui/react";
import { cva, type VariantProps } from "cva";
import { type ComponentPropsWithoutRef, createContext, useContext, useEffect, useState } from "react";

import { AUTO_CLOSE_TOOLTIP_DELAY } from "~/features/markdown/floating-content/constants";
import {
  calculateFloatingContentOffset,
  calculateFloatingContentSize,
} from "~/features/markdown/floating-content/utils";
import { cn } from "~/features/style/utils";
import { linkStyles } from "~/features/ui/link";

enum FloatingContentMode {
  TOOLTIP = "tooltip",
  ALWAYS_VISIBLE = "always-visible",
}

type FloatingContentContextState =
  | (ReturnType<typeof useFloating> & {
      mode: FloatingContentMode | undefined;
      isContentOpen: boolean;
      getReferenceProps: UseInteractionsReturn["getReferenceProps"];
      getFloatingProps: UseInteractionsReturn["getFloatingProps"];
    } & Pick<MarkdownFloatingContentProps, "accentColor">)
  | null;
const FloatingContentContext = createContext<FloatingContentContextState>(null);

const useFloatingContent = () => {
  const context = useContext(FloatingContentContext);
  if (!context) {
    throw new Error("useFloatingContent must be used within a MarkdownFloatingContent component");
  }
  return context;
};

type MarkdownFloatingContentProps = {
  children: React.ReactNode;
  accentColor: NonNullable<VariantProps<typeof linkStyles>["highlightAccentColor"]>;
};

const MarkdownFloatingContent = ({ accentColor, children }: MarkdownFloatingContentProps) => {
  // Whether the floating content is in tooltip mode or always visible mode
  // - tooltip mode: the floating content is hidden, only shown on click, and close after 3 seconds,
  //   enabled when there is not enough space to show it in the left side of the screen
  // - always visible mode: the floating content is always visible on the left side of the screen
  const [mode, setMode] = useState<FloatingContentMode | undefined>(undefined);

  // Whether the floating content is open, always open on always visible mode
  const [_isContentOpen, setIsContentOpen] = useState(false);
  const isContentOpen = mode === FloatingContentMode.TOOLTIP ? _isContentOpen : true;

  // Auto-close timer for tooltip mode
  useEffect(() => {
    if (mode === FloatingContentMode.TOOLTIP && _isContentOpen) {
      const timer = setTimeout(() => {
        setIsContentOpen(false);
      }, AUTO_CLOSE_TOOLTIP_DELAY);

      return () => clearTimeout(timer);
    }
  }, [mode, _isContentOpen]);

  const floating = useFloating({
    placement: mode === FloatingContentMode.TOOLTIP ? "top" : "left",
    middleware: [
      offset((opts) => {
        const contentLeftOffset = opts.rects.reference.x;
        const contentWidth = opts.rects.floating.width;
        return {
          mainAxis: calculateFloatingContentOffset(contentLeftOffset, contentWidth) || 0,
        };
      }),
      size({
        apply(args) {
          const contentElement = args.elements.floating;
          const size = calculateFloatingContentSize();

          // If the size is "auto", the floating content is in tooltip mode
          // as there is not enough space to show it in the left side of the screen
          contentElement.style.width = size;
          setMode(size === "auto" ? FloatingContentMode.TOOLTIP : FloatingContentMode.ALWAYS_VISIBLE);
        },
      }),
      flip(),
      shift({
        mainAxis: mode === FloatingContentMode.TOOLTIP ? true : false,
        padding: 32,
      }),
    ],
    strategy: "absolute",
    whileElementsMounted: autoUpdate,
    open: isContentOpen,
    onOpenChange: setIsContentOpen,
  });

  // Interactions are enabled only on tooltip mode
  const interactionsEnabled = mode === FloatingContentMode.TOOLTIP;
  const click = useClick(floating.context, {
    enabled: interactionsEnabled,
  });
  const dismiss = useDismiss(floating.context, {
    enabled: interactionsEnabled,
  });
  const role = useRole(floating.context, {
    enabled: interactionsEnabled,
    role: "tooltip",
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

  const contextValue = {
    ...floating,
    mode,
    isContentOpen,
    getReferenceProps,
    getFloatingProps,
    accentColor,
  };

  return <FloatingContentContext.Provider value={contextValue}>{children}</FloatingContentContext.Provider>;
};

type MarkdownFloatingContentTriggerProps = Omit<
  VariantProps<typeof linkStyles>,
  "underline" | "underlineAccentColor" | "highlight" | "highlightAccentColor"
> & {
  children: React.ReactNode;
  className?: string;
};

const MarkdownFloatingContentTrigger = ({
  highlightOrientation = "center",
  className,
  ...rest
}: MarkdownFloatingContentTriggerProps) => {
  const { refs, mode, getReferenceProps, isContentOpen, accentColor } = useFloatingContent();

  const styles = cn(
    linkStyles({ highlight: true, highlightAccentColor: accentColor, highlightOrientation }),
    mode !== FloatingContentMode.TOOLTIP && "pointer-events-none",
    className
  );

  const baseProps = {
    ref: refs.setReference,
    className: styles,
    "aria-expanded": mode === FloatingContentMode.TOOLTIP ? isContentOpen : undefined,
    ...rest,
  };

  if (mode === FloatingContentMode.TOOLTIP) {
    return <button type="button" {...baseProps} {...getReferenceProps()} />;
  }
  return <span {...baseProps} />;
};

type MarkdownFloatingContentContentProps = ComponentPropsWithoutRef<"div">;

const wavyBorderStyles = cva({
  base: ["wavy-border flex-1 mx-16-px"],
  variants: {
    color: {
      "light-blue": "text-theme-floating-content-wavy-line-light-blue",
      blue: "text-theme-floating-content-wavy-line-blue",
      green: "text-theme-floating-content-wavy-line-green",
      red: "text-theme-floating-content-wavy-line-red",
      purple: "text-theme-floating-content-wavy-line-purple",
      pink: "text-theme-floating-content-wavy-line-pink",
      yellow: "text-theme-floating-content-wavy-line-yellow",
    },
  },
});

const MarkdownFloatingContentContent = ({ children, className, ...rest }: MarkdownFloatingContentContentProps) => {
  const { refs, floatingStyles, getFloatingProps, isContentOpen, mode, accentColor } = useFloatingContent();

  // TODO: Add animation on show/hide or atleast on initial mount
  // to hide the client only render
  return (
    <FloatingPortal>
      <div
        ref={refs.setFloating}
        style={floatingStyles}
        className={cn("flex items-center", !isContentOpen && "invisible", className)}
        {...getFloatingProps(rest)}
      >
        <div className="shrink-0">{children}</div>
        {mode === FloatingContentMode.ALWAYS_VISIBLE && <div className={wavyBorderStyles({ color: accentColor })} />}
      </div>
    </FloatingPortal>
  );
};

// Compound pattern not used, see https://github.com/vercel/next.js/issues/44030
export { MarkdownFloatingContent, MarkdownFloatingContentTrigger, MarkdownFloatingContentContent };
