import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        handwriting: ["var(--font-handwriting)"],
      },
      colors: {
        "main-blue": "#699ABC",
        "powder-blue": "#A1B9CC",
        "french-gray": "#C5CDD6",
        bone: "#D5D0C4",
        timberwolf: "#DCD6D6",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
