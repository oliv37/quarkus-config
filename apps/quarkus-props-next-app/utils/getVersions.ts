import Version from "@/models/version";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));
const DATA_FOLDER = path.resolve(DIR_NAME, "../../../data");

export default function getVersions(): Version[] {
  return JSON.parse(
    fs.readFileSync(path.resolve(DATA_FOLDER, "versions.json"), "utf8")
  );
}
