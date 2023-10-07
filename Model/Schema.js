const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  content: {
    type: String,
  },
  title: {
    type: String,
  },
  blogImg: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});
const blogPostData = mongoose.model("BlogPost", blogSchema);

module.exports = blogPostData;
