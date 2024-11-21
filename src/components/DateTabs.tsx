import * as React from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import { TabContext, TabList } from '@mui/lab';
import tareas from '@/source/tareas.json';
import TareaCheck from './TareaCheck';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function DateTabs() {
   const [value, setValue] = React.useState('0');

   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
   };

   return (
      <Box
         sx={{
            bgcolor: 'background.paper',
            width: 500,
            position: 'relative',
            minHeight: 200,
         }}
      >
         <TabContext value={value}>
            <Box
               sx={{
                  maxWidth: { xs: 320, sm: 480 },
                  bgcolor: 'background.paper',
               }}
            >
               <TabList
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons
                  aria-label="scrollable force tabs example"
               >
                  <Tab label="Todas" value="0" />
                  <Tab label="Enero" value="1" />
                  <Tab label="Febrero" value="2" />
                  <Tab label="Marzo" value="3" />
                  <Tab label="Abril" value="4" />
                  <Tab label="Mayo" value="5" />
                  <Tab label="Junio" value="6" />
                  <Tab label="Julio" value="7" />
                  <Tab label="Agosto" value="8" />
                  <Tab label="Septiembre" value="9" />
                  <Tab label="Octubre" value="10" />
                  <Tab label="Noviembre" value="11" />
                  <Tab label="Diciembre" value="12" />
               </TabList>
            </Box>
            <TabPanel value="0">
               {tareas.map((mes) => (
                  <TareaCheck
                     tareas={mes.tareas}
                     label={mes.mes}
                     key={mes.mes}
                     todas
                  />
               ))}
            </TabPanel>

            <TabPanel value="1">
               <TareaCheck
                  tareas={tareas[0].tareas}
                  label={tareas[0].mes}
                  key={tareas[0].mes}
               />
            </TabPanel>
            <TabPanel value="2">
               <TareaCheck
                  tareas={tareas[1].tareas}
                  label={tareas[1].mes}
                  key={tareas[1].mes}
               />
            </TabPanel>
            <TabPanel value="3">
               <TareaCheck
                  tareas={tareas[2].tareas}
                  label={tareas[2].mes}
                  key={tareas[2].mes}
               />
            </TabPanel>
            <TabPanel value="4">
               <TareaCheck
                  tareas={tareas[3].tareas}
                  label={tareas[3].mes}
                  key={tareas[3].mes}
               />
            </TabPanel>
            <TabPanel value="5">
               <TareaCheck
                  tareas={tareas[4].tareas}
                  label={tareas[4].mes}
                  key={tareas[4].mes}
               />
            </TabPanel>
            <TabPanel value="6">
               <TareaCheck
                  tareas={tareas[5].tareas}
                  label={tareas[5].mes}
                  key={tareas[5].mes}
               />
            </TabPanel>
         </TabContext>

         <Fab color="primary" aria-label="add">
            <AddIcon />
         </Fab>
      </Box>
   );
}
