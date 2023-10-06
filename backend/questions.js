const express = require("express");
const question = require("./models/question.js");
const questions = express.Router();

// get user
questions.get("/getall", async (req, res) => {
  try {
    const questions_collection = await question.find();
    console.log(questions_collection);
    res.json(questions_collection);
  } catch (err) {
    res.status(401).json({message: "error in opening database"});
  }
});

questions.get("/get", async (req, res) => {
  try {
    const questions = await user.find();
    console.log(questions);
    res.json(questions);
  } catch (err) {
    res.status(401).json({message: "error in opening database"});
  }
});

// add user
questions.post("/add", async (req, res) => {
  console.log(req.body);
  try {
    addquestion = new question({
      question_type: req.body.question_type,
      question: req.body.question,
      options: req.body.options,
      correct_option: req.body.correct_option,
    });
    await addquestion.save();
    console.log(addquestion);
    res.status(200).json(addquestion);
  } catch (err) {
    res.status(400).json({message: err});
  }
});

module.exports = questions;
