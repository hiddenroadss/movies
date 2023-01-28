/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./frontend/admin/src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-notlast', '& > *:not(:last-child)');
    },
  ],
};
