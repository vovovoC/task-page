import { TextField } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface IDate{
    value: string | null;
    labelName: string;
}

export const DateItem = (props: IDate) => {
    const {labelName,value} = props;
    return(
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
            renderInput={(props: any) => <TextField {...props} />}
            label={labelName}
            value={value}
            onChange={(newValue: any) => {
            //setDate(newValue);
            }}
        />
        </LocalizationProvider>
    )
}