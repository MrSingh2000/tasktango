const mongoose = require("mongoose");
const { Schema } = mongoose;

// This is the user model to be used in server database as a collection
const userSchema = new Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

// name of the collection is 'user'
module.exports = mongoose.model("User", userSchema);
