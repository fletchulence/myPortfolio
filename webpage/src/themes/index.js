import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#689764',
    },
    secondary: {
      main: '#977f64',
    },
    tertiary: {
      main: '#746497',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
