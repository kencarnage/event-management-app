// src/components/EventDetailModal.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, Button } from '@mui/material';

const EventDetailModal = ({ open, handleClose, event }) => (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{event.name}</DialogTitle>
        <DialogContent>
            <Typography variant="body1">{event.description}</Typography>
            <Typography color="textSecondary">{event.date}</Typography>
            <Button onClick={handleClose} color="primary" style={{ marginTop: '1em' }}>
                Close
            </Button>
        </DialogContent>
    </Dialog>
);

export default EventDetailModal;
