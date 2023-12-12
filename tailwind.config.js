module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    fontSize: {
      sm: "16px",
      md: "20px",
      "2md": "24px",
      "3md": "36px",
      lg: "56px",
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
    extend: {
      colors: {
        "light-blue": "#3C278D",
        "card-bg": "#ededed",
        gray: "#484848",
        "dark-gray": "#4d4d4d",
        blue: "#3c278d",
      },
    },
  },
  plugins: [],
};
