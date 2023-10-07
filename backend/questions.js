const express = require("express");
const question = require("./models/question.js");
const quiz = require("./models/quiz.js");

const questions = express.Router();

// get user
questions.get("/getall", async (req, res) => {
  try {
    const questions_collection = await quiz.find();
    console.log(questions_collection);
    // console.log(questions_collection);
    const questionsByLanguage = {};

    questions_collection.forEach((item) => {
      const {topic, level, totalQuestions, totalTime, questions} = item;

      // If the language key doesn't exist in the 'questionsByLanguage' object, create an empty array for it.
      if (!questionsByLanguage[topic]) {
        questionsByLanguage[topic] = {
          topic,
          level,
          totalQuestions,
          totalTime,
          questions: [],
        };
      }
      questionsByLanguage[topic].questions.push(questions);
    });

    // console.log(questionsByLanguage);

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
    const questions_collection = await quiz.find();

    addquestion = new question({
      question: req.body.question,
      choices: req.body.choices,
      type: req.body.type,
      correctAnswers: req.body.correctAnswers,
      description: req.body.description,
    });

    addquiz = new quiz({
      topic: req.body.topic,
      questions: addquestion,
    });
    addquiz.save();
    console.log(addquestion);
    console.log(addquiz);

    res.status(200).json(addquiz);
  } catch (err) {
    res.status(400).json({message: err});
  }
});

module.exports = questions;
