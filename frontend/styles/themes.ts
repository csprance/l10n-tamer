import { createTheme } from '@mui/material';

// https://cimdalli.github.io/mui-theme-generator/
// https://bareynol.github.io/mui-theme-creator/

// Create a theme instance.
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f2f2f2',
    },
    error: {
      main: '#F44336',
    },
    warning: {
      main: '#FFC107',
    },
    info: {
      main: '#2196F3',
    },
    success: {
      main: '#4CAF50',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196F3',
    },
    secondary: {
      main: '#e91e63',
    },
    background: {
      default: '#282A2E',
      paper: '#373c41',
    },
    error: {
      main: '#F44336',
    },
    warning: {
      main: '#FFC107',
    },
    info: {
      main: '#03A9F4',
    },
    success: {
      main: '#4CAF50',
    },
  },
});

const atomTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3271aa',
      contrastText: '#e6e6e6',
      light: '#717171',
      dark: '#676767',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#0a1929',
      paper: '#1b2635',
    },
    divider: 'rgba(214,214,214,0.12)',
  },
});

export const getTheme = (themeName: string) => {
  switch (themeName) {
    case 'light':
      return lightTheme;
    case 'dark':
      return darkTheme;
    case 'atom':
      return atomTheme;
    default:
      return darkTheme;
  }
};

export default darkTheme;
