module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      0: "0",
      200: "200px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
