const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

mongoose
  .connect("mongodb+srv://root:root@book-store-mern.mfuqgka.mongodb.net/database-practice-project")
  .then(() => {
    console.log("database connected!");
  })
  .catch((error) => {
    console.log(error);
  });

const notesSchema = {
  title: String,
  content: String,
};

const Note = mongoose.model("Note", notesSchema);

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile("D:/Learning/Web Development/MongoDB-Practice-Project/frontend/index.html");
});

app.post("/", (req, res) => {
  let newNote = new Note({
    title: req.body.title,
    content: req.body.content,
  });
  newNote.save();
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("server is running on port 3000!");
});
