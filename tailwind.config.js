/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  content: ['./app/index.html', './app/**/*.{html,js}'],
  theme: {
    extend: {
      minWidth: {
        20: '20px',
        136: '136px',
        100: '100px',
      },
      minHeight: {
        20: '20px',
        25: '25px',
        32: '32px',
      },
      maxHeight: {
        50: '50px',
        250: '250px',
        420: '420px',
      },
      maxWidth: {
        6: '6rem',
        '70%': '70%',
        '75%': '75%',
        60: '60px',
      },
      height: {
        5.5: '22px',
        4.5: '18px',
        '10%': '10%',
        '120px': '120px',
        '170px': '170px',
      },
      width: {
        100: '100px',
        50: '50px',
        4.5: '18px',
        34: '134px',
        300: '300px',
        '120px': '120px',
      },
      boxShadow: {
        border: 'inset 0 0 0 1px rgb(0 0 0 / 15%)',
        focus: '0 0 0 3px hsl(207deg 100% 55% / 30%);',
        image: '0 4px 13px rgb(0 0 0 / 20%)',
        'border-shadow': '0 0 0 1px rgb(0 0 0 / 5%), 0 8px 22px rgb(0 0 0 / 20%), inset 0 1px 0 1px rgb(255 255 255 / 25%);',
        'border-dropdown': '0 6px 20px rgb(0 0 0 / 20%)',
      },
      translate: {
        '50%': '-50%',
      },
      padding: {
        0.75: '3px',
      },
      rotate: {
        225: '225deg',
        270: '270deg',
      },
      margin: {
        '1px': '1px',
      },
      colors: {
        'gray-50%': 'hsl(0, 0%, 50%);',
        'gray-hex': '#cccccc',
        'template-color': '#585858',
        border: 'rgba(0, 0, 0, 0.05)',
        'border-v2': 'rgba(0, 0, 0, 0.2)',
        'gray-border': '#c3c4c4',
      },
      backgroundColor: {
        'gray-hsl': 'hsla(0, 0%, 0%, 0.08)',
        shadow: 'hsla(0, 0%, 0%, 0.1);',
      },
      transitionTimingFunction: {
        padding: 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
};
