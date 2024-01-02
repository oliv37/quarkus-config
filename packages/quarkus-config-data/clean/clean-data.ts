import fs from "node:fs";
import { DATA_FOLDER } from "../constant/constants";

export function cleanData() {
  fs.rmSync(DATA_FOLDER, { recursive: true, force: true });
  fs.mkdirSync(DATA_FOLDER);
}
