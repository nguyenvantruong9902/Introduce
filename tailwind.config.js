module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        large: '992px',
      },
      colors: {
        black: {
          'opacity-50': 'rgba(0, 0, 0, 0.5)',
        },
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
