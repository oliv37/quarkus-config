"use client";

import useScrollY from "@/hooks/useScrollY";
import ArrowUpIcon from "../icons/ArrowUpIcon";

export default function UpButton() {
  const scrollY = useScrollY();

  function handleClick() {
    window.scroll(0, 0);
  }

  return (
    scrollY > 0 && (
      <button
        type="button"
        onClick={handleClick}
        className="sticky bottom-5 float-right bg-background rounded-xl"
      >
        <ArrowUpIcon className="w-6 h-6" />
      </button>
    )
  );
}
