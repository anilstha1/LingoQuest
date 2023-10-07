const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  question: String,
  choices: [String],
  type: String,
  correctAnswers: [String],
  score: {type: Number, default: 0},
  description: String,
});
var question = mongoose.model("questions", QuestionSchema);
module.exports = question;
