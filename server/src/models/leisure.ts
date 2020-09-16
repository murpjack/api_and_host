const mongoose = require("mongoose");
const Schema = mongoose.Schema;

export const activitySchema = new Schema(
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
    activityLevel: Number,
  },
  {
    createdBy: String,
    timestamps: true,
  }
);

export const activityModel = mongoose.model("activity", activitySchema);
export default activityModel;