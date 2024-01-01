import Category from "@/models/category";
import clsx from "@/utils/clsx";

interface Props {
  category: Category;
}

export default function CategoryTitle({ category }: Props) {
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
