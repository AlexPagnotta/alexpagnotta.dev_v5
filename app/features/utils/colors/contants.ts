/**
 * List of accent colors that are used throughout the app.
 */
export const AccentColors = ["light-blue", "blue", "green", "red", "purple", "pink", "yellow"] as const;

export type AccentColor = (typeof AccentColors)[number];
