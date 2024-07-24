/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#D2E3C8",
        customDarkGreen: "#4F6F52",
        customBlack: "#313131",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      boxShadow: {
        customShadow: "1px 1px 8px 0px #00000040",
      },
    },
  },
  plugins: [],
};
