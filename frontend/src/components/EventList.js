// src/components/EventList.js
import React from 'react';
import { List, ListItem, ListItemText, IconButton, Typography, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const EventList = ({ events = [], onEditEvent, onDeleteEvent }) => (
    <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#fff' }}>
        <Typography variant="h6" color="secondary" gutterBottom>
            My Events
        </Typography>
        <List>
            {events.map((event) => (
                <ListItem
                    key={event._id} // Assuming event._id is the unique identifier
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
                    <IconButton
                        edge="end"
                        color="primary"
                        onClick={() => onEditEvent(event)} // Pass the event object to edit handler
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        edge="end"
                        color="error"
                        onClick={() => onDeleteEvent(event._id)} // Pass the event ID to delete handler
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItem>
            ))}
        </List>
    </Paper>
);

export default EventList;
