'use client';
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { tareasType } from '@/source/tareas';
import { Box, Typography } from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

interface TareaCheckProps {
   tareas: tareasType[];
   label: string;
   todas?: boolean;
}

export default function TareaCheck({
   tareas,
   label,
   todas = false,
}: TareaCheckProps) {
   return (
      <FormGroup>
         {todas && (
            <Box
               component="section"
               sx={{ p: 1, border: '1px dashed grey', background: 'white' }}
            >
               <AccessTimeFilledIcon />
               <Typography variant="h5" component="h5" sx={{ color: 'black' }}>
                  {label}
               </Typography>
            </Box>
         )}

         {tareas.map((tarea: tareasType) => (
            <FormControlLabel
               control={<Checkbox />}
               label={tarea.titulo}
               key={tarea.id}
            />
         ))}
      </FormGroup>
   );
}
