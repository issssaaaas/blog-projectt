
/** @type {import('tailwindcss').Config} */	/** @type {import('tailwindcss').Config} */
module.exports = {	module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],	  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {	  theme: {
    extend: {},	    extend: {
      colors: {
        primary: "#1565D8",
        dark: {
          hard: "#0D2436",
          soft: "#183B56",
        },
      },
      fontFamily: {
        opensans: ["'Open Sans'", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"],
      },
    },
  },	  },
  plugins: [],	  plugins: [],
};	};