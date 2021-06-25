module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FACD2E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
