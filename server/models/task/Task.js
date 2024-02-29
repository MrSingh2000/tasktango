const mongoose = require("mongoose");
const { Schema } = mongoose;

// subtask schem
const subTaskSchema = new Schema({
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
  deadline: {
    type: String,
    default: "",
  },
  // dont try creating a sub task object with this parameter
  subTask: {
    type: [
      {
        name: String,
      },
    ],
    default: [],
  },
  isSubTask: {
    type: Boolean,
    default: true,
  },
});

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
  deadline: {
    type: String,
    default: "",
  },
  progress: {
    type: Number,
    default: 0,
  },
  subTask: {
    type: [subTaskSchema],
    default: [],
  },
  isSubTask: {
    type: Boolean,
    default: false,
  },
});

// name of the collection is 'user'
module.exports = mongoose.model("Task", taskSchema);
