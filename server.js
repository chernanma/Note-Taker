
// DEPENDENCIES
var express = require("express");

//Server configuration

var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3030;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ROUTER
// The below points our server to a series of "route" files.

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// LISTENER

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
