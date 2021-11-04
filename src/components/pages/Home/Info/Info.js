import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomIcon from '@mui/icons-material/Room';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const Info = () => {
    return (
        <Container sx={{ mt: -12 }}>
            <Box>
                <Grid container spacing={2}>
                    <Grid item md={4}>
                        <Paper elevation={0} sx={{ bgcolor: '#1CC7C1', display: 'flex', px: 5, py: 4, gap: 2, color: '#fff', alignItems: 'center' }}>
                            <AccessTimeIcon sx={{ fontSize: 70 }} />
                            <Box>
                                <Typography variant="h6">Opening Hours</Typography>
                                <Typography variant="caption">Lorem Ipsum is simply</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <Paper elevation={0} sx={{ bgcolor: '#3A4256', display: 'flex', px: 5, py: 4, gap: 2, color: '#fff', alignItems: 'center' }}>
                            <RoomIcon sx={{ fontSize: 70 }} />
                            <Box>
                                <Typography variant="h6">Visit our location</Typography>
                                <Typography variant="caption">Brooklyn, NY 10036, United States </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <Paper elevation={0} sx={{ bgcolor: '#1CC7C1', display: 'flex', px: 5, py: 4, gap: 2, color: '#fff', alignItems: 'center' }}>
                            <PhoneInTalkIcon sx={{ fontSize: 70 }} />
                            <Box>
                                <Typography variant="h6">Contact us now</Typography>
                                <Typography variant="caption">+000 123 456789</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    );
};

export default Info;