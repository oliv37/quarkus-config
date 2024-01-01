import { createContext } from "react";

export type Theme = "light" | "dark";

const DEFAULT_VALUE: [Theme | undefined, () => void] = [undefined, () => {}];

const ThemeContext = createContext(DEFAULT_VALUE);

export default ThemeContext;
