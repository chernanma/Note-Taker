// LOAD DATA

var notesStore = require("../db/store");
// var notesData = require("../db/db.json");

// ROUTING

module.exports = function(app) {
  // API GET Requests
  
  //Display notes
  // app.get("/api/notes", function(req, res){
  //   res.json(notesData);

  // });
  app.get("/api/notes",notesStore.display);
 
 // Create new Note
//  app.post("/api/notes", notesData.add);
  // app.post("/api/notes", function(req, res) {
    
  //   var newNote = req.body;
  //   notesData.push(newNote);
  //   res.json(notesData);

  // });
  app.post("/api/notes", notesStore.add);

 
}

  

