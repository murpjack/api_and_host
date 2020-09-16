import mongoose from "mongoose";
const fs = require("fs");

const m = require("require-dir-all")("../models", { recursive: true });
const d = require("require-dir-all")("../seeds", { recursive: true });

const url = "mongodb://localhost:27017/planner_db";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

// Connect to MongoDB
mongoose.connect(url, options).catch((e) => console.error(e.message));
 
// Clear collections first, whilst on local server
const collections = mongoose.connection.collections;
for (const key in collections) {
  console.log(123,key);
  collections[key].deleteMany({}, (rej: any) => rej && console.error(rej.toString()));
}

// m.dining.deleteMany({}, (rej) => rej && console.error("remove dining"));
// m.leisure.deleteMany({}, (rej) => rej && console.error("remove activities"));
// m.advice.deleteMany({}, (rej) => rej && console.error("remove advice"));
// m.selection.deleteMany({}, (rej) => rej && console.error("remove plans"));
// m.plan.deleteMany({}, (rej) => rej && console.error("remove plans"));

// Add initial data to collections
fs.readdirSync("./src/seeds/")
  .map((fileName: string) => {
    const collectionName = fileName.split(".")[0];
    console.log(collectionName);

    // m.dining.insertMany(d.dining.data, (rej) => rej);
    // m.leisure.insertMany(d.leisure.data, (rej) => rej);
    // m.advice.insertMany(d.advice.data, (rej) => rej);
    // m.selection.insertMany(d.itineraries.data, (rej) => rej);
    // m.plan.insertMany(d.itineraries.data, console.log);
  });

/*
 const itineraries = {
    _id: plan._id,
    approvalStatus: plan.approvalStatus,
    name: plan.name,
    description: plan.description,
    priceRating: plan.priceRating,
    diner: m.dining.find().sort({ _id: plan.diningID }),
    activity: m.leisure.find().sort({ _id: plan.diningID }),
    advice: m.advice.find().sort({ _id: plan.diningID }),
    createdBy: plan.createdBy
 }
*/

// DATABASE
const db = mongoose.connection;
db.once("open", () => {
  console.log("MongoDB connection success");
  // m.selection
  //   .findOneAndUpdate({ _id: 0 }, { diner: d.dining.data[0] }, { new: true })
  //   // .populate("diner")
  //   .then(console.log);

  // db.collection("selections")
  //   .aggregate([
  //     {
  //       $lookup: {
  //         from: "diners",
  //         localField: "_id",
  //         foreignField: "diningID",
  //         as: "new",
  //       },
  //     },
  //   ])
  //   .toArray(function (err, res) {
  //     if (err) throw err;
  //
  //     console.log(res);
  //   });
});

// create itineraries aggregate table ~ inner join relevant ids from documents above
// m.plan.find({}).then(function (dbProducts) {
//   console.log(1, dbProducts);
// });

export default db;
