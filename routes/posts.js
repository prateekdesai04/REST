const express = require('express');
const router = express.Router();
const PostsModel = require('../models/Post'); // Import the schema

router.get('/', (req, res) => {
  // for this the relative path is / and not /posts, that is fetched by the middleware
  res.send('We are on Posts');
});

router.get('/specific', (req, res) => {
  // so the route of this will be /posts/specific
  res.send('Specific Post !!');
});

router.post('/', (req, res) => {
  const post = new PostsModel({
    // create a new post using the imported PostSchema, insert in database
    title: req.body.title,
    description: req.body.description,
  });

  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json({ message: err })); // save in the database, returns a promise - basically a RES to our REQ if successful, handle the same
  // res.data is basically db data being displayed on the screen, we can put status codes also res.status(200-400-500) here
});

module.exports = router;
