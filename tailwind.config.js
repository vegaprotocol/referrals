import { theme, plugins } from "@vegaprotocol/tailwindcss-config";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: theme,
  },
  plugins, // [vegaCustomClasses]
};
