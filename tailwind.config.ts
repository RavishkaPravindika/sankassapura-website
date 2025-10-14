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
        'snow': '#FFFAFA',
        'light-blue': '#89D6E8',
        'yellow-underline': '#FFF204',
        'button-text': '#C3E7EF',
      },
      fontFamily: {
        jomhuria: ["var(--font-jomhuria)"],
        "jetbrains-mono": ["var(--font-jetbrains-mono)"],
        "instrument-sans": ["var(--font-instrument-sans)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;