// src/components/SearchFilterBar.js
import React from 'react';
import { Box, TextField, MenuItem } from '@mui/material';

const SearchFilterBar = ({ onSearch, onFilter }) => {
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3} p={1} sx={{ backgroundColor: '#fff', borderRadius: 1 }}>
            <TextField
                label="Search Events"
                variant="outlined"
                onChange={(e) => onSearch(e.target.value)}
                sx={{ flex: 1, mr: 2 }}
            />
            <TextField
                label="Filter By"
                select
                variant="outlined"
                onChange={(e) => onFilter(e.target.value)}
                sx={{ width: 200 }}
            >
                <MenuItem value="all">All Events</MenuItem>
                <MenuItem value="upcoming">Upcoming</MenuItem>
                <MenuItem value="past">Past</MenuItem>
                <MenuItem value="location">Location</MenuItem>
            </TextField>
        </Box>
    );
};

export default SearchFilterBar;
