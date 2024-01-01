import tableRowToCategory from "../mapper/table-row-to-category.js";
import tableRowToProperty from "../mapper/table-row-to-property.js";

export default function tableRowsReducer(result, tableRow) {
  if (isCategory(tableRow)) {
    const category = tableRowToCategory(tableRow);
    result.push(category);
  } else {
    const category = result[result.length - 1];
    const property = tableRowToProperty(tableRow);
    category.addProperty(property);
  }

  return result;
}

function isCategory(tableRow) {
  return !tableRow.querySelector("div.description");
}
