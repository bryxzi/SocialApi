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
  } catch (err) {
    console.error(err);
  }
};

module.exports = seedDatabase;
