import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import useAuth from '../../../../../hooks/useAuth';
import axios from 'axios';
import MessageModal from '../../../../MessageModal/MessageModal';
import Loading from '../../../../Loading/Loading';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    borderRadius: 5,
    boxShadow: 24,
    py: 4,
    px: 14
};
const BookAppointment = ({ open, setOpen, handleClose, appointment, date }) => {
    const { title, time } = appointment;
    const { user } = useAuth();
    const initialInfo = { name: user.displayName, email: user.email, number: '', title: title, time: time, date: date.toLocaleDateString() }

    const [openMessage, setOpenMessage] = useState(true);
    const [status, setStatus] = useState(false);
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState(initialInfo);
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...data };
        newData[field] = value;
        setData(newData);
    }

    const handleBooking = (e) => {
        setLoading(true);
        axios.post('http://localhost:5000/bookings', {
            data: data
        }).then(response => {
            if (response.data) {
                setLoading(false);
                setOpen(false);
                setStatus(true);
            }
        })
        e.preventDefault();
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" sx={{ color: '#1CC7C1', fontWeight: '700', textAlign: 'center' }}>
                            {title}
                        </Typography>
                        <Box sx={{ width: '100%', mx: 'auto', mt: 4 }}>
                            <form onSubmit={handleBooking}>
                                <TextField
                                    name="time"
                                    type="text"
                                    value={time}
                                    size="small"
                                    disabled
                                    onChange={handleOnChange}
                                    sx={{ width: '100%', mb: 2, bgcolor: 'transparent' }}
                                />
                                <TextField
                                    name="name"
                                    label="Your Name"
                                    type="text"
                                    size="small"
                                    defaultValue={user.displayName}
                                    required
                                    onChange={handleOnChange}
                                    sx={{ width: '100%', mb: 2 }}
                                />
                                <TextField
                                    name="email"
                                    label="Email"
                                    type="email"
                                    size="small"
                                    defaultValue={user.email}
                                    onChange={handleOnChange}
                                    sx={{ width: '100%', mb: 2 }}
                                />
                                <TextField
                                    name="number"
                                    label="Phone Number"
                                    type="text"
                                    size="small"
                                    required
                                    onChange={handleOnChange}
                                    sx={{ width: '100%', mb: 2 }}
                                />
                                <TextField
                                    name="date"
                                    type="text"
                                    size="small"
                                    disabled
                                    value={date.toDateString()}
                                    onChange={handleOnChange}
                                    sx={{ width: '100%', mb: 2 }}
                                />
                                <Button type="submit" variant="contained" sx={{ bgcolor: '#19D3AE', boxShadow: 'none', borderRadius: 0, width: 150, float: 'right' }}>Submit</Button>
                            </form>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
            {
                status && <MessageModal status={true} message="Booking Success" setOpen={setOpenMessage} open={openMessage} />
            }
            {
                loading && <Loading />
            }

        </div>
    );
};

export default BookAppointment;