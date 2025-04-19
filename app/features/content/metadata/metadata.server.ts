import * as v from "valibot";

import { ContentType } from "~/features/content/constants";
import { IconNames } from "~/features/ui/icon/constants";
import { AccentColors } from "~/features/utils/colors/contants";

/**
 * Base metadata schema with common properties for all content types
 */
const BaseContentMetadataSchema = v.object({
  title: v.string(),
  previewTitle: v.string(),
  description: v.string(),
  date: v.string(),
  accentColor: v.picklist(AccentColors),
  unpublished: v.optional(v.boolean()),
});

/**
 * Metadata schema for writing content
 */
const WritingContentMetadataSchema = v.object({
  ...BaseContentMetadataSchema.entries,
  type: v.literal(ContentType.WRITING),
  category: v.picklist(["Personal", "Dev"]),
});

/**
 * Metadata schema for work content
 */
const WorkContentMetadataSchema = v.object({
  ...BaseContentMetadataSchema.entries,
  type: v.literal(ContentType.WORK),
  workName: v.string(),
  workUrl: v.optional(v.string()),
  agencyName: v.optional(v.picklist(IconNames)),
  agencyUrl: v.optional(v.string()),
  awards: v.optional(v.array(v.string())),
});

/**
 * Metadata schema for lab content
 */
const LabContentMetadataSchema = v.object({
  ...BaseContentMetadataSchema.entries,
  type: v.literal(ContentType.LAB),
  category: v.picklist(["3D", "Animation"]),
  stack: v.optional(v.array(v.string())),
  githubUrl: v.optional(v.string()),
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
