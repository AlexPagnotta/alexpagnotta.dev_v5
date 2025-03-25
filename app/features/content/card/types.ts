import { type BaseContentCardProps } from "~/features/content/card/card";

/**
 * Extended props for the ContentCard component, include additional props for the card used internally
 */
export type ContentCardProps = {
  /**
   * Whether the card is above the fold, if true, image loading will be prioritized, for example
   */
  aboveFold?: boolean;

  /**
   * Additional props for the card component
   */
  cardProps: BaseContentCardProps;
};
