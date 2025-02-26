/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}