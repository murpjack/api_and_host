import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const itinerarySchema = new Schema(
  {
    _id: String,
    approvalStatus: String,
    name: String,
    description: String,
    priceRating: Number,
    dinerId: String,
    activityId: String,
    adviceId: String,
    // diner: {
    //   type: Schema.Types.ObjectId,
    //   ref: "diners",
    // },
    // activity: {
    //   type: Schema.Types.ObjectId,
    //   ref: "activities",
    // },
    // advice: {
    //   type: Schema.Types.ObjectId,
    //   ref: "advice",
    // },
  },
  {
    timestamps: true,
  }
);

export const itineraryModel = mongoose.model("Itinerary", itinerarySchema);

export default itineraryModel;