import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookAppointment from './BookAppointment/BookAppointment';

const AvailableAppointment = ({ appointment, date }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { title, time, space } = appointment;
    return (
        <>
            <Grid item md={4}>
                <Paper elevation={3} sx={{ textAlign: 'center', py: 4 }}>
                    <Typography variant="h5" sx={{ color: '#1CC7C1', fontWeight: '700', mb: 1 }}>
                        {title}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#3A4256', fontWeight: '700', mb: 1 }}>
                        {time}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#8B8888', fontWeight: '700', mb: 1, display: 'block' }}>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button variant="contained" sx={{ bgcolor: '#19D3AE', boxShadow: 'none', borderRadius: 0, mt: 1 }} onClick={handleOpen}>BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookAppointment open={open} setOpen={setOpen} handleClose={handleClose} appointment={appointment} date={date}></BookAppointment>
        </>
    );
};

export default AvailableAppointment;