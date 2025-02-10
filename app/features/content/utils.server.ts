import path from "path";

import { glob } from "fast-glob";
import * as v from "valibot";

import { type ContentType } from "~/features/content/constants";
import { ContentMetadataSchema } from "~/features/content/metadata.server";

const METADATA_FILE_NAME = "metadata.ts";

/**
 * Get paths of metadata files for content MDX pages
 * @param contentType Filter based on content type, if not provided, all files will be returned
 * @returns Paths of metadata files for content MDX pages
 */
const getContentMetadataFilesPaths = async (contentType?: ContentType) => {
  const rootFolder = path.join(process.cwd(), "app", "(pages)", "(content)");

  const files = await glob(`**/${METADATA_FILE_NAME}`, {
    cwd: path.join(rootFolder, contentType ?? ""),
    absolute: true,
  });

  return files.map((file) => file.replace(rootFolder + "/", ""));
};

/**
 * Get the content metadata from the file path
 * @param filePath - The file path of the metadata file
 * @returns The metadata content
 */
const getContentMetadataFromFile = async (filePath: string) => {
  try {
    const { contentMetadata } = await import(`~/(pages)/(content)/${filePath}`);

    if (!contentMetadata) {
      throw new Error(`Content metadata not found for file: ${filePath}`);
    }

    const validatedMetadata = v.parse(ContentMetadataSchema, contentMetadata);

    return {
      slug: "/" + filePath.replace(`/${METADATA_FILE_NAME}`, ""),
      metadata: validatedMetadata,
    };
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

/**
 * Get content metadata for all content files
 * @param contentType Filter based on content type, if not provided, all files will be returned
 * @returns All content metadata
 */
export const getAllContent = async (contentType?: ContentType) => {
  const files = await getContentMetadataFilesPaths(contentType);

  const content = await Promise.all(files.map(getContentMetadataFromFile));

  return content.filter((item): item is NonNullable<typeof item> => item !== undefined);
};
