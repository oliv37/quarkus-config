import { cleanData } from "./clean/clean-data";
import { readQuarkusProperties } from "./read/read-quarkus-properties";
import { readQuarkusVersions } from "./read/read-quarkus-versions";
import { writeQuarkusProperties } from "./write/write-quarkus-properties";
import { writeVersions } from "./write/write-versions";

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
