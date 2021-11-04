import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Features = () => {
    return (
        <Container sx={{py: 5}}>
            <Grid container spacing={4} sx={{ alignItems: 'center' }}>
                <Grid item md={5}>
                    <img src="https://i.ibb.co/N6Czb8h/treatment.png" alt="" style={{ width: '100%', height: 500 }} />
                </Grid>
                <Grid item md={7}>
                    <Typography variant="h4" sx={{ fontWeight: 600, color: '#203047', }}>
                        Exceptional Dental <br />
                        Care, on Your Terms
                    </Typography>
                    <Typography variant="body1" display="block" gutterBottom sx={{ width: { md: '80%' }, my: 5, lineHeight: 2, color: '#989898' }}>
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its
                        layout. The point of using Lorem Ipsumis that it has
                        a more-or-less normal distribution of letters,as opposed
                        to using ‘Content here, content here’, making it look like
                        readable English. Many desktop publishing packages
                        and web page
                        a more-or-less
                        a more-or-less normal distribution of letters,as opposed
                        to using ‘Content here, content here’, making it look like
                        readable English. Many desktop publishing packages
                        and web page
                    </Typography>
                    <Button variant="contained" sx={{ bgcolor: '#19D3AE', boxShadow: 'none', borderRadius: 0 }}>Learn More</Button>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Features;