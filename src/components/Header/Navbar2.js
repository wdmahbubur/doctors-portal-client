import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Divider, Link, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import { NavLink } from 'react-router-dom';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import useAuth from '../../hooks/useAuth';

const Navbar2 = ({ top }) => {
    const { user, logout } = useAuth();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ flexGrow: 1, position: 'fixed', width: '100%', zIndex: 1023, marginTop: top || '0', transition: 'all .5s linear' }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { md: 'none' } }}

                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" sx={{ flexGrow: 1 }}>
                        <Link as={NavLink} to='/' underline="none" sx={{ color: '#fff', flexGrow: 1 }}>
                            Doctors Portal
                        </Link>
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ mx: 3 }}>
                            <Link as={NavLink} to='/' underline="none" sx={{ color: '#fff' }}>
                                Home
                            </Link>
                        </Typography>

                        <Typography sx={{ mx: 3 }}>
                            <Link as={NavLink} to='/' underline="none" sx={{ color: '#fff' }}>
                                About
                            </Link>
                        </Typography>

                        <Typography sx={{ mx: 3 }}>
                            <Link as={NavLink} to='/' underline="none" sx={{ color: '#fff' }}>
                                Dental Services
                            </Link>
                        </Typography>

                        <Typography sx={{ mx: 3 }}>
                            <Link as={NavLink} to='/' underline="none" sx={{ color: '#fff' }}>
                                Reviews
                            </Link>
                        </Typography>

                        <Typography sx={{ mx: 3 }}>
                            <Link as={NavLink} to='/' underline="none" sx={{ color: '#fff' }}>
                                Blog
                            </Link>
                        </Typography>

                        <Typography sx={{ mx: 3 }}>
                            <Link as={NavLink} to='/' underline="none" sx={{ color: '#fff' }}>
                                Contact Us
                            </Link>
                        </Typography>

                        {
                            user?.email ? <Tooltip title="Account settings">
                                <IconButton onClick={handleClick} size="small" sx={{ ml: 2, color: '#fff' }}>
                                    {user.displayName}
                                    <Avatar sx={{ width: 32, height: 32, ml: 2 }}>M</Avatar>
                                </IconButton>
                            </Tooltip>
                                :
                                <Typography sx={{ mx: 3 }}>
                                    <Link as={NavLink} to='/login' underline="none" sx={{ color: '#fff' }}>
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
                        <MenuItem>
                            <Avatar /> Profile
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
                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Navbar2;