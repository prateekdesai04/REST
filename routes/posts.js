const express = require('express');
const router = express.Router();
const PostsModel = require('../models/Post'); // Import the schema

// CREATE from CRUD

// Create a new post
router.post('/', async (req, res) => {
  const post = new PostsModel({
    // create a new post using the imported PostSchema, insert in database
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save(); // this is the response
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
  // post
  //   .save()
  //   .then((data) => {
  //     res.json(data);
  //   })
  //   .catch((err) => res.json({ message: err })); // save in the database, returns a promise - basically a RES to our REQ if successful, handle the same
  // res.data is basically db data being displayed on the screen, we can put status codes also res.status(200-400-500) here
});

// READ from CRUD

// Get all records
router.get('/', async (req, res) => {
  // for this the relative path is / and not /posts, that is fetched by the middleware
  //res.send('We are on Posts');
  try {
    const allPosts = await PostsModel.find(); //find from the model in the mongooseDB
    res.json(allPosts);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get record by ID
router.get('/:postId', async (req, res) => {
  try {
    const idPost = await PostsModel.findById({ _id: req.params.postId }); // To access stuff like id from the endpoint URL
    res.json(idPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// UPDATE from CRUD

//Update a record
router.patch('/:postId', async (req, res) => {
  try {
    const rePost = await PostsModel.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title, description: req.body.description } } // set the field value both have to be set again or null is passed
    );
    res.json(rePost);
  } catch (err) {
    res.json({ message: err });
  }
});

// DELETE from CRUD

// Delete a particular post
router.delete('/:postId', async (req, res) => {
  try {
    const delPost = await PostsModel.findByIdAndDelete(req.params.postId); // Another way to find and delete, np need of curly braces like above, just another way
    res.json(delPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// END OF ALL CRUD OPERATIONS

//RANDOM ROUTE EXTENSION EXAMPLE
router.get('/specific', (req, res) => {
  // so the route of this will be /posts/specific
  res.send('Specific Post !!');
});

module.exports = router;
