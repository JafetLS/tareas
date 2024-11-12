import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function TareaCheck() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Tarea" />
      <FormControlLabel control={<Checkbox />} label="Tarea2" />
      <FormControlLabel control={<Checkbox />} label="Tarea3" />
      <FormControlLabel control={<Checkbox />} label="Tarea4" />
      
    </FormGroup>
  );
}
