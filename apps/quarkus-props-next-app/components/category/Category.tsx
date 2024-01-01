import Category from "@/models/category";
import clsx from "@/utils/clsx";
import Property from "@/components/property/Property";
import CategoryTitle from "./CategoryTitle";

interface Props {
  category: Category;
}

export default function Category({ category }: Props) {
  return (
    <div id={category.id} className="pt-10 break-words">
      <CategoryTitle category={category} />
      {category.properties.map((property) => (
        <Property key={property.id} property={property} />
      ))}
    </div>
  );
}
