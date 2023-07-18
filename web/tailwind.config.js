/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      colors: {
        purple: {
          50: "#efe6fd",
          100: "#ceb0fa",
          200: "#b78af7",
          300: "#9654f4",
          400: "#8133f1",
          500: "#6200ee",
          600: "#5900d9",
          700: "#4600a9",
          800: "#360083",
          900: "#290064",
        },
      },
      fontFamily: {
        sans: "var(--font-roboto)",
      },
    },
  },
  plugins: [],
};
