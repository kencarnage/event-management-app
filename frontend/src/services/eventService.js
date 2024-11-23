import axios from 'axios';

const API_URL = 'http://localhost:5000/api/events';

// Fetch all events for the logged-in user
export const fetchEvents = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

// Add a new event
export const addEvent = async (eventData) => {
    const token = localStorage.getItem('token');
    const response = await axios.post(API_URL, eventData, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

// Update an event
export const updateEvent = async (id, eventData) => {
    const token = localStorage.getItem('token');
    const response = await axios.put(`${API_URL}/${id}`, eventData, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

// Delete an event
export const deleteEvent = async (id) => {
    const token = localStorage.getItem('token');
    const response = await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};
