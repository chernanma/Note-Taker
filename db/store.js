
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const notesData = require("../db/db.json");

exports.display = function(req, res) {
     res.json(notesData);
  };

exports.add = function(req, res) {
    const newNote = req.body;    
    if (notesData.length!==0){
        newNote["id"]=parseInt(notesData[notesData.length-1].id)+1; // Auto ID number generation
    }else{
        newNote["id"]=1;
    }     
    notesData.push(newNote); 
    writeFileAsync("./db/db.json", JSON.stringify(notesData)).then(function() {
        console.log("db.json has been updated!");
    });
    console.log("New note has been added");
    res.json(notesData);
  };

exports.delete = function(req,res){
    const id = parseInt(req.params.id);
    for (let i=0; i < notesData.length; i++){
        if (id === notesData[i].id) {
            notesData.splice(i,1);
            let newContent = JSON.stringify(notesData,null,2);
            writeFileAsync("./db/db.json", newContent).then(function() {
            console.log ("Note has been deleted!");
            });
        }
    }
    res.json(notesData);
};
