'use client';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import { TabContext } from '@mui/lab';
import TareaCheck from './TareaCheck';
import tareas from '@/source/tareas.json';

export default function DateTabs() {
   const [value, setValue] = React.useState(0);

   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
   };

   return (
      <div>
         <TabContext value={value}>
            <Box
               sx={{
                  maxWidth: { xs: 320, sm: 480 },
                  bgcolor: 'background.paper',
               }}
            >
               <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                  aria-label="scrollable force tabs example"
               >
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
               </Tabs>
            </Box>
            <TareaCheck></TareaCheck>
            <TabPanel value="1">
               <div>{JSON.stringify(tareas)}</div>
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
         </TabContext>
      </div>
   );
}
