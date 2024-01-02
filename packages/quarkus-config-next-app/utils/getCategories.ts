import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import getVersions from "./getVersions";
import { ICategory } from "quarkus-config-types";

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));
const DATA_FOLDER = path.resolve(DIR_NAME, "../../../data");

export default function getCategories(versionId: string): ICategory[] {
  const versions = getVersions();
  const version = versions.find(({ id }) => id === versionId);
  if (!version) {
    return [];
  }
  const content = fs.readFileSync(
    path.resolve(DATA_FOLDER, version.filename),
    "utf8"
  );
  return JSON.parse(content);
}
