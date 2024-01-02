import { HTMLElement } from "node-html-parser";
import { ICategory } from "quarkus-config-types";

export default function tableRowToCategory(tableRow: HTMLElement): ICategory {
  const categoryId = getCategoryId(tableRow);
  const categoryName = getCategoryName(tableRow);
  return { id: categoryId, name: categoryName, properties: [] };
}

function getCategoryId(tableRow: HTMLElement) {
  const link = tableRow.querySelector("a[id^=quarkus]");
  return link.getAttribute("id");
}

function getCategoryName(tableRow: HTMLElement) {
  const link = tableRow.querySelector("a[href^=#quarkus]");
  return link.textContent;
}
