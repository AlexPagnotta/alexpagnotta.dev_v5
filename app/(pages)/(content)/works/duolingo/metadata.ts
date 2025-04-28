import { ContentType } from "~/features/content/constants";
import type { WorkContentMetadata } from "~/features/content/metadata/metadata.server";

export const contentMetadata = {
  title: "A small microsite for Duolingo",
  previewTitle: "Duolingo",
  description: "Duolingo Fowl Language, a microsite to celebrate the 2022 World Cup",
  date: "2022-11-28",
  type: ContentType.WORK,
  accentColor: "blue",
  workUrl: "https://fowllanguage.duolingo.com/",
  workName: "Duolingo",
  agencyName: "wild",
  agencyUrl: "https://wild.as",
  awards: [],
} satisfies WorkContentMetadata;
