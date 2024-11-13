// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <Drawer
        variant="permanent"
        sx={{
            width: 240,
            flexShrink: 0,
            display: { xs: 'none', md: 'block' },
            [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
        }}
    >
        <Toolbar />
        <Typography variant="h6" sx={{ padding: '1em' }}>Options</Typography>
        <List>
            <ListItem button component={Link} to="/">
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/dashboard">
                <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/login">
                <ListItemText primary="Login" />
            </ListItem>
            <ListItem button component={Link} to="/register">
                <ListItemText primary="Register" />
            </ListItem>
        </List>
    </Drawer>
);

export default Sidebar;
