
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  // corePlugins: [
  //   'boxSizing',
  //   'pl',
  //   'pt',
  //   'pb',
  //   'py',
  //   'bg',
  //   'border',
  //   'opacity',
  //   'cursor',
  //   'basis',
  //   'max-w',
  //   'flex',
  //   'flex-row',
  //   'flex-wrap',
  //   'h-fit-content',
  //   'grid-component'
  // ],
  // darkMode: false,
  theme: {
    extend: {
      spacing: {
        '0.25': '1px',
        'container': '42.5rem',
        'sm-card': '8.7857rem',
        'fit-content': 'fit-content',
        '12/12': '100%'
      },
      maxWidth: {
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '12/12': '100%',
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
    // basis: {
    //   '3/12': '25%'
    // },

  },

  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      pointerEvents: ['disabled'],
      backgroundColor: ['checked'],
      // padding:['first'],
      // padding:['odd','even'],
      // paddingLeft:['odd','even'],
      paddingLeft: ['odd'],
    },
  },
  plugins: [],
}
