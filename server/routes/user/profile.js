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

const multer = require("multer");
var MulterAzureStorage = require("multer-azure-storage");

var upload = multer({
  storage: new MulterAzureStorage({
    azureStorageConnectionString: process.env.AZURE_CONNECTION_STRING,
    containerName: process.env.AZURE_CONTAINER,
    containerSecurity: "blob",
  }),
});

// ROUTE 1: get user profile details
router.get("/get", fetchUser, async (req, res) => {
  try {
    let userId = req.user.id;
    let user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({
        error: { code: 404, message: "User not found." },
      });
    }

    res.json({
      data: {
        user,
      },
    });
  } catch (error) {
    console.log("Error in get profile route: ", error);
    res.status(500).json({
      error: {
        code: 500,
        message: "Internal Server Error Occurred! Try again later",
      },
    });
  }
});

// ROUTE 2: update user profile details
router.post("/update", [upload.single("img"), fetchUser], async (req, res) => {
  try {
    let userId = req.user.id;
    let user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({
        error: { code: 404, message: "User not found." },
      });
    }

    if (!req.file.url)
      return res.status(500).json({
        error: {
          code: 500,
          message: "Unable to upload image. Try again later.",
        },
      });

    const fileUrl = req.file.url;
    const updatedProfile = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          img: fileUrl,
        },
      },
      { new: true }
    ).select("-password");

    res.json({
      data: {
        profile: updatedProfile,
      },
    });
  } catch (error) {
    console.log("Error in update profile route: ", error);
    res.status(500).json({
      error: {
        code: 500,
        message: "Internal Server Error Occurred! Try again later",
      },
    });
  }
});

// ROUTE 3: search a user profile
router.get("/search", fetchUser, async (req, res) => {
  try {
    let userId = req.user.id;
    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        error: { code: 404, message: "Unauthorized operation" },
      });
    }

    const searchTerm = req.query.q;

    // Perform a search query in the database based on the search term
    const searchResults = await User.find({
      $or: [
        { username: { $regex: searchTerm, $options: "i" } }, // Case-insensitive search by username
        { email: { $regex: searchTerm, $options: "i" } }, // Case-insensitive search by email
      ],
    }).select("-password");

    res.json({
      data: {
        results: searchResults,
      },
    });
  } catch (error) {
    console.log("Error in update profile route: ", error);
    res.status(500).json({
      error: {
        code: 500,
        message: "Internal Server Error Occurred! Try again later",
      },
    });
  }
});

// ROUTE 4: get user entire data
router.get("/mydetails", fetchUser, async (req, res) => {
  try {
    let userId = req.user.id;
    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        error: { code: 404, message: "Unauthorized operation" },
      });
    }

    const userData = await UserData.findOne({ userId });

    res.json({
      data: {
        details: userData,
      },
    });
  } catch (error) {
    console.log("Error in all details profile route: ", error);
    res.status(500).json({
      error: {
        code: 500,
        message: "Internal Server Error Occurred! Try again later",
      },
    });
  }
});

module.exports = router;
