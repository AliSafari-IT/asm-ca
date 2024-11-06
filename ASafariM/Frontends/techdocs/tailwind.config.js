const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{jsx,tsx,html}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem'
    }, 
    container: {
      center: true,
    },    
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        jakarta: ["Plus Jakarta Sans", ...fontFamily.sans],
        mono: ["Fira Code", ...fontFamily.mono],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "32px",
        "5xl": "36px",
        "6xl": "42px",
        "7xl": "48px",
        "8xl": "56px",
        "9xl": "64px",
      },
      borderRadius: {
        sm: "4px",
      },
      screens: {
        sm: "0px",
        lg: "997px",
      },
      colors: {},
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(300px, 1fr))",
      },
      gridTemplateRows: {
        "auto-fill": "repeat(auto-fill, minmax(300px, 1fr))",
      },
      gridTemplateAreas: {
        "auto-fill": "repeat(auto-fill, minmax(300px, 1fr))",
      },
      gridArea: {
        "auto-fill": "repeat(auto-fill, minmax(300px, 1fr))",
      },
    },
  },
  plugins: [],
};