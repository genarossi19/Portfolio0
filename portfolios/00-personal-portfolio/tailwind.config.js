/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        backgray: "#141414",
        lightgray: "#282828",
        light: "#FFFFFC",
        darkpurple: "#230046",
        lightpurple: "#320064",
      }
      
    },
  },
  plugins: [],
};
