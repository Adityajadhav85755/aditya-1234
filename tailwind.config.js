/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#0a2c5a",
        secondary:"#fcb21d",
        terniary:"#eff2f9",
        // terniary:"#eff2f9",
        other:"#36517c",
        other2:"rgb(163 230 53 / var(--tw-text-opacity, 1))"
        
        
      },
      clipPath: {
        'custom-shape': 'polygon(0 0, 100% 0, 80% 100%, 0 100%)',
      },
      utilities: {
        '.all-unset': {
          all: 'unset',
      },
      
      }
    },
  },
  plugins: [],
}

