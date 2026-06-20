import { createTheme } from '@mui/material/styles';

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#4F46E5',
    },
  },

  shape: {
    borderRadius: 16,
  },

  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});