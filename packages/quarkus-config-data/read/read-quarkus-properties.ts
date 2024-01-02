import { parse } from "node-html-parser";
import { readQuarkusVersions } from "./read-quarkus-versions";
import tableRowsReducer from "../reducer/table-rows-reducer";
import versionIdToUrl from "../mapper/version-id-to-url";
import { ICategory, IProperty, IVersion } from "quarkus-config-types";

export async function readAllQuarkusProperties() {
  const versions = await readQuarkusVersions();
  const result: Record<string, ICategory[]> = {};
  for (let version of versions) {
    const quarkusProperties = await readQuarkusProperties(version);
    result[version.id] = quarkusProperties;
  }
  return result;
}

export async function readQuarkusProperties(version: IVersion) {
  const url = versionIdToUrl(version.id);
  const response = await fetch(url);
  const html = await response.text();
  const root = parse(html);
  const tableRows = root.querySelectorAll(
    "table.configuration-reference > tbody > tr"
  );
  return Array.from(tableRows).reduce(tableRowsReducer, []);
}
