'use client';
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { tareasType } from '@/source/tareas';

interface TareaCheckProps {
   tareas: tareasType[];
   label: string;
   todas?: boolean;
}

export default function TareaCheck({ tareas, label, todas=false }: TareaCheckProps) {
   return (
      <FormGroup>

        {todas && (
          <FormControlLabel
          control={<Checkbox defaultChecked />}
          label={label}
       />
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
