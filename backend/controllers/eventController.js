const Event = require('../models/Event');

// Create Event
exports.createEvent = async (req, res) => {
    try {
        if (!req.body.name || !req.body.date || !req.body.location) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        const event = new Event({ 
            ...req.body, 
            userId: req.user.id 
        });
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ message: 'Error creating event', error: error.message });
    }
};

// Get All Events
exports.getEvents = async (req, res) => {
    try {
        const events = await Event.find({ userId: req.user.id }).sort({ date: 1 });
        res.json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ message: 'Error fetching events', error: error.message });
    }
};

// Update Event
exports.updateEvent = async (req, res) => {
    try {
        const event = await Event.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.id },
            req.body,
            { new: true }
        );
        if (!event) return res.status(404).json({ message: 'Event not found or not authorized' });
        res.json(event);
    } catch (error) {
        console.error('Error updating event:', error);
        res.status(500).json({ message: 'Error updating event', error: error.message });
    }
};

// Delete Event
exports.deleteEvent = async (req, res) => {
    try {
        const event = await Event.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
        if (!event) return res.status(404).json({ message: 'Event not found or not authorized' });
        res.json({ message: 'Event deleted successfully' });
    } catch (error) {
        console.error('Error deleting event:', error);
        res.status(500).json({ message: 'Error deleting event', error: error.message });
    }
};
