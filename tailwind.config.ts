import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient": "linear-gradient(to right, #3BF686, #4CA9FF)",
      },
      colors: {
        background: "#00021a",
        // background: "#061417",
        // secondary: "#0a1d2e", #003366, 11213f
        secondary: "#112240",
        active: "#0a4c6f",
        disabled: "#2c2f3f",
        outline: "#0d2a3a",
        accent: "#149ddd",
        // accent: "#1e90ff",
        border: "#0d2a3a",
        hover: "#1e90ff",
        "text-primary": "#ccd6fc",
        "text-secondary": "#828797",

        //NEW COLOR SCHEMES NAMING
        grey: "#a8a9b4",
        "deep-grey": "#94959b",
        "primary-blue": "#149ddd",
        "blue-shade": "#0e668f",
        "card-blue-shade": "#112240",
        "deep-blue": "#2c2f3f",
        bgd: "#040b14",
        white: "#fff",
        "soft-white": "#ccd6f6",
        navy: "#0a192f",
        "light-blue": "#9cb7ff",
        "section-bgd": "#00021a",
      },
      boxShadow: {
        light: "0 4px 6px rgba(0, 0, 0, 0.1)",
        dark: "0 8px 16px rgba(0,0,0,0.3)",
      },
      fontFamily: {
        incognito: ["Incognito", "Incognito_Fallback"],
        gitlab: ["Gitlab_Mono", "Gitlab_Mono_Fallback"],
      },
    },
  },
  plugins: [],
};
export default config;