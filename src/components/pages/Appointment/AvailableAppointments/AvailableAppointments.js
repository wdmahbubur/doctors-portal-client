import { Container, Box, Typography, Grid } from '@mui/material';
import React from 'react';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
const appointments = [
    {
        id: 1,
        title: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        space: '10'
    },
    {
        id: 2,
        title: 'Cosmetic Dentistry',
        time: '10:05 am – 11:30 am',
        space: '10'
    },
    {
        id: 3,
        title: 'Teeth Cleaning',
        time: '  5:00 pm – 6:30 pm',
        space: '10'
    },
    {
        id: 4,
        title: 'Cavity Protection',
        time: '7:00 am – 8:30 am',
        space: '10'
    },
    {
        id: 5,
        title: 'Teeth Orthodontics',
        time: '8: 00 AM - 9: 00 AM',
        space: '10'
    },
    {
        id: 6,
        title: 'Cosmetic Dentistry',
        time: '10:05 am – 11:30 am',
        space: '10'
    },

]
const AvailableAppointments = ({ date }) => {
    return (
        <Container sx={{ mt: 5, py: 10 }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ color: '#1CC7C1', fontWeight: '700', mb: 1 }}>
                    Available Appointments on {date.toDateString()}
                </Typography>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    {
                        appointments.map(appointment => <AvailableAppointment
                            key={appointment.id}
                            appointment={appointment}
                            date={date}
                        />)
                    }
                </Grid>
            </Box>
        </Container>

    );
};

export default AvailableAppointments;