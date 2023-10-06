const express = require("express");
const app = express();
const mongoose = require("mongoose");
const questions = require("./questions.js");
const cors = require("cors");

mongoose.connect("mongodb://localhost:27017/lingoquest");
app.use(express.json());

// app.use(cors({origin: "http://localhost:3000", credentials: true}));

app.listen(8000);

app.use("/questions", questions);
