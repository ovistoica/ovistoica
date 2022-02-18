module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: 'white',
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
