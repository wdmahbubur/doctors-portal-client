import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import DoneIcon from '@mui/icons-material/Done';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
    textAlign: 'center'
};
const MessageModal = ({ status, message, setOpen, open }) => {
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        {
                            status ? <>
                                <DoneIcon sx={{ fontSize: 80, color: 'success.main' }} />
                                <Typography variant="h4" sx={{ fontWeight: '600', color: 'success.main' }}>
                                    {message}
                                </Typography>
                                <Button variant="contained" onClick={handleClose} sx={{ mt: 4, fontSize: 20 }}>Close</Button>
                            </>
                                : <>
                                    <ErrorOutlineIcon sx={{ fontSize: 80, color: 'error.main' }} />
                                    <Typography variant="h4" sx={{ fontWeight: '600', color: 'error.main' }}>
                                        {message}
                                    </Typography>
                                    <Button variant="contained" onClick={handleClose} sx={{ mt: 4, fontSize: 20 }}>Close</Button>
                                </>
                        }

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default MessageModal;