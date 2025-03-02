// routes/restaurantRoutes.js
const express = require('express');
const { searchRestaurants } = require('../controllers/restaurantController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, searchRestaurants);
module.exports = router;
