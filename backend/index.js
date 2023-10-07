const express = require("express");
const app = express();
const mongoose = require("mongoose");
const questions = require("./questions.js");
const users = require("./users.js");
const cors = require("cors");
const user = require("./models/user.js");

mongoose.connect("mongodb://localhost:27017/lingoquest");
app.use(express.json());

app.use(cors({origin: "http://localhost:3000", credentials: true}));

app.listen(8000);
const questionChangeStream = user.watch();

// Listen for change events
questionChangeStream.on("change", (event) => {
  // console.log("Change in database:", change);
  const operationType = event["operationType"];
  const document = event["fullDocument"];

  // Print the details of the change
  console.log(`${operationType}: ${document}`);
  //   if (change.operationType === 'insert') {
  //     // Handle new document insertion
  //     const newDocument = change.fullDocument;
  //     console.log('New document inserted:', newDocument);
  //   } else if (change.operationType === 'update') {
  //     // Handle document updates
  //     const updatedDocument = change.fullDocument;
  //     console.log('Document updated:', updatedDocument);
  //   } else if (change.operationType === 'delete') {
  //     // Handle document deletion
  //     const deletedDocument = change.documentKey;
  //     console.log('Document deleted:', deletedDocument);
  //   }
});
questionChangeStream.on("insert", (change) => {
  console.log("Insert event:", change);
});

app.use("/questions", questions);
app.use("/users", users);
