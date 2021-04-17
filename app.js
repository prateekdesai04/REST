const express = require('express'); //import package
const app = express(); //execute package
const mongoose = require('mongoose');
require('dotenv/config'); // to get .env variables

// USING BODY PARSER - Parses the request body
app.use(express.urlencoded({ extended: true })); // here this will execute when we hit any request, this is a middleware
app.use(express.json());

// CREATE ROUTES

// Import routes, and execute middleware
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute); // Everytime you go to the posts, use postsRoute.
// The reason we do this is because we can segegrate routes based on users or any components and use middleware to execute them

// this is the home route
app.get('/', (req, res) => {
  res.send('Home');
});

// CONNECT TO DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log('Connected to DB !')
);

// START LISTENING TO THE SERVER
app.listen(4200, () => console.log('Server Up and Running...'));
