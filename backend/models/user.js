const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nickname: {type: String, required: true},
  room: {type: String, required: true},
  totalScore: {type: Number, default: 0},
});
var user = mongoose.model("users", UserSchema);
module.exports = user;
