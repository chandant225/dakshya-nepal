module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        primary: "0px 8px 40px 2px rgba(85, 85, 85, 0.08)",
        secondary: "rgb(0 0 0 / 8%) 0px 1px 12px",
      },
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
