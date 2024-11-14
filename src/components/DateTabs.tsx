import * as React from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import { TabContext, TabList } from '@mui/lab';
import tareas from '@/source/tareas.json';
import TareaCheck from './TareaCheck';

export default function DateTabs() {
   const [value, setValue] = React.useState('0');

   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
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
                  />
               ))}
            </TabPanel>
         </TabContext>
      </div>
   );
}
