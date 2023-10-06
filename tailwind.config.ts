import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-blue": "#699ABC",
        "powder-blue": "#A1B9CC",
        "french-gray": "#C5CDD6",
        bone: "#D5D0C4",
        timberwolf: "#DCD6D6",
      },
    },
  },
  plugins: [],
};
export default config;
