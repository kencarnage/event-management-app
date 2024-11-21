// backend/server.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes'); // Add event routes
const auth = require('./middleware/auth'); // Authentication middleware
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', auth, eventRoutes); // Secure event routes with auth middleware

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
