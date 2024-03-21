/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "main-red": "#500000",
        "light-red": "#A43737",
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
  plugins: [],
  safelist: [
    "bg-main-red",
    "bg-light-red",
    "bg-main-black",
    "bg-main-green",
    "bg-light-green",
    "bg-main-blue",
    "bg-light-blue",
    "bg-main-yellow",
    "bg-light-yellow",
    "from-main-red",
    "to-main-red",
    "from-light-red",
    "to-light-red",
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
  ],
};
