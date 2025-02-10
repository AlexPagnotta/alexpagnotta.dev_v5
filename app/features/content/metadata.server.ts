import * as v from "valibot";

import { ContentType } from "~/features/content/constants";

/**
 * Base metadata schema with common properties for all content types
 */
const BaseContentMetadataSchema = v.object({
  title: v.string(),
  previewTitle: v.string(),
  date: v.string(),
});

/**
 * Metadata schema for writing content
 */
const WritingContentMetadataSchema = v.object({
  ...BaseContentMetadataSchema.entries,
  type: v.literal(ContentType.WRITING),
});

/**
 * Metadata schema for work content
 */
const WorkContentMetadataSchema = v.object({
  ...BaseContentMetadataSchema.entries,
  type: v.literal(ContentType.WORK),
  url: v.optional(v.string()),
  agency: v.optional(v.string()),
  agencyUrl: v.optional(v.string()),
  awards: v.optional(v.array(v.string())),
});

/**
 * Metadata schema for lab content
 */
const LabContentMetadataSchema = v.object({
  ...BaseContentMetadataSchema.entries,
  type: v.literal(ContentType.LAB),
});

/**
 * Metadata schema for all content types
 */
export const ContentMetadataSchema = v.variant("type", [
  WritingContentMetadataSchema,
  WorkContentMetadataSchema,
  LabContentMetadataSchema,
]);

export type WritingContentMetadata = v.InferOutput<typeof WritingContentMetadataSchema>;
export type WorkContentMetadata = v.InferOutput<typeof WorkContentMetadataSchema>;
export type LabContentMetadata = v.InferOutput<typeof LabContentMetadataSchema>;

export type ContentMetadata = v.InferOutput<typeof ContentMetadataSchema>;
