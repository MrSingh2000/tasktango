const jwt = require("jsonwebtoken");
require("dotenv").config();

const fetchUser = (req, res, next) => {
  const token = req.header("authToken");
  if (!token) {
    return res.status(401).json({
      error: {
        code: 404,
        message: "No auth token provided",
      },
    });
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({
      error: {
        code: 401,
        message: "Invalid auth token.",
      },
    });
  }
};

module.exports = fetchUser;
