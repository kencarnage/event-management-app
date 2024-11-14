// src/components/AddEventModal.js
import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

const AddEventModal = ({ open, onClose, onSave, event }) => {
    const [eventData, setEventData] = useState({ name: '', date: '', location: '', description: '' });

    useEffect(() => {
        if (event) setEventData(event);
    }, [event]);

    const handleChange = (e) => setEventData({ ...eventData, [e.target.name]: e.target.value });

    const handleSubmit = () => {
        onSave(eventData);
        setEventData({ name: '', date: '', location: '', description: '' });
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{event ? 'Edit Event' : 'Add New Event'}</DialogTitle>
            <DialogContent>
                <TextField
                    label="Event Name"
                    name="name"
                    fullWidth
                    margin="dense"
                    value={eventData.name}
                    onChange={handleChange}
                />
                <TextField
                    label="Date"
                    name="date"
                    type="date"
                    fullWidth
                    margin="dense"
                    InputLabelProps={{ shrink: true }}
                    value={eventData.date}
                    onChange={handleChange}
                />
                <TextField
                    label="Location"
                    name="location"
                    fullWidth
                    margin="dense"
                    value={eventData.location}
                    onChange={handleChange}
                />
                <TextField
                    label="Description"
                    name="description"
                    fullWidth
                    multiline
                    rows={4}
                    margin="dense"
                    value={eventData.description}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">Cancel</Button>
                <Button onClick={handleSubmit} color="primary">Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddEventModal;
