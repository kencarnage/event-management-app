const express = require('express');
const { createEvent, getEvents, updateEvent, deleteEvent, promoteEvent } = require('../controllers/eventController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, createEvent);
router.get('/', getEvents);
router.put('/:id', auth, updateEvent);
router.delete('/:id', auth, deleteEvent);
router.post('/:id/promote', auth, promoteEvent);

module.exports = router;
