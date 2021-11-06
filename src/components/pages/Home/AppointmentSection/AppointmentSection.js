import { Container, Box, Grid, Typography, Button } from '@mui/material';
import React from 'react';

const AppointmentSection = ({ getAppointment }) => {
    const appointmentStyle = {
        background: 'url(https://i.ibb.co/xJLHpZx/appointment-bg.png)',
        backgroundPosition: 'center',
        backgroundColor: '#1B2339',
        backgroundBlendMode: 'multiply'

    }
    return (
        <Box sx={{ mt: 12, mb: 5 }} style={appointmentStyle}>
            <Container>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item md={5}>
                        <img src="https://i.ibb.co/tXMN02q/doctor.png" alt="" style={{ width: '100%', marginTop: -120, marginBottom: -4, height: '100%' }} />
                    </Grid>
                    <Grid item md={7}>
                        <Typography variant="subtitle1" sx={{ color: '#5FC7C7', fontWeight: '700', mb: 1 }}>
                            APPOINTMENT
                        </Typography>
                        <Typography variant="h4" sx={{ color: '#fff', fontWeight: '700' }}>
                            Make an appointment <br />
                            Today
                        </Typography>
                        <Typography variant="body1" display="block" gutterBottom sx={{ width: { md: '80%' }, my: 5, lineHeight: 2, color: '#fff' }}>
                            It is a long established fact that a reader will be distractedby the readable
                            content of a page when looking at its
                        </Typography>
                        <Button variant="contained" sx={{ bgcolor: '#19D3AE', boxShadow: 'none', borderRadius: 0 }}
                            onClick={getAppointment}>GET APPOINTMENT</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentSection;