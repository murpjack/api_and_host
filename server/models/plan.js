const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Plan = new Schema(
  {
    _id: Number,
    approvalStatus: String,
    name: String,
    description: String,
    priceRating: Number,
    diningID: Number,
    activityID: Number,
    adviceID: Number,
    createdBy: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("plan", Plan);
