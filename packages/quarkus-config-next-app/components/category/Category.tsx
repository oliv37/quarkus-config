import { ICategory } from "quarkus-config-types";
import Property from "@/components/property/Property";
import CategoryHeader from "./CategoryHeader";

interface Props {
  category: ICategory;
}

export default function Category({ category }: Props) {
  return (
    <div id={category.id} className="pb-10 break-words">
      <CategoryHeader category={category} />
      {category.properties.map((property) => (
        <Property key={property.id} property={property} />
      ))}
    </div>
  );
}
