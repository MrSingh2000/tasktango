const mongoose = require("mongoose");
const { Schema } = mongoose;

// This is the user data model to be used in server database as a collection
const userdataSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  mytask: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "task",
      },
    ],
    default: [],
  },
  collabtask: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "task",
      },
    ],
    default: [],
  },
  invitation: {
    type: [
      {
        from: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        task: { type: mongoose.Schema.Types.ObjectId, ref: "task" },
        status: { type: Boolean, default: false },
      },
    ],
    default: [],
  },
  history: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "task",
      },
    ],
    default: [],
  },
});

// name of the collection is 'user'
module.exports = mongoose.model("Userdata", userdataSchema);
