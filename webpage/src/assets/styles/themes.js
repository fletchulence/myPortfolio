import { red, green, blue, orange, brown, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: green[900],
      text: '#014421',
      borders: green.A100,
    },
    secondary: {
      main: blue.A100,
    },
    tertiary: {
      main: orange[200],
      text: orange[100],
    },
    shadow:  brown[100],
    error: {
      main: red.A400,
    },
  },
  breakpoints: {
    mobileS: `min-width: 330px`,
    mobileM: `min-width: 400px`,
    mobileL: `min-width: 480px`,
    tabletS: `min-width: 600px`,
    tabletL: `min-width: 768px`,
    desktopXS: `min-width: 900px`,
    desktopS: `min-width: 1080px`,
    desktopM: `min-width: 1200px`,
    desktopL: `min-width: 1400px`,
  },
});

export default theme;
