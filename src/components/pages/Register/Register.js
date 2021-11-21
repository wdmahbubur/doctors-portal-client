import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography, TextField, Button, Link } from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Loading from '../../Loading/Loading';
import MessageModal from '../../MessageModal/MessageModal';
import Navbar2 from '../../Header/Navbar2';
import GoogleIcon from '@mui/icons-material/Google';


const Register = () => {
    const [data, setData] = useState({});
    const { register, user, error, loading, googleSignIn } = useAuth();

    const [open, setOpen] = React.useState(true);

    const location = useLocation();
    const navigate = useNavigate();

    const url = location.state?.from?.pathname || "/dashboard";
    useEffect(() => {
        if (user?.email) {
            navigate(url, { replace: true })
        }
    })

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...data };
        newData[field] = value;
        setData(newData);
    }
    const handleOnSubmit = e => {
        setOpen(true);
        register(data.name, data.email, data.password);
        e.preventDefault();

    }

    return (
        <Box>
            <Navbar2 />
            <Container >
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item md={6} sx={{ textAlign: 'center', color: '#686868' }}>

                        <Box sx={{ boxShadow: 1, mt: 4, p: 9 }}>
                            <form onSubmit={handleOnSubmit}>
                                <Typography variant="h6" sx={{ mb: 7 }}>
                                    Register
                                </Typography>
                                <TextField
                                    label="Name"
                                    type="text"
                                    name="name"
                                    onChange={handleOnChange}
                                    variant="standard"
                                    required
                                    sx={{ width: 1, mb: 3 }}
                                />
                                <TextField
                                    label="Email"
                                    type="email"
                                    name="email"
                                    onChange={handleOnChange}
                                    variant="standard"
                                    required
                                    sx={{ width: 1 }}
                                />
                                <TextField
                                    label="Password"
                                    type="password"
                                    name="password"
                                    onChange={handleOnChange}
                                    variant="standard"
                                    required
                                    sx={{ width: 1, my: 3 }}
                                />
                                <Button variant="contained" type="submit" sx={{ bgcolor: '#19D3AE', boxShadow: 'none', borderRadius: 0, width: 1, mt: 4 }}
                                >Register</Button>
                            </form>
                            <Typography variant="body1" sx={{ mt: 2 }}>
                                Already have a account? <Link as={NavLink} to="/login" sx={{ color: 'info.main' }} > Please Login</Link>
                            </Typography>
                            <hr />
                            <Button variant="contained" onClick={googleSignIn}><GoogleIcon sx={{ mr: 1 }} />Login With Google</Button>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <img src="https://i.ibb.co/6Z91yh6/login.png" alt="" style={{ width: '40%', height: '86vh', position: 'fixed', bottom: 0, right: 40 }} />
                    </Grid>
                </Grid>
                {loading && <Loading />}
                {user?.email && <MessageModal status={true} message="Registration Success" setOpen={setOpen} open={open} />}
                {error && <MessageModal status={false} message={error} setOpen={setOpen} open={open} />}

            </Container>
        </Box>
    );
};

export default Register;