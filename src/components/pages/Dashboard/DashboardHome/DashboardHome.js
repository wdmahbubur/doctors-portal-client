import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import Calender from '../../../Calender/Calender';
import Appointments from './Appointments/Appointments';
import Loading from '../../../Loading/Loading';
const DashboardHome = () => {
    const [loading, setLoading] = useState(false);

    const [date, setDate] = useState(new Date());
    return (
        <Grid container spacing={2}>
            {
                loading && <Loading />
            }
            <Grid item md={4}>
                <Box sx={{ width: 1, boxShadow: 2, borderRadius: 2 }}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Box>
            </Grid>
            <Grid item md={8}>
                <Appointments date={date} setLoading={setLoading} loading={loading}></Appointments>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;