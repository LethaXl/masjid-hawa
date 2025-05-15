/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#fff5f1',
          100: '#ffe6dd',
          200: '#ffc8ba',
          300: '#ffa28d',
          400: '#ff7a5c',
          500: '#fe552c',
          600: '#f2390e',
          700: '#ca2a09',
          800: '#a5280e',
          900: '#862610',
          950: '#491006',
        },
        peach: {
          50: '#fff7f2',
          100: '#ffeee4',
          200: '#ffd8c2',
          300: '#ffba95',
          400: '#ff9259',
          500: '#ff702a',
          600: '#ff5a0f',
          700: '#cc4004',
          800: '#a13508',
          900: '#83310c',
          950: '#471505',
        },
      },
    },
  },
  plugins: [],
}; 