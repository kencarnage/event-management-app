// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Grid, Typography, Container } from '@mui/material';
import EventCard from '../components/EventCard';
import Sidebar from '../components/Sidebar';
import socket from '../sockets/socket';
import { fetchEvents } from '../services/eventService';

const Dashboard = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents().then(setEvents);

        socket.on('newEvent', (newEvent) => setEvents((prev) => [...prev, newEvent]));
        socket.on('updatedEvent', (updatedEvent) =>
            setEvents((prev) =>
                prev.map((event) => (event.id === updatedEvent.id ? updatedEvent : event))
            )
        );

        return () => {
            socket.off('newEvent');
            socket.off('updatedEvent');
        };
    }, []);

    return (
        <Container maxWidth="lg">
            <Sidebar />
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>
            <Grid container spacing={3}>
                {events.map((event) => (
                    <Grid item xs={12} sm={6} md={4} key={event.id}>
                        <EventCard event={event} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Dashboard;
