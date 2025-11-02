/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        parisBold: ["HelloParis-Bold", "sans-serif"],
        parisMedium: ["HelloParis-Medium", "sans-serif"],
        parisRegular: ["HelloParis-Regular", "sans-serif"],
        parisLight: ["HelloParis-Light", "sans-serif"],
        parisExtraLight: ["HelloParis-ExtraLight", "sans-serif"],
        dreamAvenue: ["DreamAvenue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
