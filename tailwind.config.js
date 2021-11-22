
module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    /^pl-/, /^pt-/, /^pb-/, /^py/, /^border-/
  ],
// [/^col-span-.*/]
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        'container': '42.5rem',
        'fit-content': 'fit-content'
      },

      colors: {
        'primary': {
          DEFAULT: '#ff744f ',
        },
        'black-100': {
          DEFAULT: '#2c2c2c',
        },
        'black-500': {
          DEFAULT: '#212121',
        },
        'black-800': {
          DEFAULT: '#181818',
        },
      },
      borderWidth: {
        '1': '1px'
      },
      boxShadow: {
        'white': 'inset 0 1px 2px rgb(0 0 0 / 8%), 0 0 5px rgb(255 255 255 / 50%)',
        'primary': 'inset 0 1px 2px rgb(0 0 0 / 8%), 0 0 5px rgb(255 116 79 / 50%)'
      },

    },

    fontFamily: {
      'sans': ['Work Sans', 'sans-serif']
    },

  },

  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      pointerEvents: ['disabled'],
      // padding:['first'],
      // padding:['odd','even'],
      // paddingLeft:['odd','even'],
      paddingLeft: ['odd'],
    },
  },
  plugins: [],
}
