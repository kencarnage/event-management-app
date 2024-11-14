// src/services/eventService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const createEvent = (eventData) => axios.post(`${API_URL}/events`, eventData);

export const fetchEvents = () => axios.get(`${API_URL}/events`);

export const updateEvent = (eventId, updatedData) =>
    axios.put(`${API_URL}/events/${eventId}`, updatedData);

export const deleteEvent = (eventId) => axios.delete(`${API_URL}/events/${eventId}`);

export const promoteEvent = (eventId) => axios.post(`${API_URL}/events/${eventId}/promote`);
