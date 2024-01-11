import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#16a34a",
        "sub-1": "#85d4a2",
        "sub-2": "#bcebcc",
        "gray-1": "#e6e6e6",
        "gray-2": "#8a8a8a",
        "red-1": "#fcc6c5",
        "red-2": "#ff5a57",
      },
      boxShadow: {
        md: "0 1px 3px 0 rgb(0, 0, 0, 0.1), 0 1px 2px -1px rgb(0, 0, 0, 0.1)",
        lg: "0 4px 12px rgb(0, 0, 0, 0.1), 0 2px 4px rgb(0, 0, 0, 0.1)",
        "md-color": "0 1px 3px 0 #16a34a20,0 1px 2px -1px #16a34a20",
        "lg-color": "0 4px 12px #16a34a20, 0 2px 4px #16a34a20",
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
