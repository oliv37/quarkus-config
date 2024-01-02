export default function versionIdToFilename(versionId: string): string {
  return `${versionId.replaceAll(".", "_")}.json`;
}
