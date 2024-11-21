// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Paper, Box, Button } from '@mui/material';
import CalendarView from '../components/CalendarView';
import EventList from '../components/EventList';
import NotificationCenter from '../components/NotificationCenter';
import SearchFilterBar from '../components/SearchFilterBar';
import AddEventModal from '../components/AddEventModal';
import { fetchEvents, createEvent, updateEvent, deleteEvent, promoteEvent } from '../services/eventService';

const Dashboard = () => {
    const [events, setEvents] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Load events when component mounts
    const loadEvents = async () => {
        const response = await fetchEvents();
        setEvents(response.data);
    };

    useEffect(() => {
        loadEvents();
    }, []);

    // Handlers for CRUD and promotion actions
    const handleAddEvent = async (eventData) => {
        await createEvent(eventData);
        loadEvents();
        setOpenModal(false);
    };

    const handleEditEvent = async (eventId, updatedData) => {
        await updateEvent(eventId, updatedData);
        loadEvents();
    };

    const handleDeleteEvent = async (eventId) => {
        await deleteEvent(eventId);
        loadEvents();
    };

    const handlePromoteEvent = async (eventId) => {
        await promoteEvent(eventId);
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

                <SearchFilterBar />

                <Button variant="contained" color="primary" onClick={() => setOpenModal(true)} sx={{ mt: 2 }}>
                    Add Event
                </Button>

                <AddEventModal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    onSave={handleAddEvent}
                    event={selectedEvent}
                />

                <Grid container spacing={4} sx={{ mt: 2 }}>
                    <Grid item xs={12} md={8}>
                        <CalendarView events={events} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <EventList
                            events={events}
                            onEdit={(event) => {
                                setSelectedEvent(event);
                                setOpenModal(true);
                            }}
                            onDelete={handleDeleteEvent}
                            onPromote={handlePromoteEvent}
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default Dashboard;
