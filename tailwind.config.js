/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "rich-black": "#000F1F",
        "rich-black-hover": "#011830",
        "blue-sapphire": "#006983",
        "blue-sapphire-hover": "#0786a6",
        grey: "#808080",
        "danger-red": "#D51414",
        platinum: "#f4f7f0",
        alabaster: "#EEF0EB",
        "milk-grey": "#ccc",
      },
      boxShadow: {
        xl: " 2px 6px 5px 0px rgba(145,145,150,0.47)",
        xxl: "  2px 6px 5px 0px rgba(50,50,145,0.47)",
      },
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },

  plugins: [],
};
