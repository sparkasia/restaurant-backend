// populate.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Restaurant = require('./models/Restaurant');
const faker = require('faker');

// Load environment variables
dotenv.config();

// Connect to database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const createRestaurants = async () => {
  try {
    await Restaurant.deleteMany(); // Clear existing data

    const restaurants = [];

    for (let i = 0; i < 20000; i++) {
      restaurants.push({
        name: faker.company.companyName(),
        cuisine: faker.random.arrayElement(['Italian', 'Chinese', 'Mexican', 'Indian', 'American']),
        location: faker.address.city(),
        rating: faker.random.number({ min: 1, max: 5 }),
      });
    }

    await Restaurant.insertMany(restaurants);

    console.log('Database populated with 20,000 restaurant records');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
exports.createRestaurants = createRestaurants;

// createRestaurants();
