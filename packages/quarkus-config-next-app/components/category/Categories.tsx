"use client";

import { useContext, useDeferredValue, useMemo } from "react";
import filterCategories from "@/utils/filterCategories";
import QueryContext from "@/contexts/queryContext";
import NavigationTransitionContext from "@/contexts/navigationTransitionContext";
import { ICategory } from "quarkus-config-types";
import Category from "./Category";
import clsx from "@/utils/clsx";

interface Props {
  categories: ICategory[];
}

export default function Categories({ categories }: Props) {
  const [query] = useContext(QueryContext);
  const [isNavigating] = useContext(NavigationTransitionContext);
  const queryDeferred = useDeferredValue(query);
  const isPending = query !== queryDeferred || isNavigating;

  const elements = useMemo(
    () =>
      filterCategories(categories, queryDeferred).map((category) => (
        <Category key={category.id} category={category} />
      )),
    [categories, queryDeferred]
  );

  return (
    <div
      className={clsx(
        "transition-opacity delay-100",
        isPending ? "opacity-70" : "opacity-100"
      )}
    >
      {elements}
    </div>
  );
}
