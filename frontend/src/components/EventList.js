// src/components/EventList.js
import React from 'react';
import { List, ListItem, ListItemText, IconButton, Typography, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';

const EventList = ({ events = [], onEdit, onDelete, onPromote }) => (
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
                    <IconButton edge="end" color="primary" onClick={() => onEdit(event)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton edge="end" color="secondary" onClick={() => onDelete(event.id)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton edge="end" color="primary" onClick={() => onPromote(event.id)}>
                        <ShareIcon />
                    </IconButton>
                </ListItem>
            ))}
        </List>
    </Paper>
);

export default EventList;
