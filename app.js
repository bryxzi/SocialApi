const express = require('express');
const mongoose = require('./config/connection');
const routes = require('./routes');
const seedDatabase = require('./utils/seed');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, async () => {
  console.log(`App running on port ${PORT}!`);
  await seedDatabase();
});
