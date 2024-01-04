import { ICategory } from "quarkus-config-types";
import clsx from "@/utils/clsx";

interface Props {
  category: ICategory;
}

export default function CategoryHeader({ category }: Props) {
  return (
    <a href={`#${category.id}`}>
      <p
        className={clsx(
          "inline-block px-2 py-1 mb-4",
          "font-bold text-background bg-foreground"
        )}
      >
        {category.name}
      </p>
    </a>
  );
}
