/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './Areas/**/*.cshtml', // Razor pages (if applicable) or MVC views (if applicable) or JavaScript files (if applicable)
    './Pages/**/*.cshtml', // Razor pages
    './Views/**/*.cshtml', // MVC views (if applicable)
    './wwwroot/**/*.js',   // JavaScript files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
