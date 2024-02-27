const express = require("express");
const router = express.Router();
const User = require("../../models/user/User");
const fetchUser = require("../../middlewares/fetchUser");
const UserData = require("../../models/user/UserData");
const Task = require("../../models/task/Task");
const io = require("../..");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

// ROUTE 1: create a task
router.post("/create", fetchUser, async (req, res) => {
  try {
    let userId = req.user.id;
    let user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        error: { code: 401, message: "Unauthorized operation." },
      });
    }

    const { title, desc } = req.body;

    let newTask = await Task.create({
      owner: userId,
      title,
      desc,
    });

    await UserData.findOneAndUpdate(
      { userId },
      {
        $push: {
          mytask: newTask, // Push newValue into the arrayField
        },
      }
    );

    // TODO: can use io.emit() here

    res.status(200).json({
      data: {
        status: "done",
      },
    });
  } catch (error) {
    console.log("error in create task: ", error);
    res.status(500).json({
      error: {
        code: 500,
        message: "Internal Server Error Occurred! Try again later",
      },
    });
  }
});

// ROUTE 2: delete a task
router.delete("/delete/:id", fetchUser, async (req, res) => {
  try {
    let userId = req.user.id;
    let user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        error: { code: 401, message: "Unauthorized operation." },
      });
    }

    const taskId = new mongoose.Types.ObjectId(req.params.id);
    // update the task collection
    await Task.findByIdAndDelete(taskId);
    // update the user data
    await UserData.findOneAndUpdate(
        { userId },
        {
          $pull: {
            'mytask': taskId
          }
        }
      );

    res.status(200).json({
      data: {
        status: "success",
      },
    });
  } catch (error) {
    console.log("error in delete task: ", error);
    res.status(500).json({
      error: {
        code: 500,
        message: "Internal Server Error Occurred! Try again later",
      },
    });
  }
});

// ROUTE 3: get a task details
router.get("/get/:id", fetchUser, async (req, res) => {
  try {
    const taskId = req.params.id;

    const task = await Task.findById(taskId);

    let userId = new mongoose.Types.ObjectId(req.user.id);
    let user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        error: { code: 401, message: "Unauthorized operation." },
      });
    }

    // checking if the user is in either collaboration list or the owner of the task
    
    console.log('usr: ', userId, ' owner: ', task.owner)

    console.log('usr: ', userId.equals(task.owner), ' owner: ', task.collab.includes(userId))
    if (userId.equals(task.owner) && task.collab.includes(userId))
      return res.status(401).json({
        error: {
          code: 401,
          message: "Unauthorized operation. 2",
        },
      });

    res.status(200).json({
      data: {
        task,
      },
    });
  } catch (error) {
    console.log("error in get task: ", error);
    res.status(500).json({
      error: {
        code: 500,
        message: "Internal Server Error Occurred! Try again later",
      },
    });
  }
});

module.exports = router;
