const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const agriBlogSchema = new Schema({
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
//   Image: {
//     type: String,
//   },
});

const AgriBlog = mongoose.model("AgriBlog", agriBlogSchema);
module.exports = AgriBlog;
