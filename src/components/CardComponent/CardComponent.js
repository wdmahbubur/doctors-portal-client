import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const CardComponent = ({ service }) => {
    const { title, img, shortDesc } = service;
    return (
        <Grid item md={4}>
            <Card sx={{ maxWidth: 345, textAlign: 'center', boxShadow: 'none' }} >
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="120"
                    width="auto"
                    image={img}
                    sx={{ width: 'auto', mx: 'auto' }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {shortDesc}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default CardComponent;