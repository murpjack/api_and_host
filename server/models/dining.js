const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dinerSchema = new Schema(
  {
    _id: Number,
    approvalStatus: String,
    name: String,
    description: String,
    priceRating: Number,
    telephone: String,
    theme: Number,
    coords: Array,
    foodMenuUrl: String,
    hasGlutenFreeOptions: Boolean,
    hasVeganOptions: Boolean,
    hasWheelchairAccess: Boolean,
    hasBabyChangingFacilities: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports.dinerSchema = dinerSchema;
module.exports = mongoose.model("Diner", dinerSchema);
