import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Paper, Box, Button } from '@mui/material';
import CalendarView from '../components/CalendarView';
import EventList from '../components/EventList';
import NotificationCenter from '../components/NotificationCenter';
import SearchFilterBar from '../components/SearchFilterBar';
import AddEventModal from '../components/AddEventModal';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../services/authService';
import { fetchEvents, addEvent, updateEvent, deleteEvent } from '../services/eventService';

const Dashboard = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [events, setEvents] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [currentEvent, setCurrentEvent] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated()) {
            setLoggedIn(true);
            loadEvents();
        }
    }, []);

    const loadEvents = async () => {
        try {
            const eventsData = await fetchEvents();
            setEvents(eventsData);
        } catch (err) {
            console.error('Failed to fetch events:', err);
        }
    };

    const handleAddEvent = () => {
        setCurrentEvent(null); // Ensure no existing event is being edited
        setOpenModal(true);
    };

    const handleEditEvent = (event) => {
        setCurrentEvent(event);
        setOpenModal(true);
    };

    const handleSaveEvent = async (eventData) => {
        try {
            if (currentEvent) {
                // Update event
                const updatedEvent = await updateEvent(currentEvent._id, eventData);
                setEvents((prev) =>
                    prev.map((event) => (event._id === updatedEvent._id ? updatedEvent : event))
                );
            } else {
                // Add new event
                const newEvent = await addEvent(eventData);
                setEvents((prev) => [...prev, newEvent]);
            }
            setOpenModal(false);
        } catch (err) {
            console.error('Failed to save event:', err);
        }
    };

    const handleDeleteEvent = async (id) => {
        try {
            await deleteEvent(id);
            setEvents((prev) => prev.filter((event) => event._id !== id));
        } catch (err) {
            console.error('Failed to delete event:', err);
        }
    };

    const handleLogout = () => {
        logout();
        setLoggedIn(false);
        navigate('/login');
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
                                variant="contained"
                                color="error"
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
                        <CalendarView events={events} onEditEvent={handleEditEvent} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <EventList events={events} onDeleteEvent={handleDeleteEvent} />
                    </Grid>
                </Grid>
            </Paper>

            {/* AddEventModal Integration */}
            <AddEventModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                onSave={handleSaveEvent}
                event={currentEvent}
            />
        </Container>
    );
};

export default Dashboard;
