export const colors = {
  background: {
    primary: '#1A122B',
    secondary: '#1F1632',
    tertiary: '#2D294A',
    quaternary: '#392F4F',
    quinary: '#403755',
  },
  gradient: {
    start: '#1F1632',
    end: '#392F4F',
  },
  brand: {
    red: '#EA4335',
    yellow: '#FBBC05',
    blue: '#4285F4',
  },
  gray: {
    100: '#D9D9D9',
    200: '#9D9AA5',
    300: '#979CA4',
  },
  white: {
    100: '#FFFFFF', // 100%
    40: '#FFFFFF66', // 40%
    15: '#FFFFFF26', // 15%
  },
  button: {
    hover: {
      gray: {
        primary: '#B2B2B2',
        blue: '#2E5DAB',
      },
      darkGray: {
        primary: '#6A6D73',
        secondary: '#989898',
      },
      red: {
        primary: '#B2B2B2',
        secondary: '#A42F25',
      },
      yellow: {
        primary: '#B2B2B2',
        secondary: '#B08404',
      },
      dark: {
        primary: '#1F1A2C',
        secondary: '#FFFFFFB3', // 70%
      },
    },
  },
} as const;

export const typography = {
  bold: {
    h1: '40px',
    h2: '36px',
    h3: '24px',
    h4: '16px',
    h5: '14px',
    h6: '10px',
  },
  medium: {
    h1: '20px',
    h2: '16px',
    h3: '14px',
    h4: '13px',
    h5: '12px',
  },
  regular: {
    h1: '20px',
    h2: '16px',
    h3: '14px',
    h4: '12px',
    h5: '10px',
  },
  light: {
    h1: '36px',
    h2: '32px',
    h3: '16px',
    h4: '14px',
    h5: '13px',
    h6: '10px',
  },
} as const;

export type Colors = typeof colors;
export type Typography = typeof typography;
