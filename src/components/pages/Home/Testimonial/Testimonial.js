import { Container, Box, Typography, Card, CardHeader, Avatar, CardContent, Grid } from '@mui/material';
import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <Box sx={{ py: 5 }}>
            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ mt: 1 }}>
                        <Typography variant="subtitle1" sx={{ color: '#5FC7C7', fontWeight: '700', mb: 1 }}>
                            TESTIMONIAL
                        </Typography>
                        <Typography variant="h4" sx={{ color: '#203047', fontWeight: '700' }}>
                            What’s Our Patients <br />
                            Says
                        </Typography>
                    </Box>
                    <img src="https://i.ibb.co/PNNSvcf/quate-icon.png" alt="" style={{ width: 160 }} />
                </Box>
                <Box sx={{ py: 8 }}>
                    <Grid container spacing={4}>
                        <Grid item md={4}>
                            <Card sx={{ width: 345, px: 2, py: 3 }}>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                                        It is a long established fact that
                                        by the readable content of a lot
                                        layout. The point of using Lorem
                                        a more-or-less normal distribu
                                        to using ‘Content here, content
                                    </Typography>
                                </CardContent>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe">
                                            <img src="https://i.ibb.co/rxrBGnT/people-1.png" alt="" style={{ width: '100%' }} />
                                        </Avatar>
                                    }
                                    title="Winson Herry"
                                    subheader="California"
                                />
                            </Card>
                        </Grid>
                        <Grid item md={4}>
                            <Card sx={{ width: 345, px: 2, py: 3 }}>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                                        It is a long established fact that
                                        by the readable content of a lot
                                        layout. The point of using Lorem
                                        a more-or-less normal distribu
                                        to using ‘Content here, content
                                    </Typography>
                                </CardContent>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe">
                                            <img src="https://i.ibb.co/RgSD6mB/people-2.png" alt="" style={{ width: '100%' }} />
                                        </Avatar>
                                    }
                                    title="Winson Herry"
                                    subheader="California"
                                />
                            </Card>
                        </Grid>
                        <Grid item md={4}>
                            <Card sx={{ width: 345, px: 2, py: 3 }}>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                                        It is a long established fact that
                                        by the readable content of a lot
                                        layout. The point of using Lorem
                                        a more-or-less normal distribu
                                        to using ‘Content here, content
                                    </Typography>
                                </CardContent>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe">
                                            <img src="https://i.ibb.co/bNqKfVr/people-3.png" alt="" style={{ width: '100%' }} />
                                        </Avatar>
                                    }
                                    title="Winson Herry"
                                    subheader="California"
                                />
                            </Card>
                        </Grid>
                    </Grid>

                </Box>
            </Container >
        </Box >
    );
};

export default Testimonial;