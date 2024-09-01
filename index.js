// index.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const restaurantRoutes = require('./routes/restaurantRoutes');
const authRoutes = require('./routes/authRoutes');
const Restaurant = require('./models/Restaurant');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Mount routes
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/auth', authRoutes);

// headlth route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// get the cuisine, location, and rating from the database for dropdowns
app.get('/api/filters', async (req, res) => {
  const cuisine = await Restaurant.find().distinct('cuisine');
  const location = await Restaurant.find().distinct('location');
  const rating = await Restaurant.find().distinct('rating');
  res.json({ cuisine, location, rating });
});

// check if the database is empty then run the script populate.js
app.get('/api/populate', async (req, res) => {
  const { createRestaurants } = require('./populate');
  const restaurants = await Restaurant.find();
  if (restaurants.length === 0) {
    createRestaurants();
    res.send('Database populated with 20,000 restaurant records');
  } else {
    res.send('Database already has data');
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
