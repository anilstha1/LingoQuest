const express = require("express");
const user = require("./models/user.js");


const users = express.Router();


// get user
users.get("/get", async (req, res) => {
  try {
    const usersdata = await user.find();
    // console.log(usersdata);

    res.json(usersdata);
  } catch (err) {
    res.status(401).json({message: "error in opening database"});
  }
});

// add user
users.post("/add", async (req, res) => {
  // console.log(req.body);
  try {
    const userdata = await user.findOne({nickname: req.body.nickname});
    if (userdata) {
      userdata.totalScore = req.body.totalScore;
      userdata.save();
      res.status(200).json(userdata);
    } else {
      adduser = new user({
        nickname: req.body.nickname,
        room: req.body.room,
        totalScore: req.body.totalScore,
      });
      adduser.save();
      res.status(200).json(adduser);
    }
  } catch (err) {
    res.status(400).json({message: err});
  }
});

module.exports = users;
