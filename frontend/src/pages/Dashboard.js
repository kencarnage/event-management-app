// src/pages/Dashboard.js
import React from 'react';
import { Container, Grid, Typography, Paper, Box } from '@mui/material';
import CalendarView from '../components/CalendarView';
import EventList from '../components/EventList';
import NotificationCenter from '../components/NotificationCenter';
import SearchFilterBar from '../components/SearchFilterBar';

const Dashboard = () => {
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
