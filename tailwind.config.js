/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // flowbite-svelte
        primary: {
          500: '#4541EB',
        },
        secondary: {
          500: '#0C0B15'
        }
      }
    },
  },
  plugins: [],
}

