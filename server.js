const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000; // default port 8000
var contacts = require("./contactData.js");

// MIDDLEWARE
// Load ejs files from the /views folder
app.set("view engine", "ejs");
// Server static files (images, css, etc.) from /public folder
app.use(express.static(__dirname + '/public'));
// Parse application/x-www-form-urlencoded data. a.k.a. form data
// and put it in req.body
app.use(bodyParser.urlencoded({ extended: false }))

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
  console.log("POST /contacts ", req.body)
  // 1. read the contact data from the request object
  const nextId = contacts[contacts.length - 1].id + 1; // generate new id for contact
  const contact = Object.assign(req.body, {id: nextId}) // create contact object with id
  // 2. add new contact to list of contacts
  contacts.push(contact);
  // 3. redirect to the list of contacts (/)
  res.redirect("/");  // response object has status code: 301, location: "/". NO HTML!
});

// Start up the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
