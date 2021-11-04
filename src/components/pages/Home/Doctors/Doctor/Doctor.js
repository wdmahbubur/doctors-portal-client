import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


const Doctor = ({ title, img, body }) => {
    return (
        <Grid item md={4}>
            <Card sx={{ maxWidth: 345, textAlign: 'center', boxShadow: 'none' }} >
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="220"
                    image={img}
                    sx={{ width: 'auto', mx: 'auto' }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{ color: '#565E69' }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#B4B4B4', display: 'flex', justifyContent: 'center' }}>
                        <LocalPhoneIcon sx={{ color: '#5FC7C7', fontSize: '20px' }} />{body}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Doctor;