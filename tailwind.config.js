/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        main: "#0C0CA5",
        secondary: "#07073F",
      },
    },
  },
  plugins: [],
};
