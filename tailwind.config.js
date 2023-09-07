import { theme, plugins } from "@vegaprotocol/tailwindcss-config";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@vegaprotocol/ui-toolkit/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      ...theme,
      backgroundImage: {
        ...theme.backgroundImage,
        rainbow:
          "linear-gradient(103.47deg, #FF077F 1.68%, #8028FF 47.49%, #0075FF 100%)",
        "rainbow-shifted":
          "linear-gradient(103.47deg, #0075FF 1.68%, #8028FF 47.49%, #FF077F 100%)",
        highlight:
          "linear-gradient(170deg, var(--tw-gradient-from), transparent var(--tw-gradient-to-position))",
      },
    },
  },
  plugins, // [vegaCustomClasses]
};
