const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const animalBlogSchema = new Schema({
  Title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Thumbnail: {
    type: String,
    required: true,
  },
});

const AnimalBlog = mongoose.model("AnimalBlog", animalBlogSchema);

module.exports = AnimalBlog;
