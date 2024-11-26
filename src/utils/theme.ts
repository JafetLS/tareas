import { createTheme } from '@mui/material';
import { blue } from '@mui/material/colors';

export const theme = createTheme({
   palette: {
      mode: 'light',
      primary: {
         main: blue[900],
         light: blue[300],
         dark: '#00ab56',
      },
   },
   typography: {
      h2: {
         fontSize: '2rem',
      },
   },
});
