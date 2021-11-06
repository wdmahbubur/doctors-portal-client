import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { Box } from '@mui/material';
import './Calender.css';

const Calender = ({ date, setDate }) => {

    return (
        <Box sx={{ mt: 5, mb: -30, width: 320, boxShadow: 2, borderRadius: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    openTo="day"
                    value={date}
                    onChange={(newValue) => {
                        setDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </Box>

    );
};

export default Calender;