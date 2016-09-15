const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; // default port 8000
var contacts = require("./contactData.js");

// Load ejs files from the /views folder
app.set("view engine", "ejs");
// Server static files (images, css, etc.) from /public folder
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  console.log("GET /")
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

app.get("/contacts/new", (req, res) => {
  console.log("GET /contacts/new")
  // render new.ejs to display the form
  res.render("new");
});

app.post("/contacts", (req, res) => {
  console.log("POST /contacts")
  // 1. read the contact data from the request object
  // 2. add new contact to list of contacts
  // 3. redirect to the list of contacts (/)
});

// Start up the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
