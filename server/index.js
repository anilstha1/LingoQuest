const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const cors = require("cors");

app.use(express.json());
app.use(cors());

// console.log(questions[0]);

var users = [];
var disconnected_user;
var room_creator = [];

function getcurrent_room_users(room) {
  const current_room_users = [];
  for (user of users) {
    if (user.room == room) current_room_users.push(user);
  }
  return current_room_users;
}

function find_disconnected_user(id) {
  for (user of users) {
    if (user.id == id) disconnected_user = user;

    const newArray = users.filter((user) => user.id !== id);
    users = newArray;
    console.log(users[0]);
  }
}

function get_room_creator(room) {
  for (user of room_creator) {
    if (user.room == room) return user;
  }
}
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    method: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("user connected", socket.id);

  socket.on("create_room", (user) => {
    socket.join(user.room);
    console.log(user);
    userdata = {
      nickname: user.nickname,
      room: user.room,
      id: socket.id,
    };
    room_creator.push(userdata);

    users.push(userdata);
    console.log(userdata);

    console.log(`${user.nickname} joined room ${user.room}`);

    socket.to(user.room).emit("joined", `${user.nickname} joined the chat`);
    socket.emit("welcome", `welcome to the chat ${user.nickname}`);

    io.to(user.room).emit("usersdata", getcurrent_room_users(user.room));
  });

  socket.on("join_room", (user) => {
    socket.join(user.room);
    console.log(user);
    user = {
      nickname: user.nickname,
      room: user.room,
      id: socket.id,
    };
    console.log("joined room", user.nickname);
    users.push(user);

    console.log(user);
    console.log(`${user.nickname} joined room ${user.room}`);

    socket.to(user.room).emit("joined", `${user.nickname} joined the chat`);
    socket.emit("welcome", `welcome to the chat ${user.nickname}`);

    io.to(user.room).emit("usersdata", getcurrent_room_users(user.room));
  });

  socket.on("disconnect", () => {
    const id = socket.id;
    find_disconnected_user(id);
    console.log(disconnected_user);
    console.log(`${disconnected_user.nickname} disconnected`);

    socket.to(user.room).emit("disconnected", disconnected_user);
  });
});

server.listen(3001);
