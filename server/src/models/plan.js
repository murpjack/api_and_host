const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = require("require-dir-all")("../models", { recursive: true });

const Plan = new Schema(
  {
    _id: Number,
    approvalStatus: String,
    name: String,
    description: String,
    priceRating: Number,
    diner: {
      type: Schema.Types.ObjectId,
      ref: "Diner",
    },
    activity: {
      type: Schema.Types.ObjectId,
      ref: "Activity",
    },
    advice: {
      type: Schema.Types.ObjectId,
      ref: "Advice",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("plan", Plan);
