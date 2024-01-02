import { parse } from "node-html-parser";
import { IVersion } from "quarkus-config-types";
import { QUARKUS_PROPERTIES_DEFAULT_URL } from "../constant/constants";
import versionIdToFilename from "../mapper/version-id-to-filename";

export async function readQuarkusVersions(): Promise<IVersion[]> {
  const response = await fetch(QUARKUS_PROPERTIES_DEFAULT_URL);
  const html = await response.text();
  const root = parse(html);
  const options = root.querySelectorAll("select.guide-dropdown > option");
  return Array.from(options).map((option) => {
    const id = option.getAttribute("value");
    const name = option.text;
    return { id, name, filename: versionIdToFilename(id) };
  });
}
