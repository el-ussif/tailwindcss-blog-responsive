module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // Some useful comment
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'Heebo': ['"Heebo"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      fontFamily: ['Heebo', 'focus'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
