import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"
import { useState } from "react"

const TabsContainer = styled(Box)(({ theme }) => ( {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    display:'flex', 
    alignItems:'center',
    justifyContent:'space-between',
    padding:'0px 10px'
}));

export const TabsList = () => {
    const [currentTab, setTab] = useState("inprogress");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setTab(newValue);
      };

    return(  
      <TabsContainer>
        <Tabs value={currentTab} onChange={handleChange}>
            <Tab label="Текущие задачи" value="inprogress" sx={{margin:'5px'}}/>
            <Tab label="Завершенные задачи" value="done" sx={{margin:'5px'}}/>
        </Tabs>  
        <Button variant="contained" sx={{fontSize:'14px', textTransform:'capitalize'}}>Добавить задачу</Button>
      </TabsContainer>
    )}