import getCategories from "@/utils/getCategories";
import UpButton from "@/components/shared/buttons/UpButton";
import Categories from "@/components/category/Categories";

interface Props {
  version: string;
}

export default function Main({ version }: Props) {
  const categories = getCategories(version);
  return (
    <main className="px-10 pt-10">
      <Categories categories={categories} />
      <UpButton />
    </main>
  );
}
