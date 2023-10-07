const mongoose = require("mongoose");

const SignUpSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userData = mongoose.model("UserSignUp", SignUpSchema);
module.exports = userData;
