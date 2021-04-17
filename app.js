const express = require('express'); //import package
const app = express(); //execute package
const mongoose = require('mongoose');
require('dotenv/config'); // to get .env variables

// Middleware
app.use('/posts', () => {
  console.log('Middleware Runs');
});

// Create Routes
app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/posts', (req, res) => res.send('Posts'));

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log('Connected to DB !')
);

// Start listening to the server
app.listen(4200, () => console.log('Server Up and Running...'));
