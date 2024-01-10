/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        md: "0 2px 4px rgb(0, 0, 0, 0.1), 0 1px 2px rgb(0, 0, 0, 0.1)",
        lg: "0 4px 12px rgb(0, 0, 0, 0.1), 0 2px 4px rgb(0, 0, 0, 0.1)",
        "md-color": "0 2px 4px #0D689E20, 0 1px 2px #0D689E20",
        "lg-color": "0 4px 12px #0D689E20, 0 2px 4px #0D689E20",
      },
    },
  },
  plugins: [],
};
