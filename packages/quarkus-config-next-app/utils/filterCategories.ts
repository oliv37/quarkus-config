import { ICategory, IProperty } from "quarkus-config-types";

export default function filterCategories(
  categories: ICategory[],
  query?: string
): ICategory[] {
  if (!query || !query.trim().length) {
    return categories;
  }

  return categories.reduce((res, category) => {
    const properties = findProperties(category.properties, query);
    if (properties.length) {
      res.push({ ...category, properties });
    }
    return res;
  }, [] as ICategory[]);
}

function findProperties(properties: IProperty[], query: string): IProperty[] {
  const queryLowerCase = query.toLocaleLowerCase();
  return properties.filter(
    (property) =>
      property.names.filter((name: string) => name.includes(queryLowerCase))
        .length > 0
  );
}
