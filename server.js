const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; // default port 8000
var contacts = require("./contactData.js");

// Load ejs files from the /views folder
app.set("view engine", "ejs");
// Server static files (images, css, etc.) from /public folder
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  // render the views/index.ejs file
  // console.log(req.query);
  var contactList = contacts;
  if(req.query.name) {
    // filter the list of contacts
    const name = req.query.name.toLowerCase();
    contactList = contacts.filter(function(contact){
      const contactName = contact.name.toLowerCase();
      // return contacts whose name contains the string
      return contactName.indexOf(name) !== -1;
    });
  }
  res.render("index", {contacts: contactList});
});

// Start up the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
