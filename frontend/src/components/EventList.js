// src/components/EventList.js
import React from 'react';
import { List, ListItem, ListItemText, IconButton, Typography, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const EventList = ({ events = [], onEdit }) => (
    <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#fff' }}>
        <Typography variant="h6" color="secondary" gutterBottom>
            My Events
        </Typography>
        <List>
            {events.map((event) => (
                <ListItem
                    key={event.id}
                    divider
                    sx={{
                        '&:hover': { backgroundColor: '#f0f0f0' },
                        transition: 'background-color 0.3s',
                    }}
                >
                    <ListItemText
                        primary={event.name}
                        secondary={`${event.date} at ${event.location}`}
                        sx={{ color: '#555' }}
                    />
                    <IconButton edge="end" color="primary" onClick={() => onEdit(event.id)}>
                        <EditIcon />
                    </IconButton>
                </ListItem>
            ))}
        </List>
    </Paper>
);

export default EventList;
