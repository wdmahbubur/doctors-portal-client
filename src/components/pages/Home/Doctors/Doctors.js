import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Doctor from './Doctor/Doctor';

const doctors = [
    {
        id: 1,
        name: 'Rased Karim',
        phone: '+61 452 200 126',
        img: 'https://i.ibb.co/MkhzjNk/doctor-small.png'
    },
    {
        id: 2,
        name: 'Rased Karim',
        phone: '+61 452 200 126',
        img: 'https://i.ibb.co/MkhzjNk/doctor-small.png'
    },
    {
        id: 3,
        name: 'Rased Karim',
        phone: '+61 452 200 126',
        img: 'https://i.ibb.co/MkhzjNk/doctor-small.png'
    }
]

const Doctors = () => {
    return (
        <Container sx={{ py: 5 }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="subtitle1" sx={{ color: '#5FC7C7', fontWeight: '700' }}>
                    OUR DOCTORS
                </Typography>
            </Box>
            <Box sx={{ mt: 8 }}>
                <Grid container spacing={2}>
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            title={doctor.name}
                            img={doctor.img}
                            body={doctor.phone}
                        />)
                    }


                </Grid>
            </Box>
        </Container>
    );
};

export default Doctors;