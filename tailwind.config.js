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
      keyframes: {
        ...theme.keyframes,
        shake: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(5px)" },
          "50%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        ...theme.animation,
        shake: "shake 200ms linear",
      },
    },
  },
  plugins, // [vegaCustomClasses]
};
