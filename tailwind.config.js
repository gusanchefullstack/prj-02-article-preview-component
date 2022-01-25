module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        project: ["13px"],
      },
      colors: {
        veryDarkGrayishBlue: "hsl(217, 19%, 35%)",
        desaturatedDarkBlue: "hsl(214, 17%, 51%)",
        grayishBlue: "hsl(212, 23%, 69%)",
        lightGrayishBlue: "hsl(210, 46%, 95%)",
      }
    },
  },
  plugins: [],
};
