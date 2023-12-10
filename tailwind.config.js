/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f59e0b",
        "primary-light": "#fcd34d",
        "primary-extra-light": "#fef3c7",
        "primary-dark": "#d97706",
      },
      animation: {
        "spin-slow": "spin 1s ease infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
