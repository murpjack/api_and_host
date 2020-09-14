const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = require("require-dir-all")("../models", { recursive: true });
const din = require("../models/dining");
// console.log(1234, schema);
const Selection = new Schema(
  {
    _id: Number,
    approvalStatus: String,
    name: String,
    description: String,
    priceRating: Number,
    diningID: Number,
    diner: { type: Schema.Types.ObjectId, ref: "Diner" },
    activityID: Number,
    adviceID: Number,
    createdBy: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("selection", Selection);
