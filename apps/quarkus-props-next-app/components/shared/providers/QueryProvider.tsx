"use client";

import QueryContext from "@/contexts/queryContext";
import { Dispatch, SetStateAction, useMemo, useState } from "react";

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [query, setQuery] = useState("");

  const queryContextValue = useMemo<[string, Dispatch<SetStateAction<string>>]>(
    () => [query, setQuery],
    [query, setQuery]
  );

  return (
    <QueryContext.Provider value={queryContextValue}>
      {children}
    </QueryContext.Provider>
  );
}
