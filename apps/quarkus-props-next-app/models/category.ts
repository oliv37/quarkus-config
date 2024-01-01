import Property from "./property";

export default interface Category {
  id: string;
  name: string;
  properties: Property[];
}
