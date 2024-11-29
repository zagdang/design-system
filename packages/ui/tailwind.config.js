/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "var(--gdgoc-background-primary)",
          secondary: "var(--gdgoc-background-secondary)",
          tertiary: "var(--gdgoc-background-tertiary)",
          quaternary: "var(--gdgoc-background-quaternary)",
          quinary: "var(--gdgoc-background-quinary)",
        },
        brand: {
          red: "var(--gdgoc-brand-red)",
          yellow: "var(--gdgoc-brand-yellow)",
          blue: "var(--gdgoc-brand-blue)",
        },
        gray: {
          100: "var(--gdgoc-gray-100)",
          200: "var(--gdgoc-gray-200)",
          300: "var(--gdgoc-gray-300)",
        },
        white: {
          100: "var(--gdgoc-white-100)",
          40: "var(--gdgoc-white-40)",
          15: "var(--gdgoc-white-15)",
        },
        button: {
          hover: {
            gray: {
              primary: "var(--gdgoc-button-hover-gray-primary)",
              blue: "var(--gdgoc-button-hover-gray-blue)",
            },
            darkGray: {
              primary: "var(--gdgoc-button-hover-darkgray-primary)",
              secondary: "var(--gdgoc-button-hover-darkgray-secondary)",
            },
            red: {
              primary: "var(--gdgoc-button-hover-red-primary)",
              secondary: "var(--gdgoc-button-hover-red-secondary)",
            },
            yellow: {
              primary: "var(--gdgoc-button-hover-yellow-primary)",
              secondary: "var(--gdgoc-button-hover-yellow-secondary)",
            },
            dark: {
              primary: "var(--gdgoc-button-hover-dark-primary)",
              secondary: "var(--gdgoc-button-hover-dark-secondary)",
            },
          },
        },
      },
      fontSize: {
        // Bold Typography
        "bold-h1": "var(--gdgoc-typography-bold-h1)",
        "bold-h2": "var(--gdgoc-typography-bold-h2)",
        "bold-h3": "var(--gdgoc-typography-bold-h3)",
        "bold-h4": "var(--gdgoc-typography-bold-h4)",
        "bold-h5": "var(--gdgoc-typography-bold-h5)",
        "bold-h6": "var(--gdgoc-typography-bold-h6)",

        // Medium Typography
        "medium-h1": "var(--gdgoc-typography-medium-h1)",
        "medium-h2": "var(--gdgoc-typography-medium-h2)",
        "medium-h3": "var(--gdgoc-typography-medium-h3)",
        "medium-h4": "var(--gdgoc-typography-medium-h4)",
        "medium-h5": "var(--gdgoc-typography-medium-h5)",

        // Regular Typography
        "regular-h1": "var(--gdgoc-typography-regular-h1)",
        "regular-h2": "var(--gdgoc-typography-regular-h2)",
        "regular-h3": "var(--gdgoc-typography-regular-h3)",
        "regular-h4": "var(--gdgoc-typography-regular-h4)",
        "regular-h5": "var(--gdgoc-typography-regular-h5)",

        // Light Typography
        "light-h1": "var(--gdgoc-typography-light-h1)",
        "light-h2": "var(--gdgoc-typography-light-h2)",
        "light-h3": "var(--gdgoc-typography-light-h3)",
        "light-h4": "var(--gdgoc-typography-light-h4)",
        "light-h5": "var(--gdgoc-typography-light-h5)",
        "light-h6": "var(--gdgoc-typography-light-h6)",
      },
    },
  },
};
