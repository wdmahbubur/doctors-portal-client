import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, TextField, Button, Box } from '@mui/material';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import useAuth from '../../../../hooks/useAuth';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddAdmin = () => {
    const [users, setUsers] = useState([]);
    let count = 1;
    const [open, setOpen] = React.useState(false);
    const { token } = useAuth();

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(response => {
                setUsers(response.data)
            })
    }, [open])

    const addNewAdmin = (e) => {
        const email = e.target.email.value;
        axios.put(`http://localhost:5000/users/${email}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.data.modifiedCount > 0) {
                    e.target.email.value = '';
                    handleClick();
                }
            })
        e.preventDefault();
    }

    const handleClick = () => setOpen(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <div>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ mb: 3 }}>
                    Add New Admin
                </Typography>
                <form onSubmit={addNewAdmin}>
                    <TextField name="email" label="Email" variant="standard" required sx={{ width: '25%' }} />
                    <Button type="submit" variant="contained" >Add Admin</Button>
                </form>
            </Box>
            <TableContainer component={Paper} sx={{ mt: 5 }}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Role</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow
                                key={user._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{count++}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell >{user.email}</TableCell>
                                <TableCell >{user?.role || "User"}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    New Admin Create Success
                </Alert>
            </Snackbar>
        </div>
    );
};

export default AddAdmin;