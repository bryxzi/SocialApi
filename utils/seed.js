const mongoose = require('../config/connection');
const { User, Thought } = require('../models');
const { userData, thoughtData } = require('./data');

const seedDatabase = async () => {
  try {
    await User.deleteMany({});
    await Thought.deleteMany({});

    const createdUsers = await User.insertMany(userData);
    const createdThoughts = await Thought.insertMany(thoughtData);

    console.log('Database seeded!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();
