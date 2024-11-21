const Event = require('../models/Event');

// Create Event
exports.createEvent = async (req, res) => {
    try {
        const event = new Event({ ...req.body, createdBy: req.user.id });
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Error creating event' });
    }
};

// Get All Events
exports.getEvents = async (req, res) => {
    try {
        const events = await Event.find().sort({ date: 1 });
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching events' });
    }
};

// Update Event
exports.updateEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!event) return res.status(404).json({ message: 'Event not found' });
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: 'Error updating event' });
    }
};

// Delete Event
exports.deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event not found' });
        res.json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting event' });
    }
};

// Promote Event
exports.promoteEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event not found' });
        
        event.promoted = true;
        await event.save();
        
        res.json({ message: 'Event promoted successfully', event });
    } catch (error) {
        res.status(500).json({ message: 'Error promoting event' });
    }
};
