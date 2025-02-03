/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#070F2B",      
        secondary: "#474E93",
        terniary: "#eff2f9",
        shahid: "#02091c",
        PeriwinklePurpleLight: "#7f57b4",  // Lighter version
        PeriwinklePurpleDark: "#492378",   // Darker version
        other: "#36517c",
        button: "#7f57b4",  // Lighter version
        other2: "rgb(163 230 53 / var(--tw-text-opacity, 1))"
      },
      clipPath: {
        'custom-shape': 'polygon(0 0, 100% 0, 80% 100%, 0 100%)',
      },
      utilities: {
        '.all-unset': {
          all: 'unset',
        },
      },
      fontFamily: {
        title: ['Roboto', 'sans-serif'], // For titles
        body: ['Arial', 'sans-serif'],   // For other content
        // Roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
