'use client';
import AppBar from '@/components/AppBar';
import DateTabs from '@/components/DateTabs';
import { theme } from '@/utils/theme';
import { Box, Fab, ThemeProvider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function Home() {
   return (
      <div>
         <ThemeProvider theme={theme}>
            <AppBar></AppBar>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
               <Fab color="primary" aria-label="add" size="medium">
                  <AddIcon sx={{ mr: 1 }} />
               </Fab>
            </Box>
            <Box sx={{ display: 'flex' }}>
               <DateTabs></DateTabs>
            </Box>
         </ThemeProvider>
      </div>
   );
}
