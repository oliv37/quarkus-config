import Category from "@/models/category";
import Property from "@/models/property";

export default function filterData(
  categories: Category[],
  query?: string
): Category[] {
  if (!query || !query.trim().length) {
    return categories;
  }

  return categories.reduce((res, category) => {
    const properties = findProperties(category.properties, query);
    if (properties.length) {
      res.push({ ...category, properties });
    }
    return res;
  }, [] as Category[]);
}

function findProperties(properties: Property[], query: string): Property[] {
  const queryLowerCase = query.toLocaleLowerCase();
  return properties.filter(
    (property) =>
      property.names.filter((name: string) => name.includes(queryLowerCase))
        .length > 0
  );
}
