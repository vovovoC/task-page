import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles";
import { BoxPattern } from "../../components/BoxPattern";
import Header from "../../components/Header"
import { ListItems } from "../../components/ListItems"
import { TabsList } from "../../components/Tabs"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import { SelectList } from "../../components/SelectList";
import { DateItem } from "../../components/DateItem";

export const TaskLayout = () =>{
const [date, setDate] = useState(null);

const list  = [
    {
        name: 'name',
        value: 'value'
    }
]
    return(
        <div className="div">
            <ListItems/>
           <Header/>
           <BoxPattern>
            <TabsList/>    
            <Box sx={{margin:'20px'}}>
            <TextField id="outlined-basic" label="Поиск по наименованию" variant="outlined" />
            <DateItem
                labelName="Период от"
                value={null}         
            />
            <DateItem
                labelName="Период до"
                value={null}         
            />

            
            <SelectList
                labelName = 'Исполнитель'
                list = {list}
                labelId = 'executor'       
            />
             <SelectList
                labelName = 'Пациент'
                list = {list}
                labelId = 'patient'       
            />
             <SelectList
                labelName = 'Прием'
                list = {list}
                labelId = 'reception'       
            />
           </Box> 
           </BoxPattern>
          
        </div>
    )
}