import React from "react";

type TextEnricherProps = {
  children: string;
  dict: Record<string, React.ReactNode>;
  mode: "replace" | "append";
};

/**
 * Enriches text by adding or replacing icons and assets to certain words or phrases
 *
 * @param children - The text to enrich
 * @param dict - The dictionary of phrases to enrich with the corresponding icon or asset
 * @param mode - The mode to use, either replace the phrase with the icon or append the icon next to it
 * @returns The enriched text
 */
export const TextEnricher = ({ children, dict, mode, ...rest }: TextEnricherProps) => {
  // Extract the phrases to enrich from the dictionary
  const phrases = Object.keys(dict);

  // Sort phrases by length (longest first) to handle overlapping matches correctly
  const sortedPhrases = phrases.sort((a, b) => b.length - a.length);

  // Create a regex pattern that matches any of the phrases
  const pattern = new RegExp(
    `(${sortedPhrases.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g"
  );

  // Split the text into segments, preserving the matched phrases
  const segments = children.split(pattern).filter(Boolean);

  return (
    <React.Fragment {...rest}>
      {segments.map((segment, index) => {
        // Check if the segment is a phrase in our dictionary
        // If not, we return the original text as is
        const item = dict[segment];
        if (!item) return <React.Fragment key={index}>{segment}</React.Fragment>;

        // If the mode is replace, we don't show the original text
        const _segment = mode === "replace" ? "" : segment;

        return (
          <React.Fragment key={index}>
            {_segment}
            {item}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};
