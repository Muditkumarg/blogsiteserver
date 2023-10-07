const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://127.0.0.1:27017/blogproject", {
mongoose
  .connect(
    "mongodb+srv://muditksj6:VpdLMZhgHwf8BUoP@mudit.gqcvrx2.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useunifiedtopology: true,
    }
  )
  .then(() => {
    console.log("DataBase connected");
  })
  .catch(() => {
    console.log("data base not connected");
  });

module.exports = mongoose;

// muditksj6;

// VpdLMZhgHwf8BUoP;
