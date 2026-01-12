import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
        handwriting: ["var(--font-handwriting)"],
      },
      colors: {
        "main-blue": "#699ABC",
        "powder-blue": "#A1B9CC",
        "french-gray": "#C5CDD6",
        bone: "#D5D0C4",
        timberwolf: "#DCD6D6",
      },
      screens: {
        xxs: "280px",
        sm: "640px",
        md: "1024px",
        lg: "1280px",
        xl: "1920px",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
});
export default config;
