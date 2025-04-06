import { ContentType } from "~/features/content/constants";
import type { WorkContentMetadata } from "~/features/content/metadata/metadata.server";

export const contentMetadata: WorkContentMetadata = {
  title: "A small microsite for Duolingo",
  previewTitle: "Duolingo",
  description: "Duolingo Fowl Language Website",
  date: "2022-11-28",
  type: ContentType.WORK,
  workUrl: "https://fowllanguage.duolingo.com/",
  workName: "Duolingo",
  workAccentColor: "blue",
  agencyName: "wild",
  agencyUrl: "https://wild.as",
  awards: [],
};
