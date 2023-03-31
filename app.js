const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Parse incoming JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Can likely delete now that ive added to connection.js
// Connect to MongoDB database using the connection URI in the environment variable
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
