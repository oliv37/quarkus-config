import Property from "../model/property.js";

export default function tableRowToProperty(tableRow) {
  return new Property(
    getPropertyId(tableRow),
    getPropertyNames(tableRow),
    getPropertyDescription(tableRow),
    getPropertyType(tableRow),
    getPropertyDefaultValue(tableRow),
    isPropertyFixed(tableRow)
  );
}

const paragraphSelector = "td:nth-child(1) > .content > div[class=paragraph]";

function getPropertyId(tableRow) {
  const link = tableRow.querySelector(`${paragraphSelector} a[id^=quarkus]`);
  return link.getAttribute("id");
}

function getPropertyNames(tableRow) {
  const links = tableRow.querySelectorAll(
    `${paragraphSelector} a[href^=#quarkus]`
  );
  return Array.from(links).map((link) => link.textContent);
}

function getPropertyDescription(tableRow) {
  const content = tableRow.querySelector(
    "td:nth-child(1) .description .content"
  );
  if (content.querySelector("code[id^=env-var]")) {
    const lastParagraph = content.querySelector("> .paragraph:last-child");
    content.removeChild(lastParagraph);
  }
  return content.outerHTML;
}

function getPropertyType(tableRow) {
  const paragraph = tableRow.querySelector("td:nth-child(2) p");
  return paragraph.textContent.replace("\n  ", "");
}

function getPropertyDefaultValue(tableRow) {
  const paragraph = tableRow.querySelector("td:nth-child(3)");
  return paragraph.textContent;
}

function isPropertyFixed(tableRow) {
  return tableRow.querySelector("i.fa-lock") != null;
}
