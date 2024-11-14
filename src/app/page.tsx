'use client';
import DateTabs from '@/components/DateTabs';
import { Typography } from '@mui/material';

export default function Home() {
   return (
      <div>
         <Typography variant="h2" component="h2">
            Gestión de tareas
         </Typography>

         <DateTabs></DateTabs>
      </div>
   );
}
