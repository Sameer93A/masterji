/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#D2E3C8",
        customDarkGreen: "#4F6F52",
        customBlack: "#313131",
        customLigtGreen: "#DBFFCE",
        customBlue: "#3F72AF",
        customDarkBlue: "#112D4E",
        customGray: "#BFBFBF",
        customSky: "#DBE2EF",
        customGreenLight: "#23CF9B",
        customRed: "#EB2D5B",
      },
      fontFamily: {
        inter: ["Inter"],
        dmsans: ["DM Sans"],
      },
      boxShadow: {
        customShadow: "1px 1px 8px 0px #00000040",
      },
      letterSpacing: {
        customTighter: "-0.05em",
      },
    },
  },
  plugins: [],
};
