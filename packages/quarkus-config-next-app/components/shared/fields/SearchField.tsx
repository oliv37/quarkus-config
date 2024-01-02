"use client";

import { useContext, useRef } from "react";
import QueryContext from "@/contexts/queryContext";
import DeleteIcon from "@/components/shared/icons/DeleteIcon";

export default function SearchField() {
  const [query, setQuery] = useContext(QueryContext);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClickDelete() {
    setQuery("");
    inputRef.current?.focus();
  }

  return (
    <div className="flex items-center relative">
      <input
        ref={inputRef}
        type="text"
        className="pl-1 pr-5 w-28 sm:w-44"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query.length > 0 && (
        <button
          type="button"
          onClick={handleClickDelete}
          className="absolute right-1"
        >
          <DeleteIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
