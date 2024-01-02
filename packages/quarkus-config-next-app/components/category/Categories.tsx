"use client";

import { useContext, useDeferredValue, useMemo } from "react";
import filterCategories from "@/utils/filterCategories";
import QueryContext from "@/contexts/queryContext";
import { ICategory } from "quarkus-config-types";
import Category from "./Category";

interface Props {
  categories: ICategory[];
}

export default function Categories({ categories }: Props) {
  const [query] = useContext(QueryContext);
  const queryDeferred = useDeferredValue(query);

  return useMemo(
    () =>
      filterCategories(categories, queryDeferred).map((category) => (
        <Category key={category.id} category={category} />
      )),
    [categories, queryDeferred]
  );
}