import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import useAuth from '../../../../../hooks/useAuth';


const Appointments = ({ date, setLoading }) => {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        setLoading(true);
        axios.get(`https://fathomless-lake-90403.herokuapp.com/bookings/?userId=${user.uid}&date=${date.toLocaleDateString()}`)
            .then(response => {
                setAppointments(response.data);
            })
            .finally(() => setLoading(false))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date])
    return (
        <Box sx={{ width: 1, boxShadow: 2, borderRadius: 2, py: 4, px: 5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="subtitle1" sx={{ color: '#5FC7C7', fontWeight: '700' }}>
                    Appointments
                </Typography>
                <Typography variant="body1" sx={{ color: '#8B8888' }}>
                    {date.toDateString()}
                </Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Schedule</TableCell>
                            <TableCell>Service</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {appointments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row.name}</TableCell>
                                <TableCell >{row.time}</TableCell>
                                <TableCell >{row.title}</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    );
};

export default Appointments;