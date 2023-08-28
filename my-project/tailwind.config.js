/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainRed: "#FF5252",
        mainPurple: "#A445ED",
        mainWhite: "#ffffff",
        mainLightGray: "#F4F4F4",
        mainGray: "#E9E9E9",
        mainDarkGray: "#757575",
        mainLightBlack: "#3A3A3A",
        mainLightBlack2: "#2D2D2D",
        mainDarkerBlack: "#1F1F1F",
        mainDark: "#050505",
      },

      fontFamily: {
        mainFont: ["Roboto", "sans-serif"],
      },

      fontSize: {
        headingL: "64px",
        headingM: "24px",
        headingS: "20px",

        bodyM: "18px",
        bodyS: "14px",
      },

      fontWeight: {
        medium: "400",
        bold: "700",
      },
    },
  },
  plugins: [],
};
