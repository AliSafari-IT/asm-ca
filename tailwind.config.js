/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./WebAppMVC/**/*.cshtml", // Include Razor pages and other areas using Tailwind classes
    "./WebAppMVC/wwwroot/**/*.js",
    "./WebAppMVC/wwwroot/**/*.ts",
    "./WebAppMVC/wwwroot/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


