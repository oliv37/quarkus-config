import {
  LATEST_VERSION_ID,
  QUARKUS_PROPERTIES_DEFAULT_URL,
  QUARKUS_HOST,
  QUARKUS_PROPERTIES_PATH,
} from "../constant/constants";

export default function versionIdToUrl(versionId: string): string {
  return versionId === LATEST_VERSION_ID
    ? QUARKUS_PROPERTIES_DEFAULT_URL
    : `${QUARKUS_HOST}/version/${versionId}${QUARKUS_PROPERTIES_PATH}`;
}
