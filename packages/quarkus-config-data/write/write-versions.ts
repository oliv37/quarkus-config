import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { DATA_FOLDER } from "../constant/constants.js";
import { IVersion } from "quarkus-config-types";

export function writeVersions(versions: IVersion[]) {
  const filename = "versions.json";
  fs.writeFileSync(
    path.resolve(DATA_FOLDER, filename),
    JSON.stringify(versions, null, 2) + os.EOL
  );
}
