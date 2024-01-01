import { cleanData } from "./clean/clean-data.js";
import { readQuarkusProperties } from "./read/read-quarkus-properties.js";
import { readQuarkusVersions } from "./read/read-quarkus-versions.js";
import { writeQuarkusProperties } from "./write/write-quarkus-properties.js";
import { writeVersions } from "./write/write-versions.js";

async function main() {
  cleanData();
  const versions = await readQuarkusVersions();
  writeVersions(versions);
  for (let version of versions) {
    const quarkusProperties = await readQuarkusProperties(version);
    writeQuarkusProperties(version, quarkusProperties);
  }
}

await main();
