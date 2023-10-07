const mongoose = require("mongoose");
const question = require("./question");

const QuizSchema = new mongoose.Schema({
  topic: String,
  level: {type: String, default: "easy"},
  totalQuestions: {type: Number, default: 10},
  totalScore: {type: Number, default: 0},
  totalTime: {type: Number, default: 20},
  questions: question.schema, // Embed the "question" schema
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

var quiz = mongoose.model("quiz", QuizSchema);
module.exports = quiz;
