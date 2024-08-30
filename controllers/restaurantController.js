// controllers/restaurantController.js
const Restaurant = require('../models/Restaurant');

// @desc    Search restaurants by name
// @route   GET /api/restaurants/search
// @access  Public
exports.searchRestaurants = async (req, res) => {
  try {
    const { name, cuisine, location, rating } = req.query;

    const query = {};
    if (name) query.name = { $regex: name, $options: 'i' };
    if (cuisine) query.cuisine = cuisine;
    if (location) query.location = location;
    if (rating) query.rating = { $gte: rating };

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const restaurants = await Restaurant.find(query).skip(skip).limit(limit);

    res.status(200).json({
      success: true,
      count: restaurants.length,
      data: restaurants,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};
