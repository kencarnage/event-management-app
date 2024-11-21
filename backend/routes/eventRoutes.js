// backend/routes/eventRoutes.js
const express = require('express');
const Event = require('../models/Event'); // Event model

const router = express.Router();

// POST /api/events - Create a new event
router.post('/', async (req, res) => {
    const { name, date, location, description } = req.body;
    const userId = req.user.id; // Extracted from the auth middleware

    try {
        const newEvent = new Event({ name, date, location, description, userId });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: 'Error creating event', error });
    }
});

// GET /api/events - Retrieve events for a specific user
router.get('/', async (req, res) => {
    const userId = req.user.id;

    try {
        const events = await Event.find({ userId });
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching events', error });
    }
});

// PUT /api/events/:id - Update an existing event
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, date, location, description } = req.body;

    try {
        const updatedEvent = await Event.findOneAndUpdate(
            { _id: id, userId: req.user.id },
            { name, date, location, description },
            { new: true }
        );
        if (!updatedEvent) return res.status(404).json({ message: 'Event not found' });
        res.status(200).json(updatedEvent);
    } catch (error) {
        res.status(500).json({ message: 'Error updating event', error });
    }
});

// DELETE /api/events/:id - Delete an event
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedEvent = await Event.findOneAndDelete({ _id: id, userId: req.user.id });
        if (!deletedEvent) return res.status(404).json({ message: 'Event not found' });
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting event', error });
    }
});

// POST /api/events/:id/promote - Promote/share an event
router.post('/:id/promote', async (req, res) => {
    const { id } = req.params;

    try {
        const event = await Event.findOne({ _id: id, userId: req.user.id });
        if (!event) return res.status(404).json({ message: 'Event not found' });

        // Implement promotion logic (e.g., generate a shareable link or post to social media)
        res.status(200).json({ message: 'Event promoted successfully', event });
    } catch (error) {
        res.status(500).json({ message: 'Error promoting event', error });
    }
});

module.exports = router;
