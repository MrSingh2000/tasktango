const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user/User");
const fetchUser = require("../../middlewares/fetchUser");
const UserData = require("../../models/user/UserData");
require("dotenv").config();


// Route 1: Route to login
router.post("/login", async (req, res) => {
  try {
    let { username, password } = req.body;
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({
        error: { code: 404, message: "User not Found!" },
      });
    }
    let passCompare = await bcrypt.compare(password, user.password);
    if (!passCompare) {
      return res
        .status(401)
        .json({ error: { code: 401, message: "Invalid Credentials" } });
    }
    const data = {
      user: {
        id: user.id,
        username: user.username,
      },
    };
    const authToken = jwt.sign(data, process.env.JWT_SECRET);
    res.json({
      data: {
        authToken,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: { code: 500, message: "Internal Server Error Occurred!" },
    });
    // res.json(error)
  }
});

// Route 2: Route to signup
router.post("/register", async (req, res) => {
  try {
    let { username, password, name, email } = req.body;
    let user = await User.findOne({ username });
    if (user) {
      return res.status(404).json({
        error: {
          code: 404,
          message: "Username is not available",
        },
      });
    }
    const salt = await bcrypt.genSalt(10);
    const securePass = await bcrypt.hash(password, salt);

    user = await User.create({
      username,
      name,
      email,
      password: securePass,
    });
    await UserData.create({
      userId: user._id,
    });
    const data = {
      user: {
        id: user.id,
        username: user.username,
      },
    };
    const authToken = jwt.sign(data, process.env.JWT_SECRET);
    res.json({ data: { authToken } });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: {
        code: 500,
        message: "Internal Server Error Occurred! Try again later",
      },
    });
  }
});

// Route 3: get user details from the authToken
router.get("/get_user", fetchUser, async (req, res) => {
  try {
    let id = req.user.id;
    let user = await User.findById(id).select("-password");
    if (!user) {
      return res
        .status(400)
        .json({ error: { code: 400, message: "User not found!" } });
    }
    res.json({
      data: {
        user,
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
