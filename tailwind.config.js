/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      heroik: ['Heroik'],
      poppins: ['Poppins'],
    },
    height: {
      '70vh': '70vh',
      '90vh': '90vh',
      '85': '85%',
      '100': '100%',
    },
    inset: {
      '56px': '56px 0 auto',
      'down': '-56px auto auto',
      'down2': '-64px auto auto',
      '0px': '0',
      'y-r-0': '0 0 0 auto',
      'y-l-0': '0 auto 0 0',
    },
    gridTemplateColumns: {
      'auto2': 'repeat(auto-fit, minmax(150px, 1fr))',
    },
    gridTemplateRows: {
      '8': 'repeat(8, minmax(0, 1fr))'
    },
    gridRow: {
      '1/2': '1 / 2',
    },
    gridColumn: {
      '1/2': '1 / 2',
    },
    gridAutoColumns: {
      '100': '100%',
    },
    flex: {
      '100': '100px',
      '300': '375px',
      '400': '400px',
      '250': '250px',

    },
    zIndex: {
      'less': '-1',
      '100': '100',
    }

  },
  plugins: [],
  // ...
}