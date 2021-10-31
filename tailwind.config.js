module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: '#3B7FE8',
      green: '#1BCF92',
      secondary: '#F6F4F1',
      red: '#E55249',
      yellow: '#FFC839'
    },
    extend: {
      inset: {
        'half': 'calc(50% - 24px)'
      },
      width: {
        'fit': 'fit-content'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
