export enum ContentType {
  WRITING = "writings",
  WORK = "works",
  LAB = "lab",
}

/**
 * Type guard to check if a string is a valid ContentType
 * @param value The value to check
 * @returns True if the value is a valid ContentType
 */
export const isContentType = (value: string): value is ContentType => {
  return Object.values(ContentType).includes(value as ContentType);
};
