export default class Category {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.properties = [];
  }

  addProperty(property) {
    this.properties.push(property);
  }
}
