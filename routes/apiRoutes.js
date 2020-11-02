// LOAD DATA

var notesData = require("../db/db.json");


// ROUTING

module.exports = function(app) {
  // API GET Requests
  
  app.get("/api/notes", function(req, res) {
    res.json(notesData);
  });

  app.post("/api/notes", function(req, res) {        
      notesData.push(req.body);     
      res.json(req.body)
    });
}

  

