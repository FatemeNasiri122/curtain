/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      proximaNova: ["ProximaNova", "sans-serif"],
    },
    extend: {
      colors: {
        "transparent": "transparent",
        "color-primary": "#888580",
        "gray-1": "#C7C7C7",
        "error": "#fa526e",
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.16em',
      }
    },
  },
  plugins: [],
}

