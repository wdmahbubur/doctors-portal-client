import { Typography, Box, Container, Grid } from '@mui/material';
import React from 'react';
import CardComponent from '../../../CardComponent/CardComponent';
const services = [
    {
        id: 1,
        title: 'Fluoride Treatment',
        img: 'https://i.ibb.co/4gGpKkR/fluoride.png',
        shortDesc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the '
    },
    {
        id: 2,
        title: 'Cavity Filling',
        img: 'https://i.ibb.co/8mnJn03/cavity.png',
        shortDesc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the '
    },
    {
        id: 3,
        title: 'Teath Whitening',
        img: 'https://i.ibb.co/KqQkKjX/whitening.png',
        shortDesc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the '
    },
]
const Services = () => {
    return (
        <Container sx={{ py: 10 }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="subtitle1" sx={{ color: '#5FC7C7', fontWeight: '700', mb: 1 }}>
                    OUR SERVICES
                </Typography>

                <Typography variant="h4" sx={{ color: '#203047', fontWeight: '700' }}>
                    Services We Provide
                </Typography>
            </Box>
            <Box sx={{ mt: 14 }}>
                <Grid container spacing={2}>
                    {
                        services.map(service => <CardComponent
                            key={service.id}
                            service={service} />)
                    }


                </Grid>
            </Box>
        </Container>

    );
};

export default Services;