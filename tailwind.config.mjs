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
    },
  },
  plugins: [],
};
