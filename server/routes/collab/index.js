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
router.post("/add", fetchUser, async (req, res) => {
  try {
    let userId = req.user.id;
    let user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        error: { code: 401, message: "Unauthorized operation." },
      });
    }

    let { collabId, taskId } = req.body;
    // verify collab user is found
    let collabUser = await User.findById(collabId);
    if (!collabUser) {
      return res.status(404).json({
        error: {
          code: 404,
          message: "Collab user not found.",
        },
      });
    }

    // verify task
    let task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({
        error: {
          code: 404,
          message: "Task not found.",
        },
      });
    }

    // verify added by owner
    if (!isOwner(task, user))
      return res.status(401).json({
        error: {
          code: 401,
          message: "Unauthorized action.",
        },
      });

    //   update task data
    let updatedTask = await Task.findByIdAndUpdate(
      taskId,
      {
        $push: {
          collab: collabId,
        },
      },
      { new: true }
    );

    // update user data
    await UserData.findOneAndUpdate(
      { userId: collabId },
      {
        $push: {
          collabtask: taskId,
        },
      }
    );

    res.status(200).json({
      data: {
        task: updatedTask,
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
      status: false,
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

module.exports = router;
