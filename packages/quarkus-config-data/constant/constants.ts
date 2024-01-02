import path from "node:path";
import { fileURLToPath } from "node:url";

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));

export const QUARKUS_HOST = "https://quarkus.io";

export const QUARKUS_PROPERTIES_PATH = "/guides/all-config";

export const QUARKUS_PROPERTIES_DEFAULT_URL =
  QUARKUS_HOST + QUARKUS_PROPERTIES_PATH;

export const DATA_FOLDER_NAME = "data";

export const DATA_FOLDER = path.resolve(DIR_NAME, "../../..", DATA_FOLDER_NAME);

export const LATEST_VERSION_ID = "latest";
