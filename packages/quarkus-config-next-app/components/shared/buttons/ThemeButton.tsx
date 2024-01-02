"use client";

import { useContext } from "react";
import ThemeContext from "@/contexts/themeContext";
import DarkIcon from "@/components/shared/icons/DarkIcon";
import LightIcon from "@/components/shared/icons/LightIcon";

export default function ThemeButton() {
  const [theme, switchTheme] = useContext(ThemeContext);

  return (
    <button type="button" className="w-5 h-5" onClick={switchTheme}>
      <DarkIcon className="w-full h-full dark:hidden" />
      <LightIcon className="w-full h-full hidden dark:block" />
    </button>
  );
}
