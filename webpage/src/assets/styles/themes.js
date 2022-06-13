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
    mobileS: `max-width: 330px`,
    mobileM: `max-width: 400px`,
    mobileL: `max-width: 480px`,
    tabletS: `max-width: 600px`,
    tabletL: `max-width: 768px`,
    desktopXS: `max-width: 900px`,
    desktopS: `max-width: 1080px`,
    desktopM: `max-width: 1200px`,
    desktopL: `max-width: 1400px`,
  },
});

export default theme;
