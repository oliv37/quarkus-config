import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "rgb(var(--foreground-rgb))",
        "foreground-subtle": "rgb(var(--foreground-subtle-rgb))",
        background: "rgb(var(--background-rgb))",
        "background-subtle": "rgb(var(--background-subtle-rgb))",
      },
    },
  },
  plugins: [],
  safelist: ["light", "dark"],
  darkMode: "class",
};
export default config;
