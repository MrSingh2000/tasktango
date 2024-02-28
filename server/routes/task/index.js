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
const { default: axios } = require("axios");
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

    const { title, desc, subTask } = req.body;

    let newTask = await Task.create({
      owner: userId,
      title,
      desc,
      isSubTask: subTask ? subTask : false,
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

// checks if the user is owner of task
function isOwner(task, user) {
  return user.equals(task.owner);
}

// checks if the user is in collaboration list
function isCollab(task, user) {
  return task.collab.includes(user);
}

// emit event to the collabs and owner
function emitEvent(task, userId) {
  if (!userSockets || !io) return;
  // Emit event to collaborators and owner
  const collaboratorsAndOwnerIds = [...task.collab, task.owner];
  collaboratorsAndOwnerIds.forEach((collabOrOwnerId) => {
    // Find the socket associated with each user ID and emit the event
    const socketId = Object.keys(userSockets).find(
      (key) => userSockets[key] === collabOrOwnerId
    );
    if (socketId && socketId !== userId) {
      io.to(socketId).emit("task_updated", { task });
    }
  });
}

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

    let updatedTask;

    // if only status is updated
    if (
      updateType === "status" &&
      (isOwner(task, user) || isCollab(task, user))
    ) {
      // check if the user is a collaborator or owner
      updatedTask = await Task.findByIdAndUpdate(taskId, {
        $set: {
          status: status,
        },
      });
    } else if (updateType === "other" && isOwner(task, user)) {
      // if other than status is updated
      updatedTask = await Task.findByIdAndUpdate(taskId, {
        $set: {
          title,
          desc,
        },
      });
    } else {
      return res.status(404).json({
        error: {
          code: 404,
          message: "Invalid input.",
        },
      });
    }
    emitEvent(updatedTask, userId);
    res.status(200).json({
      data: {
        status: "Done",
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

// ROUTE 5: create a subtask
router.post("/create-subtask", fetchUser, async (req, res) => {
  try {
    let userId = req.user.id;
    let user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        error: { code: 401, message: "Unauthorized operation." },
      });
    }

    const { taskId, title, desc } = req.body;

    // create a new task with 'create' route
    // Construct the full URL including the protocol, hostname, and port
    const baseUrl = `${req.protocol}://${req.get("host")}`;

    // Make a request to the relative URL /data
    const response = await axios({
      url: `${baseUrl}/api/task/create`,
      method: "POST",
      body: {
        title,
        desc,
        subTask: true,
      },
      headers: {
        authToken: req.header("authToken"),
      },
    });

    const task = response.data.task;

    const parentTask = await Task.findByIdAndUpdate(taskId, {
      $push: {
        subTask: task, // Push newValue into the arrayField
      },
    });

    res.status(200).json({
      data: {
        task: parentTask,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 500,
        message: "Internal Server Error Occurred! Try again later",
      },
    });
  }
});

module.exports = router;
