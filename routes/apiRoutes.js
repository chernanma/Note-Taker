// LOAD DATA

const notesStore = require("../db/store");


// ROUTING

module.exports = function(app) {
  // API GET Requests
  
  //Display notes

  app.get("/api/notes",notesStore.display);
 
 // Create new Note

  app.post("/api/notes", notesStore.add);

// Delete Note base on Id number

  app.delete("/api/notes/:id", notesStore.delete);

 
}

  

