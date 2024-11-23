import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Paper, Box, Button } from '@mui/material';
import CalendarView from '../components/CalendarView';
import EventList from '../components/EventList';
import NotificationCenter from '../components/NotificationCenter';
import SearchFilterBar from '../components/SearchFilterBar';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../services/authService';

const Dashboard = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoggedIn(isAuthenticated());
    }, []);

    const handleAddEvent = () => {
        console.log('Add Event');
    };

    const handleLogout = () => {
        logout();
        setLoggedIn(false);
        navigate('/login'); // Redirect to login page after logout
    };

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Paper elevation={3} sx={{ padding: 3, backgroundColor: '#f5f5f5' }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h4" color="primary" gutterBottom>
                        My Dashboard
                    </Typography>
                    <NotificationCenter />
                </Box>

                {/* Buttons for Add Event / Login / Register / Logout */}
                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mt: 2, mb: 2 }}>
                    {loggedIn ? (
                        <>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleAddEvent}
                            >
                                Add Event
                            </Button>
                            <Button
                                variant="contained" // Contained button style
                                color="error"       // Makes the button red
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <Box>
                            <Button
                                variant="outlined"
                                color="primary"
                                sx={{ mr: 2 }}
                                onClick={handleLogin}
                            >
                                Login
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleRegister}
                            >
                                Register
                            </Button>
                        </Box>
                    )}
                </Box>

                <SearchFilterBar />

                <Grid container spacing={4} sx={{ mt: 2 }}>
                    <Grid item xs={12} md={8}>
                        <CalendarView />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <EventList />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default Dashboard;
