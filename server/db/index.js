const mongoose = require("mongoose");
// const Future = require("fluture");

const m = require("require-dir-all")("../models", { recursive: true });
const d = require("require-dir-all")("../data", { recursive: true });

const url = "mongodb://localhost:27017/planner_db";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(url, options).catch((e) => console.error(e.message));

// Clear collections first, whilst on local server
m.dining.deleteMany({}, (rej) => rej && console.error("remove dining"));
m.leisure.deleteMany({}, (rej) => rej && console.error("remove activities"));
m.advice.deleteMany({}, (rej) => rej && console.error("remove advice"));
m.plan.deleteMany({}, (rej) => rej && console.error("remove plans"));
m.dining.insertMany(d.venues.dining, (rej) => rej);
m.leisure.insertMany(d.venues.leisure, (rej) => rej);
m.advice.insertMany(d.advice.advice, (rej) => rej);
m.plan.insertMany(d.itineraries.itineraries, (rej) => rej);

// Add initial data to collections

const db = mongoose.connection;
module.exports = db;
