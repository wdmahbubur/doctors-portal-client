import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box>
            <Container sx={{ textAlign: 'center', py: 2 }}>
                <Typography variant="body1">
                    Copyright 2021. All Right Reserved by Mahbubur Rahman
                </Typography>
            </Container>
        </Box>
    );
};
export default Footer;