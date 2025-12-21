/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#FF8C00", // Dark Orange
          light: "#FFB366",
          dark: "#CC7000",
        },
        secondary: {
          DEFAULT: "#3B82F6", // Blue 500
          light: "#60A5FA", // Blue 400
          dark: "#2563EB", // Blue 600
        },
      },
    },
  },
  plugins: [],
};
