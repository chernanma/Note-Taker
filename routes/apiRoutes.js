// LOAD DATA

const notesStore = require("../db/store");

// ROUTING

module.exports = function(app) {
  // API GET Requests
  
  // Route to Display notes

  app.get("/api/notes",notesStore.display);
 
 // Route to Create new Note

  app.post("/api/notes", notesStore.add);

// Route to Delete Note base on Id number

  app.delete("/api/notes/:id", notesStore.delete);
 
}

  

