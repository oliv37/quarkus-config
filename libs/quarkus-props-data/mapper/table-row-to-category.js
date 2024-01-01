import Category from "../model/category.js";

export default function tableRowToCategory(tableRow) {
  const categoryId = getCategoryId(tableRow);
  const categoryName = getCategoryName(tableRow);
  return new Category(categoryId, categoryName);
}

function getCategoryId(tableRow) {
  const link = tableRow.querySelector("a[id^=quarkus]");
  return link.getAttribute("id");
}

function getCategoryName(tableRow) {
  const link = tableRow.querySelector("a[href^=#quarkus]");
  return link.textContent;
}
