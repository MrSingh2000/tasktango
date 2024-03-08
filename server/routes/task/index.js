// TODO: TEST SOCKET CONNECTIONS FOR THE UPDATE TASK ROUTE
const express = require("express");
const router = express.Router();
const User = require("../../models/user/User");
const fetchUser = require("../../middlewares/fetchUser");
const UserData = require("../../models/user/UserData");
const Task = require("../../models/task/Task");
const { default: mongoose } = require("mongoose");
const io = require("../..");
const userSockets = require("../../common");
const { isOwner, isCollab } = require("../../functions");
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

    const { title, desc, subTask, deadline } = req.body;

    let newTask = await Task.create({
      owner: userId,
      title,
      desc,
      isSubTask: subTask ? subTask : false,
      deadline: deadline ? deadline : "",
    });

    await UserData.findOneAndUpdate(
      { userId },
      {
        $push: {
          mytask: newTask, // Push newValue into the arrayField
        },
      }
    );

    res.status(200).json({
      data: {
        task: newTask,
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
          mytask: taskId,
        },
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

    if (!task)
      return res.status(404).json({
        error: {
          code: 404,
          message: "Task not found.",
        },
      });

    let userId = new mongoose.Types.ObjectId(req.user.id);
    let user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        error: { code: 401, message: "Unauthorized operation." },
      });
    }

    // checking if the user is in either collaboration list or the owner of the task
    // owner is never added to collab list
    if (!userId.equals(task.owner) && !task.collab.includes(userId))
      return res.status(200).json({
        data: {
          title: task.title,
        },
      });
    // for security only title will be sent

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

// ROUTE 4: update task
router.put("/create", fetchUser, async (req, res) => {
  try {
    let userId = req.user.id;
    let user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        error: { code: 401, message: "Unauthorized operation." },
      });
    }

    const { title, desc, updateType, status, taskId } = req.body;
    const task = await Task.findById(taskId);
    if (!task)
      return res.status(404).json({
        error: {
          code: 404,
          message: "Task is not found.",
        },
      });

    let updatedTask;

    // if only status is updated
    if (
      updateType === "status" &&
      (isOwner(task, user) || isCollab(task, user))
    ) {
      // check if the user is a collaborator or owner
      updatedTask = await Task.findByIdAndUpdate(
        taskId,
        {
          $set: {
            status: status,
          },
        },
        { new: true }
      );
    } else if (updateType === "other" && isOwner(task, user)) {
      // if other than status is updated
      updatedTask = await Task.findByIdAndUpdate(
        taskId,
        {
          $set: {
            title,
            desc,
          },
        },
        { new: true }
      );
    } else {
      return res.status(404).json({
        error: {
          code: 404,
          message: "Invalid input.",
        },
      });
    }

    const socketId = Object.keys(userSockets.userSockets).find(
      (key) => userSockets.userSockets[key] === task.owner.toString()
    );
    io.to(socketId).emit("updateTask", "Task Updated");

    res.status(200).json({
      data: {
        task: updatedTask,
      },
    });
  } catch (error) {
    console.log("Error in update task route: ", error);
    res.status(500).json({
      error: {
        code: 500,
        message: "Internal Server Error Occurred! Try again later.",
      },
    });
  }
});

// ROUTE 5: get multiple tasks in one go
router.post("/all", fetchUser, async (req, res) => {
  try {
    let userId = req.user.id;
    let user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        error: { code: 401, message: "Unauthorized operation." },
      });
    }

    const taskArray = req.body.tasks;
    const collabArray = req.body.collabs;
    const inviteArray = req.body.invites;

    // Find documents with the array of IDs
    const tasks = await Task.find({ _id: { $in: taskArray } });
    const collabs = await Task.find({ _id: { $in: collabArray } });
    const invites = await Task.find({ _id: { $in: inviteArray } });

    res.json({
      data: {
        tasks: tasks.length > 0 ? tasks : [],
        collabs: collabs.length > 0 ? collabs : [],
        invites: invites.length > 0 ? invites : [],
      },
    });
  } catch (error) {
    console.log("error in get all tasks: ", error);
    res.status(500).json({
      error: {
        code: 500,
        message: "Internal Server Error Occurred! Try again later",
      },
    });
  }
});

module.exports = router;
