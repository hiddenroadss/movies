/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./frontend/admin/src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
