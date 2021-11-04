import { Container, Box, Typography, TextField, Button } from '@mui/material';
import React from 'react';

const appointmentStyle = {
    background: 'url(https://i.ibb.co/xJLHpZx/appointment-bg.png)',
    backgroundPosition: 'center',
    backgroundColor: '#1B2339',
    backgroundBlendMode: 'multiply'

}
const ContactForm = () => {
    return (
        <Box sx={{ mt: 12, mb: 5 }} style={appointmentStyle}>
            <Container sx={{ pt: 8, pb: 16 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="subtitle1" sx={{ color: '#5FC7C7', fontWeight: '700', mb: 1 }}>
                        CONTACT US
                    </Typography>

                    <Typography variant="h4" sx={{ color: '#fff', fontWeight: '700' }}>
                        Always Connect with us
                    </Typography>
                </Box>
                <Box sx={{ width: '60%', mx: 'auto', mt: 8, textAlign: 'center' }}>
                    <form>
                        <TextField
                            id="email"
                            label="Email"
                            type="email"
                            variant="filled"
                            sx={{ background: '#fff', width: '100%', mb: 4 }}
                        />
                        <TextField
                            id="subject"
                            label="Subject"
                            type="text"
                            variant="filled"
                            sx={{ background: '#fff', width: '100%', mb: 4 }}
                        />
                        <TextField
                            id="message"
                            label="Message"
                            variant="filled"
                            multiline
                            rows={4}
                            sx={{ background: '#fff', width: '100%', mb: 4 }}
                        />
                        <Button variant="contained" sx={{ bgcolor: '#19D3AE', boxShadow: 'none', borderRadius: 0, width: 200 }}>Submit</Button>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default ContactForm;