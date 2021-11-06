import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import Calender from '../../../Calender/Calender';

const AppointmentBanner = ({ date, setDate }) => {

    const banner = {
        background: 'url(https://i.ibb.co/BfP5cpX/bg.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <Box>
            <Container sx={{ pt: 24, pb: 12 }} style={banner}>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={5}>
                        <Typography variant="h3" sx={{ fontWeight: 600, color: '#3A4256' }}>
                            Appointment
                        </Typography>
                        <Calender date={date} setDate={setDate}></Calender>
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <img src="https://i.ibb.co/XYBcrBv/chair.png" alt="" style={{ width: '100%', height: 400 }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentBanner;