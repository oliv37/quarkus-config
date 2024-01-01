export default function versionIdToFilename(versionId) {
  return `${versionId.replaceAll(".", "_")}.json`;
}
