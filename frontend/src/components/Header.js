import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Event Manager
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer}
                sx={{ display: { xs: 'block', md: 'none' } }}
            >
                <List onClick={toggleDrawer} onKeyDown={toggleDrawer}>
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
        </>
    );
};

export default Header;
