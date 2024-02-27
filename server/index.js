const express = require("express");
const port = process.env.PORT || 5000;
const connectToMongo = require("./db");
const cors = require("cors");

// creating a webRTC connection for real time updates and one for normal connection to the server
const http = require("http");
const socketIo = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
app.use(cors());
// connecting database
connectToMongo();

// Handle HTTP requests
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use('/api/auth', require('./routes/user/auth'));

// Handle Socket.IO connections
io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle events
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });

  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg); // Broadcast message to all connected clients
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = io;
