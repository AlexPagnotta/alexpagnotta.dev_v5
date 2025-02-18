import React from "react";

type TextEnricherProps = {
  children: string;
  dict: Record<string, React.ReactNode>;
  mode: "replace" | "append";
};

/**
 * Enriches text by adding icons and assets to certain words
 *
 * @param children - The text to enrich
 * @param dict - The dictionary of words to enrich with the corresponding icon or asset
 * @param mode - The mode to use, either replace the word with the icon or append the icon next to the word
 * @returns The enriched text
 */
export const TextEnricher = ({ children, dict, mode, ...rest }: TextEnricherProps) => {
  // Extract the words to enrich from the dictionary
  const wordsArray = Object.keys(dict);

  // Split the text into phrases, the words to enrich will be at the end of each phrase
  const splitText = children.split(new RegExp(`(?<=${wordsArray.join("|")})`, "g")).filter(Boolean);

  return (
    <React.Fragment {...rest}>
      {splitText.map((segment, index) => {
        // Retrieve the last word of the phrase, as it will probably be the word to enrich
        const word = segment.split(" ").pop();

        // Check if the word is in the dictionary, if not, we return the phrase as is
        const item = word ? dict[word] : null;
        if (!word || !item) return <React.Fragment key={index}>{segment}</React.Fragment>;

        // If the mode is replace, we replace the word with the passed component, otherwise we append it
        const _segment = mode === "replace" ? segment.replace(word, "") : segment;

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
