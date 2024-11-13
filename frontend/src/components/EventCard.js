// src/components/EventCard.js
import React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

const EventCard = ({ event }) => (
    <Card elevation={3}>
        <CardContent>
            <Typography variant="h6">{event.name}</Typography>
            <Typography color="textSecondary">{event.date}</Typography>
            <Typography variant="body2">{event.description}</Typography>
        </CardContent>
        <CardActions>
            <Button size="small" color="primary">
                View Details
            </Button>
        </CardActions>
    </Card>
);

export default EventCard;
