/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter Variable", "sans-serif"],
        paragraph: ["Public Sans Variable", "sans-serif"],
      },
      colors: {
        "main-color": "#18999b",
        "main-black": "#101820",
        "main-green": "#004F16",
        "light-green": "#37A456",
        "main-blue": "#00314F",
        "light-blue": "#67A7CF",
        "main-yellow": "#4F4E00",
        "light-yellow": "#CFCD67",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 2s ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  safelist: [
    "bg-main-color",
    "bg-main-black",
    "bg-main-green",
    "bg-light-green",
    "bg-main-blue",
    "bg-light-blue",
    "bg-main-yellow",
    "bg-light-yellow",
    "from-main-color",
    "to-main-color",
    "from-main-black",
    "to-main-black",
    "from-main-green",
    "to-main-green",
    "from-light-green",
    "to-light-green",
    "from-main-blue",
    "to-main-blue",
    "from-light-blue",
    "to-light-blue",
    "from-main-yellow",
    "to-main-yellow",
    "from-light-yellow",
    "to-light-yellow",
    "-translate-x-10",
    "translate-x-10",
  ],
};
