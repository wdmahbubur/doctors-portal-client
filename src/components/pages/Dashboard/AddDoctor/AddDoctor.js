import React from 'react';
import { Typography, TextField, Button } from '@mui/material';

const AddDoctor = () => {

    const addNewDoctor = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <Typography variant="h6">
                Add New Doctor
            </Typography>
            <form onSubmit={addNewDoctor}>
                <TextField id="standard-basic" label="Standard" variant="standard" />
                <Button type="submit" variant="contained">Add Doctor</Button>
            </form>
        </div>
    );
};

export default AddDoctor;