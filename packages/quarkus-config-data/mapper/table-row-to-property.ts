import { HTMLElement } from "node-html-parser";
import { IProperty } from "quarkus-config-types";

export default function tableRowToProperty(tableRow: HTMLElement): IProperty {
  return {
    id: getPropertyId(tableRow),
    names: getPropertyNames(tableRow),
    description: getPropertyDescription(tableRow),
    type: getPropertyType(tableRow),
    defaultValue: getPropertyDefaultValue(tableRow),
    fixed: isPropertyFixed(tableRow),
  };
}

const paragraphSelector = "td:nth-child(1) > .content > div[class=paragraph]";

function getPropertyId(tableRow: HTMLElement) {
  const link = tableRow.querySelector(`${paragraphSelector} a[id^=quarkus]`);
  return link.getAttribute("id");
}

function getPropertyNames(tableRow: HTMLElement) {
  const links = tableRow.querySelectorAll(
    `${paragraphSelector} a[href^=#quarkus]`
  );
  return Array.from(links).map((link) => link.textContent);
}

function getPropertyDescription(tableRow: HTMLElement) {
  const content = tableRow.querySelector(
    "td:nth-child(1) .description .content"
  );
  if (content.querySelector("code[id^=env-var]")) {
    const lastParagraph = content.querySelector("> .paragraph:last-child");
    content.removeChild(lastParagraph);
  }
  return content.outerHTML;
}

function getPropertyType(tableRow: HTMLElement) {
  const paragraph = tableRow.querySelector("td:nth-child(2) p");
  return paragraph.textContent.replace("\n  ", "");
}

function getPropertyDefaultValue(tableRow: HTMLElement) {
  const paragraph = tableRow.querySelector("td:nth-child(3)");
  return paragraph.textContent;
}

function isPropertyFixed(tableRow: HTMLElement) {
  return tableRow.querySelector("i.fa-lock") != null;
}
