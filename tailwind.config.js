
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './UI/**/*.{js,ts,jsx,tsx,mdx}',

    
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: []
}