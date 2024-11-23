import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Alert } from '@mui/material';

const AddEventModal = ({ open, onClose, onSave, event }) => {
    const [eventData, setEventData] = useState({
        name: '',
        date: '',
        location: '',
        description: '',
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        if (event) {
            setEventData({
                name: event.name || '',
                date: event.date || '',
                location: event.location || '',
                description: event.description || '',
            });
        } else {
            setEventData({ name: '', date: '', location: '', description: '' });
        }
        setError(null); // Reset errors when modal opens
    }, [event]);

    const handleChange = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        const { name, date, location } = eventData;

        // Basic validation
        if (!name || !date || !location) {
            setError('Please fill out all required fields (Name, Date, Location).');
            return;
        }

        onSave(eventData); // Call the parent save handler
        setEventData({ name: '', date: '', location: '', description: '' }); // Clear form
        setError(null); // Reset errors
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{event ? 'Edit Event' : 'Add New Event'}</DialogTitle>
            <DialogContent>
                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}
                <TextField
                    label="Event Name"
                    name="name"
                    fullWidth
                    margin="dense"
                    value={eventData.name}
                    onChange={handleChange}
                    required
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
                    required
                />
                <TextField
                    label="Location"
                    name="location"
                    fullWidth
                    margin="dense"
                    value={eventData.location}
                    onChange={handleChange}
                    required
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
                <Button onClick={onClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddEventModal;
