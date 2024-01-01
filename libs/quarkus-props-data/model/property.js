export default class Property {
  constructor(id, names, description, type, defaultValue, fixed) {
    this.id = id;
    this.names = names;
    this.description = description;
    this.type = type;
    this.defaultValue = defaultValue;
    this.fixed = fixed;
  }
}
