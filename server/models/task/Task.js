const mongoose = require("mongoose");
const { Schema } = mongoose;

// This is the user model to be used in server database as a collection
const taskSchema = new Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  collab: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    default: [],
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    default: "",
  },
  status: {
    type: Boolean,
    default: false,
  },
  progress: {
    type: Number,
    default: 0,
  },
  subTask: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "task",
    },
  ],
});

// name of the collection is 'user'
module.exports = mongoose.model("Task", taskSchema);
