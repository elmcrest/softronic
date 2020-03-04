module.exports = {
  theme: {
    extend: {
      spacing: {
        '80': '20rem',
        '108': '27rem',
      },
      borderWidth: {
        '14': '14px',
      }
    },
    container: {
      padding: '1rem'
    },
    colors: {
      background: {
        primary: 'var(--bg-background-primary)',
        secondary: 'var(--bg-background-secondary)',
        tertiary: 'var(--bg-background-tertiary)',

        form: 'var(--bg-background-form)',
      },

      copy: {
        primary: 'var(--text-copy-primary)',
        secondary: 'var(--text-copy-hover)',
      },

      'border-color': {
        primary: 'var(--border-border-color-primary)',
      },

      transparent: 'transparent',

      black: '#000',
      white: '#fff',
      green: {
        100: '#E4E0CC',
        200: '#C9C199',
        300: '#AEA366',
        400: '#938433',
        500: '#786600',
        600: '#605100',
        700: '#483D00',
        800: '#302800',
        900: '#181400',
      },
      gray: {
        100: '#F1EFED',
        200: '#E3DFDB',
        300: '#D5CFC9',
        400: '#C7BFB7',
        500: '#BAAFA5',
        600: '#948C84',
        700: '#6F6963',
        800: '#4A4642',
        900: '#252321',
      },
      orange: {
        100: '#F8E3CC',
        200: '#F1C899',
        300: '#EAAC66',
        400: '#E39133',
        500: '#DD7500',
        600: '#B05E00',
        700: '#844600',
        800: '#582F00',
        900: '#2C1700',
      },
      red: {
        100: '#F0CFCE',
        200: '#E29F9D',
        300: '#D36F6D',
        400: '#C53F3C',
        500: '#B70F0C',
        600: '#920C09',
        700: '#6D0907',
        800: '#490604',
        900: '#240302',
      },
      blue: {
        100: '#E4EAEF',
        200: '#C9D6DF',
        300: '#AEC2D0',
        400: '#93AEC0',
        500: '#799AB1',
        600: '#607B8D',
        700: '#485C6A',
        800: '#303D46',
        900: '#181E23',
      },
      brown: {
        100: '#E5DCD3',
        200: '#CCBAA8',
        300: '#B2977C',
        400: '#997551',
        500: '#805326',
        600: '#66421E',
        700: '#4C3116',
        800: '#33210F',
        900: '#191007',
      },
    },
    fontFamily: {
      sans: [
        'Nunito Sans',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ]
}
