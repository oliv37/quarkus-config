import versionIdToFilename from "../mapper/version-id-to-filename.js";

export default class Version {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.filename = versionIdToFilename(id);
  }
}
