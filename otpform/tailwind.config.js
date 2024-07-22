/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#3F72AF",
        customDarkBlue: "#112D4E",
      },
    },
  },
  plugins: [],
};
