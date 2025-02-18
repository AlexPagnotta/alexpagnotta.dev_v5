/**
 * Format a date string to the content header date format (e.g. "January 1, 2024")
 * @param date - The date string to format
 * @returns The formatted date string
 */
export const formatContentHeaderDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
};
