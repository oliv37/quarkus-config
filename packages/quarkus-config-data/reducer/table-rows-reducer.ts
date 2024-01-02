import { ICategory } from "quarkus-config-types";
import tableRowToCategory from "../mapper/table-row-to-category.js";
import tableRowToProperty from "../mapper/table-row-to-property.js";
import { HTMLElement } from "node-html-parser";

export default function tableRowsReducer(
  result: ICategory[],
  tableRow: HTMLElement
) {
  if (isCategory(tableRow)) {
    const category = tableRowToCategory(tableRow);
    result.push(category);
  } else {
    const category = result[result.length - 1];
    const property = tableRowToProperty(tableRow);
    category.properties.push(property);
  }

  return result;
}

function isCategory(tableRow: HTMLElement): boolean {
  return !tableRow.querySelector("div.description");
}
