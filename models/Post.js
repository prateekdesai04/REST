const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Posts', PostSchema);

// We give the name of the model that'll appear in MongoDB and the name of the schema
// we can import this and use it in our routes or wherver we need to save or get from the database
