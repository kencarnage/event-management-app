import axios from 'axios';

const API_URL = 'http://localhost:5000/api/events';

// Fetch all events for the logged-in user
export const fetchEvents = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(API_URL, {
            headers: { 'x-auth-token': token },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error.response?.data || error.message);
        throw error;
    }
};

// Add a new event
export const addEvent = async (eventData) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(API_URL, eventData, {
            headers: { 'x-auth-token': token },
        });
        return response.data;
    } catch (error) {
        console.error('Error adding event:', error.response?.data || error.message);
        throw error;
    }
};

// Update an event
export const updateEvent = async (id, eventData) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.put(`${API_URL}/${id}`, eventData, {
            headers: { 'x-auth-token': token },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating event:', error.response?.data || error.message);
        throw error;
    }
};

// Delete an event
export const deleteEvent = async (id) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${API_URL}/${id}`, {
            headers: { 'x-auth-token': token },
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting event:', error.response?.data || error.message);
        throw error;
    }
};
