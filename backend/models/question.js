const mongoose = require("mongoose");

var QuestionSchema = new mongoose.Schema({
  question_type: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
  },
  correct_option: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
var question = mongoose.model("questions", QuestionSchema);
module.exports = question;
