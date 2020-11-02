
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const notesData = require("../db/db.json");

exports.display = function(req, res) {
     res.json(notesData);
  };

exports.add = function(req, res) {
    var newNote = req.body;
    newNote["id"]=1;
    // console.log(newNote);
    // console.log(newNote.title);
    notesData.push(newNote);
    writeFileAsync("./db/db.json", JSON.stringify(notesData)).then(function() {
        console.log("db.json has been updated!");
    });
    console.log("New note has been added");
    res.json(notesData);
  };


