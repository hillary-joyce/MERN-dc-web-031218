const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");
const parks = require("./parks.js");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/parktest1";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);
//
// for (i = 0; i < parks.length; i++) {
//   db.VAPark.create({
//     name: parks[i].name,
//     type: parks[i].type,
//     img: parks[i].img,
//     url: parks[i].url,
//     description: parks[i].description,
//     address: parks[i].address,
//     visitor_center: parks[i].visitor_center,
//     entrance_fee: parks[i].entrance_fee,
//     hiking: parks[i].hiking,
//     camping: parks[i].camping,
//     comments: parks[i].comments
//   });
//   console.log("park added");
// }

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
