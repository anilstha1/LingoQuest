const express = require("express");
const question = require("./models/question.js");
const questions = express.Router();

// get user
questions.get("/getall", async (req, res) => {
  try {
    const questions_collection = await question.find();
    console.log(questions_collection);
    const questionsByLanguage = {};

    questions_collection.forEach((item) => {
      const {question_type, language, question, options, correct_option} = item;

      // If the language key doesn't exist in the 'questionsByLanguage' object, create an empty array for it.
      if (!questionsByLanguage[language]) {
        questionsByLanguage[language] = [];
      }

      // Push an object containing both the question and language into the corresponding language array.
      questionsByLanguage[language].push({
        question_type,
        language,
        question,
        options,
        correct_option,
      });
    });

    console.log(questionsByLanguage);

    res.json(questionsByLanguage);
  } catch (err) {
    res.status(401).json({message: "error in opening database"});
  }
});

questions.get("/get", async (req, res) => {
  const filter = req.headers["filter"].split(",");

  console.log(filter);
  try {
    const questions_collection = await question.find({
      language: {$in: filter},
    });
    console.log(questions_collection);
    res.json(questions_collection);
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
      language: req.body.language,
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
