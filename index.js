// index.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const restaurantRoutes = require('./routes/restaurantRoutes');
const authRoutes = require('./routes/authRoutes');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser middleware
app.use(express.json());

// Mount routes
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/auth', authRoutes);

// headlth route
app.get('/', (req, res) => {
  res.send('Server is running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
