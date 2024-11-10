/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./WebAppMVC/**/*.cshtml", // Include all your Razor views
    "./WebAppMVC/wwwroot/**/*.js", // Include JavaScript files that may use Tailwind classes
    "./WebAppMVC/wwwroot/**/*.ts", // Include TypeScript files if applicable
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
