// DEPENDENCIES
var path = require("path");

// ROUTING

module.exports = function(app){
  // Route to return notes.html file
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // Route to return index.html file
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
};

