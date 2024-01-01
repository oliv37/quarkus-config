import { parse } from "node-html-parser";
import { readQuarkusVersions } from "./read-quarkus-versions.js";
import tableRowsReducer from "../reducer/table-rows-reducer.js";
import versionIdToUrl from "../mapper/version-id-to-url.js";

export async function readAllQuarkusProperties() {
  const versions = await readQuarkusVersions();
  const result = {};
  for (let version of versions) {
    const quarkusProperties = await readQuarkusProperties(version);
    result[version.id] = quarkusProperties;
  }
  return result;
}

export async function readQuarkusProperties(version) {
  const url = versionIdToUrl(version.id);
  const response = await fetch(url);
  const html = await response.text();
  const root = parse(html);
  const tableRows = root.querySelectorAll(
    "table.configuration-reference > tbody > tr"
  );
  return Array.from(tableRows).reduce(tableRowsReducer, []);
}
