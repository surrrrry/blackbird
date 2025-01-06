import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#ff1744',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '--background': '#f7f6f3', // assuming you have a light grey background
        },
      },
    },
  },
});

export default theme;