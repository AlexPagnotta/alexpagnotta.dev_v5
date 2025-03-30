export enum ContentType {
  WRITING = "writings",
  WORK = "works",
  LAB = "lab",
}

/**
 * Display name for each content type
 */
export const ContentTypeDisplayNameMap = {
  [ContentType.WRITING]: "Writing",
  [ContentType.WORK]: "Project",
  [ContentType.LAB]: "Experiment",
} as const;
