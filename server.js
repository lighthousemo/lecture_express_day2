const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; // default port 8000
const contacts = require("./contactData.js");

// Load ejs files from the /views folder
app.set("view engine", "ejs");
// Server static files (images, css, etc.) from /public folder
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  // render the views/index.ejs file
  res.render("index", {contacts: contacts});
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
