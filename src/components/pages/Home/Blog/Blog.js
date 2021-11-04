import { Container, Box, Typography, Grid, Card, CardContent, CardHeader, Avatar } from '@mui/material';
import React from 'react';

const Blog = () => {
    return (
        <Container sx={{ py: 5 }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="subtitle1" sx={{ color: '#5FC7C7', fontWeight: '700', mb: 1 }}>
                    OUR BLOG
                </Typography>

                <Typography variant="h4" sx={{ color: '#203047', fontWeight: '700' }}>
                    From Our Blog News
                </Typography>
            </Box>
            <Box sx={{ mt: 14 }}>
                <Grid container spacing={8}>
                    <Grid item md={4}>
                        <Card sx={{ width: 345, px: 2, py: 3 }}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe">
                                        <img src="https://i.ibb.co/bNqKfVr/people-3.png" alt="" style={{ width: '100%' }} />
                                    </Avatar>
                                }
                                title="Dr. Caudi"
                                subheader="01 November 2021"
                            />
                            <CardContent>
                                <Typography variant="h6" sx={{ mb: 2, }}>
                                    2 times of brush in a day can
                                    Keep you healthy
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, width: '70%' }}>
                                    It is a long established fact that
                                    by the readable content of a lot
                                    layout. The point
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card sx={{ width: 345, px: 2, py: 3 }}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe">
                                        <img src="https://i.ibb.co/bNqKfVr/people-3.png" alt="" style={{ width: '100%' }} />
                                    </Avatar>
                                }
                                title="Dr. Caudi"
                                subheader="01 November 2021"
                            />
                            <CardContent>
                                <Typography variant="h6" sx={{ mb: 2, }}>
                                    2 times of brush in a day can
                                    Keep you healthy
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, width: '70%' }}>
                                    It is a long established fact that
                                    by the readable content of a lot
                                    layout. The point
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card sx={{ width: 345, px: 2, py: 3 }}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe">
                                        <img src="https://i.ibb.co/rxrBGnT/people-1.png" alt="" style={{ width: '100%' }} />
                                    </Avatar>
                                }
                                title="Dr. John Mitchel"
                                subheader="05 November 2021"
                            />
                            <CardContent>
                                <Typography variant="h6" sx={{ mb: 2, }}>
                                    The tooth cancer is taking a
                                    challenge
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, width: '70%' }}>
                                    It is a long established fact that
                                    by the readable content of a lot
                                    layout. The point
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Blog;