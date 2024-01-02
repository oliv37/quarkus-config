import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { DATA_FOLDER } from "../constant/constants.js";
import versionIdToFilename from "../mapper/version-id-to-filename.js";
import { ICategory, IVersion } from "quarkus-config-types";

export function writeAllQuarkusProperties(
  allQuarkusProperties: Record<string, ICategory[]>
) {
  const filename = "data.json";
  write(filename, allQuarkusProperties);
}

export function writeQuarkusProperties(
  version: IVersion,
  quarkusProperties: ICategory[]
) {
  const filename = versionIdToFilename(version.id);
  write(filename, quarkusProperties);
}

function write(
  filename: string,
  content: ICategory[] | Record<string, ICategory[]>
) {
  fs.writeFileSync(
    path.resolve(DATA_FOLDER, filename),
    JSON.stringify(content, null, 2) + os.EOL
  );
}
