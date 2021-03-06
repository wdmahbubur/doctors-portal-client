import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Container, Link } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import DashboardIcon from '@mui/icons-material/Dashboard';

const Navbar = () => {
    const { user, logout } = useAuth();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    let navigate = useNavigate()

    const dashboard = () => {
        navigate('/dashboard')
    }
    return (
        <React.Fragment>
            <Container sx={{ position: 'relative' }}>
                <Box sx={{ position: 'absolute', width: '100%', top: 40 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#000' }}>
                        <Typography variant="h5">
                            <Link as={NavLink} to='/' underline="none" sx={{ color: '#0A0A0A' }}>
                                Doctors Portal
                            </Link>
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ mx: 3 }}>
                                <Link as={NavLink} to='/' underline="none" sx={{ color: '#0A0A0A' }}>
                                    Home
                                </Link>
                            </Typography>

                            <Typography sx={{ mx: 3 }}>
                                <Link as={NavLink} to='/' underline="none" sx={{ color: '#0A0A0A' }}>
                                    About
                                </Link>
                            </Typography>

                            <Typography sx={{ mx: 3 }}>
                                <Link as={NavLink} to='/' underline="none" sx={{ color: '#0A0A0A' }}>
                                    Dental Services
                                </Link>
                            </Typography>

                            <Typography sx={{ mx: 3 }}>
                                <Link as={NavLink} to='/' underline="none" sx={{ color: '#0A0A0A' }}>
                                    Reviews
                                </Link>
                            </Typography>

                            <Typography sx={{ mx: 3 }}>
                                <Link as={NavLink} to='/' underline="none" sx={{ color: '#0A0A0A' }}>
                                    Blog
                                </Link>
                            </Typography>

                            <Typography sx={{ mx: 3 }}>
                                <Link as={NavLink} to='/' underline="none" sx={{ color: '#0A0A0A' }}>
                                    Contact Us
                                </Link>
                            </Typography>
                            {
                                user?.email ? <Tooltip title="Account settings">
                                    <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                                        {user.displayName}
                                        <Avatar sx={{ width: 32, height: 32, ml: 2 }}>M</Avatar>
                                    </IconButton>
                                </Tooltip>
                                    :
                                    <Typography sx={{ mx: 3 }}>
                                        <Link as={NavLink} to='/login' underline="none" sx={{ color: '#0A0A0A' }}>
                                            Login
                                        </Link>
                                    </Typography>
                            }

                        </Box>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem onClick={dashboard}>
                                <DashboardIcon sx={{ width: '32px', height: '32px', ml: '-4px', mr: '8px', color: "text.secondary" }} /> Dashboard
                            </MenuItem>
                            <MenuItem>
                                <Avatar /> My account
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <PersonAdd fontSize="small" />
                                </ListItemIcon>
                                Add another account
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Settings
                            </MenuItem>
                            <MenuItem onClick={logout}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </Box>

                </Box>
            </Container>

        </React.Fragment>
    );
};

export default Navbar;