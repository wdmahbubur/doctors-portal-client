import React from 'react';
import { Button, Container, Grid, Typography, Box } from '@mui/material';

const HomeBanner = () => {
    const banner = {
        background: 'url(https://i.ibb.co/BfP5cpX/bg.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <Box>
            <Container sx={{ py: 24 }} style={banner}>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={5}>
                        <Typography variant="h3" sx={{ fontWeight: 600, color: '#3A4256' }}>
                            Your New Smile Starts Here
                        </Typography>
                        <Typography variant="body2" sx={{ my: 5, width: '80%', color: '#B4B4B4' }} >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nesciunt unde, enim itaque quae ut impedit consequatur obcaecati architecto alias!
                        </Typography>
                        <Button variant="contained" sx={{ bgcolor: '#19D3AE', boxShadow: 'none', borderRadius: 0 }}>GET APPOINTMENT</Button>
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <img src="https://i.ibb.co/XYBcrBv/chair.png" alt="" style={{ width: '100%', height: 400 }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HomeBanner;