import { parse } from "node-html-parser";
import Version from "../model/version.js";
import { QUARKUS_PROPERTIES_DEFAULT_URL } from "../constant/constants.js";

export async function readQuarkusVersions() {
  const response = await fetch(QUARKUS_PROPERTIES_DEFAULT_URL);
  const html = await response.text();
  const root = parse(html);
  const options = root.querySelectorAll("select.guide-dropdown > option");
  return Array.from(options).map((option) => {
    const id = option.getAttribute("value");
    const name = option.text;
    return new Version(id, name);
  });
}
