module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
      },
    },
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      secreens: {
        lg: "1080px",
        xl: "1080px",
        "2xl": "1080px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
