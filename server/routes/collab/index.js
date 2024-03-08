const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user/User");
const fetchUser = require("../../middlewares/fetchUser");
const UserData = require("../../models/user/UserData");
const { isOwner } = require("../../functions");
const Task = require("../../models/task/Task");
require("dotenv").config();

// ROUTE 1: add user to collab list
// NOTE: it should be called after notify, and when user accepts the collab.
router.post("/add", fetchUser, async (req, res) => {
  try {
    // check if user sending request is valid
    let userId = req.user.id;
    let user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        error: { code: 401, message: "Unauthorized operation." },
      });
    }

    // fetching data from req body,
    // collabId = invitation Id
    // taskId = task Id
    let { collabId, taskId } = req.body;

    // verify if task is valid
    let task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({
        error: {
          code: 404,
          message: "Task not found.",
        },
      });
    }

    // Find the user data containing the invitation
    await UserData.findOneAndUpdate(
      // Match the invitation by its ID
      { "invitation._id": collabId },
      // Update only the status field
      { $set: { "invitation.$.status": true } },
      // Return the updated document
      { new: true }
    );

    const userData = await UserData.findOneAndUpdate(
      // Match the invitation by its ID
      { userId: userId },
      // Update only the status field
      { $push: { collabtask: taskId } },
      // Return the updated document
      { new: true }
    );

    //   update sub task data
    await Task.findByIdAndUpdate(
      taskId,
      {
        $push: {
          collab: collabId,
        },
      },
      { new: true }
    );

    // update the parent task data
    // Find the parent task that contains the subtask
    const parentTask = await Task.findOne({ "subTask._id": taskId });

    if (!parentTask) {
      throw new Error("Parent task not found");
    }

    // Find the subtask within the parent task
    const subtask = parentTask.subTask.find(subtask => subtask._id.equals(taskId));

    if (!subtask) {
      throw new Error("Subtask not found in parent task");
    }

    // Update the subtask's collab list
    subtask.collab.push(userId);

    // Save the parent task to persist the changes
    await parentTask.save();

    res.status(200).json({
      data: {
        user: userData,
      },
    });
  } catch (error) {
    console.log("Error in add collab: ", error);
    res.status(500).json({
      error: {
        code: 500,
        message: "Internal Server Error Occurred! Try again later",
      },
    });
  }
});

// ROUTE 2: notify a collaborator of add
router.post("/notify", fetchUser, async (req, res) => {
  try {
    let userId = req.user.id;
    let user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        error: { code: 401, message: "Unauthorized operation." },
      });
    }

    const { collabId, taskId } = req.body;

    const task = await Task.findById(taskId);
    const collabUser = await User.findById(collabId);

    if (!task)
      return res.status(404).json({
        error: {
          code: 404,
          message: "Task not found.",
        },
      });

    if (!collabUser)
      return res.status(404).json({
        error: {
          code: 404,
          message: "Collab user not found.",
        },
      });

    const invitation = {
      from: userId,
      task: taskId,
      status: false
    };

    const updatedUser = await UserData.findOneAndUpdate(
      { userId: collabId },
      {
        $push: {
          invitation: invitation,
        },
      },
      { new: true }
    );

    res.status(200).json({
      data: {
        user: updatedUser,
      },
    });
  } catch (error) {
    console.log("Error in add collab: ", error);
    res.status(500).json({
      error: {
        code: 500,
        message: "Internal Server Error Occurred! Try again later",
      },
    });
  }
});

// ROUTE 3: get all colaborators
router.post("/all", fetchUser, async (req, res) => {
  try {
    let userId = req.user.id;
    let user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        error: { code: 401, message: "Unauthorized operation." },
      });
    }

    console.log("here");

    const userArray = req.body.users;
    console.log('usersArray: ', userArray)
    const users = await User.find({ _id: { $in: userArray } });

    console.log("users: ", users);
    res.json({
      data: {
        users: users.length > 0 ? users : [],
      },
    });
  } catch (error) {
    console.log("Error in add collab: ", error);
    res.status(500).json({
      error: {
        code: 500,
        message: "Internal Server Error Occurred! Try again later",
      },
    });
  }
});

module.exports = router;
