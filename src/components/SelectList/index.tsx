import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface IListitem {
    name:string;
    value: string;
}

interface ISelectList{
    list: IListitem[];
    labelName: string;
    labelId: string;
}

export const SelectList = (props: ISelectList) => {
    const {list, labelName,labelId} = props;
    return(
        <FormControl variant="outlined" sx={{minWidth: '250px'}}>
                <InputLabel id={labelId}>{labelName}</InputLabel>
                <Select
                    labelId={labelId}
                    // value={}
                    label={labelName}
                //  onChange={handleChange}
                >                   
                   {
                       list.map((item: IListitem,index: number)=>{
                       return <MenuItem value={item.value} key={index}>{item.name}</MenuItem>
                       })
                   }
                </Select>
            </FormControl>
    )
}