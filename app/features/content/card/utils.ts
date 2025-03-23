import { ContentType, ContentTypeDisplayNameMap } from "~/features/content/constants";

import { type ContentMetadata } from "../metadata/metadata.server";

/**
 * Get the subtitle for a content card based on the metadata
 * @param metadata The metadata for the content
 * @returns The subtitle for the content card
 */
export const getCardSubtitleFromMetadata = (metadata: ContentMetadata) => {
  const appendixValue = (metadata.type === ContentType.WORK ? metadata.agencyName : metadata.category) ?? "";

  // Make first letter uppercase
  const formattedAppendix = appendixValue.charAt(0).toUpperCase() + appendixValue.slice(1);

  return `${ContentTypeDisplayNameMap[metadata.type]} - ${formattedAppendix}`;
};
