/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headline: ["headline", "sans-serif"],
        subtext: ["subtext", "sans-serif"],
        bannertext: ["bannertext", "sans-serif"],
        footerText: ["footerText", "sans-serif"],
        footerHeading: ["footerHeading", "sans-serif"],
      },
      colors: {
        mainBlue: " #39A7FFFC",
      },
    },
  },
  plugins: [],
};
